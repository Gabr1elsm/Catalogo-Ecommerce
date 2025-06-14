<template>
  <div class="border p-3 rounded-lg shadow-md flex flex-col items-center justify-between text-center">
    <div class="w-full">
      <h2 class="font-bold text-base truncate">{{ product.title }}</h2>
      <p class="text-gray-700 text-sm">R$ {{ product.price.toFixed(2) }}</p>
      <img :src="product.thumbnail" :alt="product.title" class="w-full h-32 object-contain mt-2 rounded">
    </div>
    <button
      @click="emitDetails"
      class="bg-green-700 py-1.5 px-3 rounded-md hover:bg-gray-400 text-white font-bold text-sm mt-auto">Details</button>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';


const props = defineProps({
  product: {
    type: Object,
    required: true
  }
});

const emit = defineEmits(['show-details']);

const emitDetails = () => {
  emit('show-details', props.product);
};
</script>