<template>
    <header class="flex justify-between bg-gray-600 text-white py-5 px-4 h-auto w-screen mb-8 border-b-2 border-gray-700">
            <h1 class="text-2xl px-4 mr-64 ml-8 rounded font-semibold shadow-md cursor-pointer hover:shadow-lg"
            @click="window.location.reload()"> Free Thought </h1>
            <router-link :to="{ name: 'profile', params: { id: window.currentUser.id }}" 
                class="hover:shadow-lg rounded px-3 py-2 mx-5">My Profile</router-link>
            <input type="text" placeholder="Search..." class="flex-1 shadow-md rounded-lg border-solid-gray-100 px-10 mx-5"/>
    </header>
</template>
<script>
    export default {
        data(){
            return {
                window
            }
        }
    }
</script>