<template>
  <nav>
    <div>
      <h1>Artikle</h1>
      <label class="switch">
        <input type="checkbox" />
        <span class="slider round"></span>
      </label>
    </div>
  </nav>
</template>

<style scoped>
nav {
  border-bottom: 1px solid rgba(73, 72, 72, 0.274);
  padding: 20px;
  box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.253);
}

nav div {
  width: 50%;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
}

h1 {
  font-size: 30px;
}

/* The switch - the box around the slider */
.switch {
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
}

/* Hide default HTML checkbox */
.switch input {
  opacity: 0;
  width: 0;
  height: 0;
}

/* The slider */
.slider {
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

.slider:before {
  position: absolute;
  content: "";
  height: 26px;
  width: 26px;
  left: 4px;
  bottom: 4px;
  background-color: white;
  -webkit-transition: 0.4s;
  transition: 0.4s;
}

input:checked + .slider {
  background-color: #2196f3;
}

input:focus + .slider {
  box-shadow: 0 0 1px #2196f3;
}

input:checked + .slider:before {
  -webkit-transform: translateX(26px);
  -ms-transform: translateX(26px);
  transform: translateX(26px);
}

/* Rounded sliders */
.slider.round {
  border-radius: 34px;
}

.slider.round:before {
  border-radius: 50%;
}
</style>
