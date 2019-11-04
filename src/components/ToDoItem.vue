<template>
  <div
    :class="{
      'todo-card': todoSize === 'big',
      'small-todo-card': todoSize === 'small',
      'todo-card--complete': todo.complete,
      'todo-card--incomplete': !todo.complete && todo.content !== '',
      'todo-card--empty': todo.content === '' && !isEditable
    }"
    @click="handleTodoClick"
  >
    <div>
      <span
        class="todo-card__input-field"
        :ref="`todo-ref-${todo.id}`"
        @blur="addTodo"
        @keydown.enter="addTodo"
        v-text="todo.content"
        :contenteditable="isEditable"
      >
        {{ todo.content }}
      </span>
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
export default {
  props: {
    todoItem: {
      type: Object,
      required: true
    },
    todoSize: {
      type: String,
      required: false,
      default: 'big'
    }
  },
  data: function() {
    return {
      todo: this.todoItem,
      isEditable: this.todoItem.content === 'Enter a todo' ? true : false
    }
  },
  watch: {
    todoItem: {
      handler: function(newVal) {
        this.todo = newVal
      },
      deep: true
    }
  },
  methods: {
    handleTodoClick() {
      if (this.isEditable === false && this.todo.content !== '') {
        this.completeTodo()
      } else if (this.todo.content === '') {
        this.editTodo()
      }
    },
    editTodo() {
      this.isEditable = true
      this.$nextTick(async () => {
        const selectedElement = this.$refs[`todo-ref-${this.todo.id}`]

        await selectedElement.focus()
      })
    },
    completeTodo() {
      this.todo.complete = !this.todo.complete

      this.$emit('complete-todo', this.todo)
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
  border: solid 1px var(--color-empty-border);
  min-height: var(--base-height);
  background-color: var(--color-background-card);
  border-radius: 8px;
  padding: var(--card-padding);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  transition: var(--base-transition);
  font-size: var(--base-font-size);
  color: var(--base-font-color);
  word-break: break-word;
}

.small-todo-card:not(:last-of-type) {
  cursor: pointer;
  user-select: none;
  transition: var(--base-transition);
  font-size: calc(var(--base-font-size) - 0.25rem);
  color: var(--base-font-color);
  word-break: break-word;
}

.small-todo-card:not(:last-of-type) {
  margin-bottom: 1rem;
}

.todo-card ~ .todo-card.todo-card--empty:after {
  content: '🥖';
  font-size: 4.5rem;
}

.todo-card.todo-card--empty:after {
  content: '🍞';
  font-size: 5rem;
}

.small-todo-card.todo-card--empty:after {
  content: '🥯';
  font-size: 1.5rem;
}

.todo-card__input-field {
  caret-color: var(--color-primary);
}

.todo-card__input-field:focus {
  outline-style: none;
}

.todo-card:hover {
  border-width: 2px;
}

.todo-card--complete {
  text-decoration: line-through;
  text-decoration-color: var(--color-complete-border);
}

.todo-card.todo-card--complete {
  border: solid 1px var(--color-complete-border);
}

.todo-card.todo-card--incomplete {
  border: solid 1px var(--color-incomplete-border);
}

.edit-icon {
  margin-left: var(--base-space);
}
</style>
