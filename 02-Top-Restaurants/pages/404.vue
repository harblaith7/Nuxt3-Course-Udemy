<template>
  <div>
    <div class="container">
      <NuxtLayout name="error">
        <template #header>
          <h1>Page not found</h1>
        </template>

        <template #redirectEl>
          <NuxtLink to="/">Go Back</NuxtLink>
        </template>
      </NuxtLayout>
    </div>
  </div>
</template>

<style scoped>
.container {
  text-align: center;
  margin-top: 5rem;
}

img {
  width: 10rem;
}
</style>
