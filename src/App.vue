<template>
  <div id="app">
    <h1>Home Page</h1>
     <Todo></Todo>
  </div>
</template>

<script>
import Todo from './Components/Todo';

export default {
  name: 'App',
  components: {
    Todo,
  }
};
</script>

<style>
#app {
  text-align: center;
  padding: 20px;
}
</style>
