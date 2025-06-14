<template>
  <div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 xl:grid-cols-5 gap-3 p-3">
      <ProductsCard
        v-for="produto in filteredProducts"
        :key="produto.id"
        :product="produto"
        @show-details="openProductDetails"
      />
    </div>

    <div class="flex justify-center mt-4 space-x-2">
      <button @click="prevPage" :disabled="currentPage === 1" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50">&lt;</button>
      <span class="px-4 py-2">Page {{ currentPage }} of {{ totalPages }}</span>
      <button @click="nextPage" :disabled="currentPage === totalPages" class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50">&gt;</button>
    </div>

    <div v-if="showModal" class="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div class="bg-white p-6 rounded-lg shadow-xl max-w-lg w-full relative">
        <button @click="closeModal" class="absolute top-2 right-2 text-gray-500 hover:text-gray-700 text-2xl font-bold">&times;</button>
        <h3 class="text-2xl font-bold mb-4">{{ selectedProduct.title }}</h3>
        <img :src="selectedProduct.thumbnail" :alt="selectedProduct.title" class="w-full h-64 object-contain mb-4 rounded" />
        <p class="text-gray-800 text-lg mb-2">R$ {{ selectedProduct.price.toFixed(2) }}</p>
        <p class="text-gray-600 mb-4">{{ selectedProduct.description }}</p>
        <p class="text-gray-500 text-sm">Category: {{ selectedProduct.category }}</p>
       <p class="mt-2"><strong>Stock:</strong> {{ selectedProduct.stock }} units available</p>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue'
import axios from 'axios'
import ProductsCard from '../components/ProductsCard.vue'
import { defineProps } from 'vue'

const props = defineProps({
  search: String,
  category: String
})

const result = ref({ products: [] })
const currentPage = ref(1)
const itemsPerPage = 5

const showModal = ref(false)
const selectedProduct = ref(null)

axios.get('https://dummyjson.com/products')
  .then(response => {
    result.value.products = response.data.products
  })
  .catch(error => {
    console.error("Erro ao carregar os produtos:", error)
  })

const filteredProducts = computed(() => {
  return result.value.products
    .filter(prod => {
      const matchesSearch = prod.title.toLowerCase().includes(props.search?.toLowerCase() || '')
      const matchesCategory = props.category ? prod.category.toLowerCase() === props.category.toLowerCase() : true
      return matchesSearch && matchesCategory
    })
    .slice((currentPage.value - 1) * itemsPerPage, currentPage.value * itemsPerPage)
})

const totalPages = computed(() => {
  const filtered = result.value.products.filter(prod => {
    const matchesSearch = prod.title.toLowerCase().includes(props.search?.toLowerCase() || '')
    const matchesCategory = props.category ? prod.category.toLowerCase() === props.category.toLowerCase() : true
    return matchesSearch && matchesCategory
  })
  return Math.ceil(filtered.length / itemsPerPage)
})

const nextPage = () => {
  if (currentPage.value < totalPages.value) currentPage.value++
}

const prevPage = () => {
  if (currentPage.value > 1) currentPage.value--
}

watch([() => props.search, () => props.category], () => {
  currentPage.value = 1
})

const openProductDetails = (product) => {
  selectedProduct.value = product
  showModal.value = true
}

const closeModal = () => {
  showModal.value = false
  selectedProduct.value = null
}
</script>
