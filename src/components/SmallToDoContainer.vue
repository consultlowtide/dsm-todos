<template>
  <div>
    <div class="small-todo-container">
      <div class="small-todo-list">
        <ToDoItem
          v-for="todoItem in smallTodos"
          todoSize="small"
          :key="todoItem.id"
          :todoItem.sync="todoItem"
          @save-todos="saveTodoItem"
          @complete-todo="saveTodoItem"
        />
      </div>
    </div>
  </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem.vue'
import STORAGE_KEY from '@/utils/storage-key'
import BASE_TODOS from '@/utils/base-todos.js'

export default {
  components: { ToDoItem },
  data: function() {
    return {
      smallTodos: this.smallTodos
    }
  },
  props: {
    todos: {
      type: Object
    }
  },
  watch: {
    todos: {
      handler: function(newVal) {
        this.smallTodos = newVal.smallToDos
      },
      deep: true
    }
  },
  mounted() {
    this.smallTodos = this.fetchTodos().smallToDos
  },
  methods: {
    fetchTodos() {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || BASE_TODOS
    },
    findToDoIndex(todo) {
      return this.smallTodos.findIndex(todoItem => todoItem.id === todo.id)
    },
    saveTodoItem(todo) {
      const todoIndex = this.findToDoIndex(todo)

      this.smallTodos.splice(todoIndex, 1, todo)

      if (this.smallTodos[this.smallTodos.length - 1].content !== '') {
        this.smallTodos.push({
          id: this.smallTodos.length + 1,
          content: '',
          complete: false
        })
      }

      this.$emit('save-small-todos', this.smallTodos)
    }
  }
}
</script>

<style>
.small-todo-list {
  display: flex;
  flex-flow: column nowrap;
  margin: 2rem 0;
}

.small-todos-container {
  border: solid 1px var(--color-empty-border);
  border-radius: 8px;
  min-height: var(--base-height);
  padding: 1.5rem;
  color: var(--base-font-color);
  font-size: var(--base-font-size);
  color: var(--base-font-color);
  background-color: var(--color-background-card);
}

@media only screen and (min-width: 932px) {
  .app-container {
    margin: auto;
  }

  .todo-list {
    grid-template-columns: repeat(3, 1fr);
  }

  .todo-list .todo-card:first-of-type {
    grid-column: span 3;
  }

  .small-todos-container {
    grid-column: span 3;
  }
}
</style>
