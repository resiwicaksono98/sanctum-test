<template>
    <div>
        <input type="text" placeholder="email" v-model="userCredentials.email">
        <input type="password" placeholder="password" v-model="userCredentials.password">
        <button @click="loginUser">Login</button>

        <div>{{ user }}</div>
    </div>
</template>
<script setup>
const { login } = useSanctumAuth();

const user = useSanctumUser();

console.log(user.value);

const userCredentials = {
    email: '',
    password: '',
};

async function loginUser() {
    await login(userCredentials);
}
</script>
