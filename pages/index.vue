<template>
  <div>
    <input type="text" placeholder="email" v-model="userCredentials.email" />
    <input
      type="password"
      placeholder="password"
      v-model="userCredentials.password"
    />
    <button @click.prevent="loginUser">Login</button>
    <button @click="logoutUser">Logout</button>

    <div >Userrrr:{{ auth?.user?.data }}</div>
  </div>
</template>
<script setup>
const auth = useAuthStore();
const userCredentials = {
  email: "",
  password: ""
};


async function loginUser() {
  const data = await auth.login(userCredentials);
  console.log(data);
}

async function logoutUser() {
  await auth.logout()
}
</script>
