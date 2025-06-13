<script setup>
import { ref } from 'vue'
import NavBar from './components/NavBar.vue'
import Footer from './components/Footer.vue'
import Products from './views.vue/Products.vue'

const search = ref('')
const selectedCategory = ref('')

const updateSearch = (val) => {
  search.value = val
}

const updateCategory = (category) => {
  selectedCategory.value = category
}
</script>

<template>
  <NavBar :search="search" @update:search="updateSearch" @filter-category="updateCategory" />
  <div class="flex flex-col min-h-screen pt-32">
    <Products :search="search" :category="selectedCategory" />
    <Footer />
  </div>
</template>
