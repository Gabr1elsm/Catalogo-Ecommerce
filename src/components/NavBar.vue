<script setup>
import { defineProps, defineEmits } from 'vue';
import SearchInput from 'vue-search-input'

const props = defineProps({
    search: String
})

const emit = defineEmits(['update:search'])
</script>

<template>
    <div class="bg-blue-600 fixed top-0 w-full py-1 text-withe font-bold text-lg content-start ">
        <h1>Catalog</h1>
        <div class="">
            <nav class="text-black px-4 py-2 flex justify-between items-center">
                <SearchInput :modelValue="props.search" @update:modelValue="val => emit('update:search', val)"/>
            </nav>
            <div class="flex space-x-4 px-4">
                <div class="font-bold text-lg">Furniture</div>
                <div class="font-bold text-lg">Food</div>
                <div class="font-bold text-lg">Fragrances</div>
                <div class="font-bold text-lg">Beauty</div>
            </div>
        </div>
    </div>
</template>