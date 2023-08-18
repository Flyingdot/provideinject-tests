<script setup lang="ts">
import { useTestStoreOrThrow } from ".";

const store = useTestStoreOrThrow();
</script>

<template>
  <h3>Child</h3>
  <div>{{ store.hasTest }}</div>
</template>
