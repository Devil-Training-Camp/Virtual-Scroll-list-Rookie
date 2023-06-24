<script setup lang="ts">
import { ref } from 'vue'

defineProps<{ source: { id: number, value: number } }>()

const count = ref(0)

</script>

<template>
  <div>弟 {{ source && source.id }}个</div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
</style>
