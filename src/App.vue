<template>
  <!-- <img alt="Vue logo" src="./assets/logo.png"> -->
  <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <state-view>
    <todo-view>

    </todo-view>
  </state-view>
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import store from './store'
import StateView from './components/StateView.vue'
import TodoView from './components/TodoView.vue';



export default {
  name: 'App',
  components: {
    StateView,
    TodoView
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
