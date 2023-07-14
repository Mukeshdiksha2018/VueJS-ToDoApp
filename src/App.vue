<template>
  <div id="app">
    <Todo/>
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
