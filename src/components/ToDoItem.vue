<template>
  <div
    :class="{
      'todo-item': true,
      'todo-item--complete': todo.complete
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
  props: ['todoItem', 'size'],
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

      this.$emit('save-todos', newTodo, this.size)
    }
  }
}
</script>

<style scoped>
.todo-item {
  cursor: pointer;
  user-select: none;
}

.todo-item--complete {
  text-decoration: line-through;
}

.edit-icon {
  margin-left: var(--base-space);
}
</style>
