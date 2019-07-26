<template>
  <div class="hello">
    <h1>{{ getTitle }}</h1>
    <div class="input-container">
      <inputCustom
        placeholder="input t-do item"
        v-model="currentItem"
      />
      <buttonCustom @onAction="onClick">
        Add to list
      </buttonCustom>
    </div>
    <ul class="list">
      <li v-for="item in items" :key="item.count">
        <todo-list-item
          :item="item"
          @onRemove="onRemove"
        />
      </li>
    </ul>
  </div>
</template>

<script>
import todoListItem from "./todoListItem";
import inputCustom from "./input";
import buttonCustom from "./buttonCustom";


export default {
  name: 'TodoList',

  components: {
    todoListItem,
    inputCustom,
    buttonCustom
  },
  props: {
    title: String
  },

  data(){
    return {
      currentItem: "",
      counter: 0,
      items: []
    }
  },

  methods: {
    onClick(){
      if(this.currentItem) {
        this.items.push({title: this.currentItem.toUpperCase(), id: this.counter});
        this.currentItem = "";
        this.counter++;
      }
    },
    onRemove(id){
      this.items.splice(this.items.findIndex(item => item.id === id), 1);
    }
  },

  computed: {
    getTitle(){
      return "To-Do List"
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul {
    list-style-type: none;
    padding: 0;
  }

  .hello {
    margin: 0 450px;
    align-items: center;
  }

  .input-container {
    width: 300px;
    display: flex;
    justify-content: space-between;
  }
</style>
