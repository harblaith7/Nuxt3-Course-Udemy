<script setup lang="ts">
const search = ref("Toronto");
const input = ref("");

const { data: city, error } = useFetch(
  `https://api.openweathermap.org/data/2.5/weather?q=${search.value}&units=metric&appid=64e28f64b16b0f6cfeea0039ad3536da`
);

const handleClick = () => {
  const formatedSearch = input.value.trim().split(" ").join("+");
  search.value = formatedSearch;
  input.value = "";
};
</script>

<template>
  <div class="h-screen relative overflow-hidden">
    <img />
    {{ search }}
    <div class="absolute w-full h-full top-0 overlay" />
    <div class="absolute w-full h-full top-0 p-48">
      <div class="flex justify-between">
        <div>
          <h1 class="text-7xl text-white">{{ city.name }}</h1>
          <p class="font-extralight text-2xl mt-2 text-white">Sunday Dec 9th</p>
          <img
            :src="`https://openweathermap.org/img/wn/${city.weather[0].icon}@4x.png`"
            class="w-56 icon"
          />
        </div>
        <div>
          <p class="text-9xl text-white font-extralight">
            {{ city.main.temp }}°
          </p>
        </div>
      </div>
      <div class="mt-20">
        <input
          type="text"
          class="w-1/2 h-10"
          placeholder="Search a city..."
          v-model="input"
        />
        <button class="bg-sky-400 w-20 text-white h-10" @click="handleClick">
          Search
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.overlay {
  background-color: rgba(0, 0, 0, 0.5);
}

.icon {
  margin-left: -2.75rem;
  margin-top: -2.75rem;
}
</style>
