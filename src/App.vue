<template>
    <div id="app">
        <Component :is="component"></Component>
    </div>
</template>

<script>
import Component from './components/component.vue';

export default {
  name: 'app',
  components: {
    Component,
  },
};
</script>

<style>
    #app {
        margin: 0;
        padding: 0;
    }
</style>
