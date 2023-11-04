<template>
  <div
    class="max-h-[500px] h-full   flex rounded flex-col  shadow-lg w-full pb-2"
  >
    <img :src="menuItem.image" alt="Menu Item" class="menu-item-image mb-2" />
    <div class="flex-grow flex flex-col justify-between">
      <div>
        <div class="flex w-full px-4 mb-1">
          <h3 class="pridi bold text-xl">{{ menuItem.title }}</h3>
        </div>
        <p class="px-4 pridi">{{ menuItem.description }}</p>
      </div>
      <div class="dietary-requirements flex items-center justify-center mt-2">
        <div
          class="flex items-center mb-2"
          v-for="(requirement, index) in menuItem.dietary"
          :key="requirement"
        >
          <span class="pridi text-md">
            {{ requirement }}
          </span>
          <div
            v-if="
              menuItem.dietary.length > 1 && index != (menuItem.dietary.length - 1)
            "
            class="bg-black rounded-full w-1 h-1 mx-2"
          ></div>
        </div>
      </div>

    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

const props = defineProps({
  menuItem: {
    type: Object,
    required: true,
  },
});
</script>

<style scoped>


.menu-item-image {
  width: 100%;
  height: 60%;
  object-fit: cover;
  border-radius: 8px 8px 0 0;
}

.menu-item-title {
  margin: 10px 0;
  font-size: 18px;
  font-weight: bold;
}

.dietary-requirements {
  gap: 4px;
}

.dietary-requirement {
  font-size: 12px;
}
</style>
