<template>
  <div
    :class="{
      complete: todo.complete,
      incomplete: !todo.complete
    }"
  >
    <label :for="`todo-${todo.id}`" v-if="todo.title !== ''">
      <input
        type="checkbox"
        :id="`todo-${todo.id}`"
        :defaultChecked="todo.complete"
        @change="completeTodo"
      />
      {{ todo.title }}
    </label>
    <input
      v-else
      type="text"
      placeholder="Enter a todo!"
      enter-button="Add"
      @keydown.enter="addTodo"
    />
  </div>
</template>

<script>
export default {
  props: ['todoItem', 'size'],
  data: function() {
    return {
      todo: this.todoItem
    }
  },
  watch: {
    todoItem: function(newVal) {
      this.todo = newVal
    }
  },
  methods: {
    completeTodo() {
      this.todo.complete = !this.todo.complete

      this.$emit('complete-todo', this.todo)
    },
    addTodo($event) {
      const newTodo = {
        id: this.todo.id,
        title: $event.target.value,
        complete: false
      }

      this.todo = newTodo

      this.$emit('save-todos', newTodo, this.size)
    }
  }
}
</script>

<style scoped>
.complete {
  text-decoration: line-through;
}
</style>
