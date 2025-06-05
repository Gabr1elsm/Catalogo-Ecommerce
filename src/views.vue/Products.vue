<template>
  <div class="pt-60"> 
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
      <div v-for="produto in paginatedProducts" :key="produto.id" class="border p-4 rounded-lg shadow-md">
        <h2 class="font-bold text-lg">{{ produto.title }}</h2>
        <p class="text-gray-700">R$ {{ produto.price.toFixed(2) }}</p>
        <p class="text-gray-500 text-sm">{{ produto.category }}</p>
      </div>
    </div>

    <div class="flex justify-center mt-4 space-x-2">
      <button
        @click="prevPage"
        :disabled="currentPage === 1"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Anterior
      </button>
      <span class="px-4 py-2">Página {{ currentPage }} de {{ totalPages }}</span>
      <button
        @click="nextPage"
        :disabled="currentPage === totalPages"
        class="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 disabled:opacity-50"
      >
        Próximo
      </button>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import axios from 'axios';

const result = ref({ products: [] });
const currentPage = ref(1);
const itemsPerPage = 8; 


axios.get('https://dummyjson.com/products')
  .then(response => {
    result.value = response.data;
  })
  .catch(error => {
    console.error("Erro ao buscar produtos:", error);
  });


const paginatedProducts = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage;
  const end = start + itemsPerPage;
  return result.value.products.slice(start, end);
});


const totalPages = computed(() => {
  return Math.ceil(result.value.products.length / itemsPerPage);
});


const nextPage = () => {
  if (currentPage.value < totalPages.value) {
    currentPage.value++;
  }
};


const prevPage = () => {
  if (currentPage.value > 1) {
    currentPage.value--;
  }
};
</script>