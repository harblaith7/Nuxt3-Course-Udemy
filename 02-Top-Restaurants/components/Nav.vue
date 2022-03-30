<template>
  <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
    <div class="container-fluid">
      <NuxtLink class="navbar-brand" to="/">Restaurantly</NuxtLink>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <NuxtLink
              to="/"
              class="nav-link"
              activeClass="active"
              aria-current="page"
              >Home</NuxtLink
            >
          </li>
          <li class="nav-item">
            <NuxtLink to="/restaurants" class="nav-link" activeClass="active"
              >Restaurants</NuxtLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<style scoped>
.ml-auto {
  margin-left: auto;
}
</style>
