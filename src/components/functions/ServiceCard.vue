<template>
  <div class="shadow-lg rounded-lg p-6 bg-white mx-4 lg:mx-0">
    <!-- <img :src="data.icon" class=" h-[50%] object-fit my-4 text-red" /> -->
    <object
      :data="data.icon"
      class="h-[200px] md:h-[50%] object-fit my-4 mb-8"
    />
    <p class="text-center mb-4">{{ data.text }}</p>
  </div>
</template>

<script setup>
defineProps(["data"]);
</script>

<style lang="scss" scoped></style>
