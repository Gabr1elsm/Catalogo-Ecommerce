<script setup>
import { defineProps, defineEmits } from 'vue';
import SearchInput from 'vue-search-input'

const props = defineProps({
    search: String
})

const emit = defineEmits(['update:search'])
</script>

<template>
    <div class="bg-blue-800 fixed top-0 w-full text-white font-bold ">
        <h1 class="flex justify-start">Catalog</h1>
            <nav class="text-black px-1 py-2 flex justify-center">
                <SearchInput :modelValue="props.search" @update:modelValue="val => emit('update:search', val)"/>
            </nav>
            <div class="flex justify-start gap-2 text-white">
                <div class="font-bold text-lg">Furniture</div>
                <div class="font-bold text-lg">Food</div>
                <div class="font-bold text-lg">Fragrances</div>
                <div class="font-bold text-lg">Beauty</div>
        </div>
    </div>
</template>
