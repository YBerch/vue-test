<template>
    <div class="todo-item-container">
        <div class="todo-item">{{ item.title }}</div>
        <buttonCustom @onAction="onClick">Remove</buttonCustom>
    </div>
</template>

<script>
import buttonCustom from "./buttonCustom";
  export default {
    name: "TodoListItem",

    components: {
      buttonCustom
    },

    props: {
      item: Object
    },

    methods: {
      onClick(){
        this.$emit('onRemove', this.item.id)
      }
    }
  }
</script>

<style scoped>
    .todo-item {
        background-color: azure;
        padding: 5px 10px;
        display: flex;
        justify-content: center;
        border: 1px solid cadetblue;

        width: 300px;
        border-radius: 3px;
        align-items: center;
    }

    .todo-item-container {
        width: 300px;
        display: flex;
        justify-content: space-between;
        margin-top: 10px;
    }

</style>