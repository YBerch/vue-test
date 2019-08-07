<template>
    <div class="input">
        <input :value="value" @input="onChange" :placeholder="$attrs.placeholder" />
    </div>
</template>

<script>
  export default {
    name: "InputCustom",
    inheritAttrs: false,

    props: {
      value: String
    },

    methods: {
      onChange(e){
        this.$emit('input', e.target.value);
      }
    }
  }
</script>

<style scoped>
    .input {
        width: 300px;
        border: 1px solid #999fa0;
        border-radius: 3px;
        align-items: center;
    }

    input {
        width: 200px;
        height: 30px;
        font-size: 20px;
        border: none;
        box-shadow: none;
    }

    input:focus {
        outline: none;
    }
</style>