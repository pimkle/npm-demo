<template>
    <div id="app">
        <Component1></Component1>
    </div>
</template>

<script>
import Component1 from './components/Component1.vue';

export default {
  name: 'app',
  components: {
    Component1,
  },
};
</script>

<style>
    #app {
        margin: 0;
        padding: 0;
    }
</style>
