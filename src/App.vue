<script setup>
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Products from './views.vue/Products.vue';
</script>

<template>
    <Products/>
    <div class="flex flex-col min-h">
        <NavBar />
    <div class="main-container mx-auto px-4 py-6">
        <router-view></router-view>
    </div>
    <Footer />
    </div>
</template>