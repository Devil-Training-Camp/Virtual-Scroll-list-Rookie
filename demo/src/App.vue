<script setup lang="ts">
import { reactive } from 'vue';
import VirtualList from '../../src/virtual-list';
import HelloWorld from './components/HelloWorld.vue';
const dataSources = reactive<{ id: number; value: number }[]>([]);
for (let i = 0; i < 50; i++) {
  dataSources.push({
    id: Math.random(),
    value: i,
  });
}
</script>

<template>
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="/vite.svg" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img src="./assets/vue.svg" class="logo vue" alt="Vue logo" />
    </a>
    <VirtualList
      class="scroll"
      :data-sources="dataSources"
      data-key="id"
      :data-component="HelloWorld"
      :keeps="20"
    />
  </div>
</template>

<style scoped>
.scroll {
  height: 400px;
  overflow-y: auto;
}
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
