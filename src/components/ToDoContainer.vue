<template>
  <div>
    <AppHeader @reset-todos="clearTodos" />

    <div class="app-container">
      <div class="todo-list">
        <ToDoItem
          v-for="todoItem in todos.bigToDos"
          :key="todoItem.id"
          :todoItem.sync="todoItem"
          @save-todos="saveTodoItem"
          @complete-todo="saveTodoItem"
        />
        <SmallToDoContainer
          class="todo-card small-todos-container"
          @save-small-todos="saveSmallTodos"
          :todos="todos"
        />
      </div>
    </div>
  </div>
</template>

<script>
import AppHeader from '@/components/AppHeader'
import ToDoItem from '@/components/ToDoItem'
import SmallToDoContainer from '@/components/SmallToDoContainer'
import STORAGE_KEY from '@/utils/storage-key'
import BASE_TODOS from '@/utils/base-todos.js'

export default {
  components: { ToDoItem, AppHeader, SmallToDoContainer },
  data: function() {
    return {
      todos: {}
    }
  },
  mounted() {
    this.todos = this.fetchTodos()
  },
  methods: {
    fetchTodos() {
      return JSON.parse(localStorage.getItem(STORAGE_KEY)) || BASE_TODOS
    },
    clearTodos() {
      this.todos = BASE_TODOS
      this.saveTodos(this.todos)
    },
    findToDoIndex(todo) {
      return this.todos.bigToDos.findIndex(todoItem => todoItem.id === todo.id)
    },
    saveTodoItem(todo) {
      const todoIndex = this.findToDoIndex(todo)

      this.todos.bigToDos.splice(todoIndex, 1, todo)

      this.saveTodos(this.todos)
    },
    saveTodos(todos) {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(todos))
    },
    saveSmallTodos(smallTodos) {
      this.todos.smallToDos = smallTodos
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
    }
  }
}
</script>

<style scoped>
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
}
</style>
