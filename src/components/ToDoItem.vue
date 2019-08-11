<template>
  <div
    :class="{
      'todo-card': true,
      'todo-card--complete': todo.complete,
      'todo-card--incomplete': !todo.complete && todo.content !== ''
    }"
    @click="completeTodo"
  >
    <div>
      <add-icon v-if="todo.content === ''" @icon-click="handleIconClick" />
      <span
        v-else
        class="todo-card__input-field"
        :ref="`todo-ref-${todo.id}`"
        @blur="addTodo"
        @keydown.enter="addTodo"
        v-text="todo.content"
        :contenteditable="isEditable"
      />
      <span
        v-if="todo.content !== '' && !isEditable && todo.complete === false"
        @click="editTodo"
        class="edit-icon"
      >
        🖋
      </span>
    </div>
  </div>
</template>

<script>
import AddIcon from '@/components/AddIcon.vue'

export default {
  props: ['todoItem'],
  components: {
    AddIcon
  },
  data: function() {
    return {
      todo: this.todoItem,
      isEditable: this.todoItem.content === 'Enter a todo' ? true : false
    }
  },
  watch: {
    todoItem: function(newVal) {
      this.todo = newVal
    }
  },
  methods: {
    handleIconClick() {
      this.todo.content = ' '
      this.editTodo()
    },
    editTodo() {
      this.isEditable = true
      this.$nextTick(async () => {
        const selectedElement = this.$refs[`todo-ref-${this.todo.id}`]
        // const fieldContent = await selectedElement.textContent
        // const fieldLength = await fieldContent.length

        await selectedElement.focus()
        // return selectedElement[0].setSelectionRange(fieldLength, fieldLength)
      })
    },
    completeTodo() {
      if (this.isEditable === false && this.todo.content !== '') {
        this.todo.complete = !this.todo.complete

        this.$emit('complete-todo', this.todo)
      }
    },
    addTodo($event) {
      const newTodo = {
        id: this.todo.id,
        content: $event.target.innerText.trim(),
        complete: false
      }

      this.todo = newTodo
      this.isEditable = false

      this.$emit('save-todos', newTodo)
    }
  }
}
</script>

<style scoped>
.todo-card {
  border: solid 1px var(--empty-border);
  min-height: var(--base-height);
  background-color: var(--surface);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: var(--base-transition);
  font-size: var(--base-font-size);
  word-break: break-all;
}

.todo-card__input-field {
  caret-color: var(--primary-color);
}

.todo-card__input-field:focus {
  outline-style: none;
}

.todo-card:hover {
  border-width: 2px;
}

.todo-card--complete {
  text-decoration: line-through;
  border: solid 1px var(--complete-border);
}

.todo-card--incomplete {
  border: solid 1px var(--Incomplete-border);
}

.edit-icon {
  margin-left: var(--base-space);
}
</style>
