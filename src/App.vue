<template>
    <div id="app">
        <component></component>
    </div>
</template>

<script>
import component from './components/component.vue';

export default {
  name: 'app',
  components: {
    component,
  },
};
</script>

<style>
    #app {
        margin: 0;
        padding: 0;
    }
</style>
