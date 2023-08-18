<script setup lang="ts">
import { useProvideTestStore } from ".";
import Child from "./Child.vue";

const store = useProvideTestStore();
</script>

<template>
  <h3>Parent</h3>
  <div id="hasTest">{{ store.hasTest }}</div>
  <Child />
</template>
