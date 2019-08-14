<template>
  <div>
    <AppHeader @reset-todos="clearTodos" />

    <div class="app-container">
      <div class="todo-list">
        <ToDoItem
          class="todo-card"
          v-for="todoItem in todos"
          :key="todoItem.id"
          :todoItem.sync="todoItem"
          @save-todos="saveTodoItem"
          @complete-todo="saveTodoItem"
        />
        <div class="todo-card small-todos-container">
          Links are going to be here soon!
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem.vue'
import AppHeader from '@/components/AppHeader.vue'
import STORAGE_KEY from '@/utils/storage-key'
import BASE_TODOS from '@/utils/base-todos.js'

export default {
  components: { ToDoItem, AppHeader },
  data: function() {
    return {
      todos: this.fetchTodos()
    }
  },
  methods: {
    fetchTodos() {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || BASE_TODOS
    },
    clearTodos() {
      this.todos = Array.from(BASE_TODOS)

      this.saveTodos(Array.from(BASE_TODOS))
    },
    findToDoIndex(todo) {
      return this.todos.findIndex(todoItem => todoItem.id === todo.id)
    },
    saveTodoItem(todo) {
      const todoIndex = this.findToDoIndex(todo)

      this.todos.splice(todoIndex, 1, todo)

      this.saveTodos()
    },
    saveTodos() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
    }
  }
}
</script>

<style>
.app-container {
  max-width: 900px;
  margin: 1rem;
}

.todo-list {
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
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
