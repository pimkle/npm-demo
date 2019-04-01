<template>
  <div class="wrapper1">
    <div class="element">
      你好，我是 Component 1
    </div>
    <part1></part1>
    <part2></part2>
  </div>
</template>

<script>
import part1 from './parts/part1.vue';
import part2 from './parts/part2.vue';

export default {
  name: 'Component1',
  components: {
    part1,
    part2,
  },
};
</script>
<style>
  .wrapper1 .element {
    width: 100px;
    height: 100px;
    background: orangered;
    display: flex;
    align-items: center;
    justify-content: center;
    text-align: center;
  }
</style>
