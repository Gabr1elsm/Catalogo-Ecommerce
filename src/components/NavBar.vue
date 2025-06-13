<script setup>
import { defineEmits, defineProps } from 'vue'
import SearchInput from 'vue-search-input'

const props = defineProps({
  search: String,
})

const emit = defineEmits(['update:search', 'filter-category'])

const filterByCategory = (category) => {
  emit('filter-category', category)
}
</script>

<template>
  <div class="bg-blue-800 fixed top-0 w-full text-white font-bold z-10">
    <h1 class="fixed left-0 ">Catalog</h1>
    <nav class="text-black px-1 py-2 flex justify-center">
      <SearchInput :modelValue="props.search" @update:modelValue="val => emit('update:search', val)" />
    </nav>
    <div class="flex justify-center gap-4 text-white py-2">
      <button @click="filterByCategory('furniture')" class="text-lg">Furniture</button>
      <button @click="filterByCategory('groceries')" class="text-lg">Groceries</button>
      <button @click="filterByCategory('fragrances')" class="text-lg">Fragrances</button>
      <button @click="filterByCategory('beauty')" class="text-lg">Beauty</button>
      <button @click="filterByCategory('')" class="text-lg text-yellow-300">All</button>
    </div>
  </div>
</template>
