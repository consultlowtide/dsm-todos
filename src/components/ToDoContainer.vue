<template>
  <div class="full-height container">
    <AppHeader @reset-todos="clearTodos" />

    <div class="app-container">
      <div class="todo-list">
        <ToDoItem
          class="todo-card"
          v-for="todoItem in todos.todos"
          :key="todoItem.id"
          :todoItem="todoItem"
          @save-todos="saveTodoItem"
          @complete-todo="saveTodoItem"
        />
        <div class="todo-card small-todos-container">
          <ToDoItem
            v-for="smallTodoItem in todos.smallTodos"
            :key="smallTodoItem.id"
            :todoItem="smallTodoItem"
            size="small"
            @save-todos="saveTodoItem"
            @complete-todo="saveTodoItem"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import ToDoItem from '@/components/ToDoItem.vue'
import AppHeader from '@/components/AppHeader.vue'
import STORAGE_KEY from '@/utils/storage-key'
import BASE_TODOS from '@/utils/base-todos'

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
      this.todos = BASE_TODOS

      this.saveTodos(BASE_TODOS)
    },
    findToDoIndex(todo, size = null) {
      if (size === 'small') {
        return this.todos.smallTodos.findIndex(
          todoItem => todoItem.id === todo.id
        )
      }
      return this.todos.todos.findIndex(todoItem => todoItem.id === todo.id)
    },
    saveTodoItem(todo, size = null) {
      const todoIndex = this.findToDoIndex(todo, size)

      if (size === 'small') {
        this.todos.smallTodos[todoIndex] = todo

        if (todo.title !== '') this.createNewSmallTodoItem()
      } else {
        this.todos.todos[todoIndex] = todo
      }

      this.saveTodos()
    },
    createNewSmallTodoItem() {
      this.todos.smallTodos.push({
        id: this.todos.smallTodos.length + 1,
        title: '',
        complete: false
      })
    },
    saveTodos() {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(this.todos))
    }
  }
}
</script>

<style>
.full-height.container {
  min-height: 100vh;
}

.app-container {
  width: 85vw;
  max-width: 900px;
  margin: auto;
}

.todo-list {
  padding: 2rem 1.75em;
  display: grid;
  grid-template-columns: 1fr;
  gap: 2rem;
}

.todo-card {
  border-radius: 20px;
  border: solid 1px #979797;
  min-height: var(--base-height);
  background-color: var(--white);
  border-radius: 8px;
  padding: 1.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
}

.todo-card.small-todos-container {
  display: grid;
  grid-template-columns: 1fr;
  grid-auto-rows: 2rem;
  gap: 1rem 4rem;
}

@media only screen and (min-width: 750px) {
  .todo-list {
    grid-template-columns: repeat(3, 1fr);
  }

  .todo-list .todo-card:first-of-type {
    grid-column: span 3;
    font-size: 3rem;
  }

  .todo-card.small-todos-container {
    grid-column: span 3;
    grid-template-columns: 1fr 1fr;
  }
}
</style>
