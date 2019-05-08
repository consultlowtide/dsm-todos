<template>
  <div
    :class="{
      'todo-card': true,
      'todo-card--complete': todo.complete,
      'todo-card--incomplete': !todo.complete && todo.content !== ''
    }"
    @click="completeTodo"
  >
    <add-icon v-if="todo.content === ''" @icon-click="handleIconClick" />
    <div
      v-else
      :ref="`todo-ref-${todo.id}`"
      @blur="addTodo"
      @keydown.enter="addTodo"
      v-text="todo.content"
      :contenteditable="isEditable"
    ></div>
    <span
      v-if="todo.content !== '' && !isEditable && todo.complete === false"
      @click="editTodo"
      class="edit-icon"
      >🖋</span
    >
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
      this.$nextTick(() => this.$refs[`todo-ref-${this.todo.id}`].focus())
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
  border: solid 1px #979797;
  min-height: var(--base-height);
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: var(--base-transition);
}

.todo-card--complete {
  text-decoration: line-through;
  border: solid 1px #7ed321;
}

.todo-card--incomplete {
  border: solid 1px #d0021b;
}

.edit-icon {
  margin-left: var(--base-space);
}
</style>
