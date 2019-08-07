<template>
    <button @click="onClick"><slot></slot></button>
</template>

<script>
  export default {
    name: "ButtonCustom",

    methods: {
      onClick(){
        this.$emit('onAction')
      }
    }
  }
</script>

<style scoped>
    button {
        width: 80px;
        background-color: aliceblue;
        border: 1px solid cornflowerblue;
        border-radius: 3px;
    }

    button:hover {
        cursor: pointer;
    }

    button:focus {
        outline: none;
    }
</style>