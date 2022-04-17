<script setup lang="ts">
const authState = ref<"login" | "signup">("login");
const input = reactive({
  password: "",
  email: "",
});

const { signUp, signIn, user, signOut } = useAuth();

const toggleAuthState = () => {
  if (authState.value === "login") authState.value = "signup";
  else authState.value = "login";
};

const handleSubmit = () => {
  if (authState.value === "login") {
    // SIGN
    signIn({ email: input.email, password: input.password });
  } else {
    signUp({ email: input.email, password: input.password });
  }
  input.email = "";
  input.password = "";
};
</script>

<template>
  <div>
    <NCard class="card">
      <h3>{{ authState }}</h3>
      {{ user }}
      <div class="input-container">
        <input placeholder="Email" v-model="input.email" />
        <input placeholder="Password" v-model="input.password" />
      </div>
      <NButton @click="handleSubmit">Submit</NButton>
      <NButton @click="signOut">Logout</NButton>
      <p @click="toggleAuthState">
        {{
          authState === "login"
            ? "Don't have an account? Create one now"
            : "Already have an account? Go ahead an log in"
        }}
      </p>
    </NCard>
  </div>
</template>

<style scoped>
.card {
  padding: 1rem;
  width: 25rem;
}

.card h3 {
  font-size: 1.75rem;
  text-transform: capitalize;
}

.input-container {
  display: flex;
  flex-direction: column;
}

.input-container input {
  margin-bottom: 0.3rem;
  padding: 0.2rem;
  outline: none;

  border: 0.1rem solid rgba(0, 0, 0, 0.1);
  border-radius: 0.2rem;
}

p {
  color: blue;
  font-size: 0.5rem;
  cursor: pointer;
}
</style>
