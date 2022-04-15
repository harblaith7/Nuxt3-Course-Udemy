<script setup lang="ts">
const { data } = useFetch("/api/todo");
</script>

<template>
  <div>
    {{ data }}
    <NuxtWelcome />
  </div>
</template>
