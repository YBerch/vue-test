<template>
    <div class="navbar">
        <div class="route-link">
            <router-link :to="{name: 'home'}">Home</router-link>
        </div>
        <div class="route-link">
            <router-link :to="{name: 'login'}">Login</router-link>
        </div>
        <div class="route-link">
            <router-link :to="{name: 'news'}">News</router-link>
        </div>
        <div class="route-link">
            <router-link :to="{name: 'todolist'}">To-do List</router-link>
        </div>
        <div class="route-link">
            <router-link :to="{name: 'counter'}">Counter</router-link>
        </div>
    </div>
</template>

<script>
  export default {
    name: "headerCustom"
  }
</script>

<style scoped>
.navbar {
    display: flex;
}
.route-link {
    margin-right: 20px;
}
</style>