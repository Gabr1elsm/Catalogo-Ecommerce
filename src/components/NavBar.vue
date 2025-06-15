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
  <div class="sticky top-0 fixed w-full bg-blue-800 shadow-md text-white font-semibold z-10">
    <h1 class="fixed left-0 font-semibold text-lg">Catalog</h1>
    <nav class="text-black px-1 py-2 flex justify-center">
      <SearchInput :modelValue="props.search" @update:modelValue="val => emit('update:search', val)" />
    </nav>
    <div class="flex justify-center gap-4 text-white py-2">
      <button @click="filterByCategory('furniture')" class="text-lg hover:text-yellow-400 font-semibold">Furniture</button>
      <button @click="filterByCategory('groceries')" class="text-lg hover:text-yellow-400 font-semibold">Groceries</button>
      <button @click="filterByCategory('fragrances')" class="text-lg hover:text-yellow-400 font-semibold">Fragrances</button>
      <button @click="filterByCategory('beauty')" class="text-lg hover:text-yellow-400 font-semibold">Beauty</button>
      <button @click="filterByCategory('')" class="text-lg hover:text-yellow-400 font-semibold">All</button>
    </div>
  </div>
</template>
