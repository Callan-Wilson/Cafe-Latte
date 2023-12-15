<template>
  <div class="flex flex-col items-center lg:pt-10 pridi">
    <h1 class="hidden lg:block text-4xl mb-6 lg:mb-10">Functions</h1>
    <Spinner v-if="!loaded" class="mt-20" />
    <template v-else>
      <Slideshow :gallery="gallery"/>
      <h1 class="lg:hidden my-6  text-4xl lg:mb-10">Functions</h1>
      <p class="text-center max-w-[900px] text-lg mb-10 px-4">
        {{ text }}
      </p>
      <h2 class="text-2xl mb-6">Services</h2>
      <div v-if="!app.isMobile" class="flex w-full max-w-[1000px]">
        <div class="px-8 w-1/2">
          <div
            v-for="service in services1"
            :key="service"
            class="flex flex-col justify-center items-center mb-4"
          >
            <!-- <div class="rounded-full bg-black p-1 mr-4"></div> -->
            <p class="text-center mb-4">{{ service }}</p>
            <span
              class="mb-6"
              style="background-color: #333333; height: 1px; width: 30%"
            ></span>
          </div>
        </div>
        <div class="px-8 w-1/2">
          <div
            v-for="service in services2"
            :key="service"
            class="flex flex-col justify-center items-center mb-4"
          >
            <!-- <div class="rounded-full bg-black p-1 mr-4"></div> -->
            <p class="text-center mb-4">{{ service }}</p>
            <span
              class="mb-6"
              style="background-color: #333333; height: 1px; width: 30%"
            ></span>
          </div>
        </div>
      </div>
      <div v-else class="flex flex-col justify-center items-center">
        <div
          v-for="service in apiStore?.functions?.services"
          :key="service"
          class="flex flex-col justify-center items-center mb-4 px-6"
        >
          <!-- <div class="rounded-full bg-black p-1 mr-4"></div> -->
          <p class="text-center mb-4">{{ service }}</p>
          <span
            class="mb-6"
            style="background-color: #333333; height: 1px; width: 30%"
          ></span>
        </div>
      </div>
      <button class="py-4 px-14 rounded bg-black mt-10 mb-8" @click="goTo()">
        <p class="text-white text-xl">Book in a function today!</p>
      </button>
    </template>
  </div>
</template>

<script setup>
import { ref, toRefs, onMounted } from "vue";
import { useRouter } from "vue-router";
import { useContentfulStore } from "../stores/contentfulStore.js";
import { useAppStore } from "../stores/appStore.js";
import Spinner from "@/components/Spinner.vue";
import Slideshow from "@/components/functions/Slideshow.vue";

const router = useRouter();

const apiStore = useContentfulStore();
const app = useAppStore();

const goTo = () => {
  router.push("/contact-us");
};


let { text, gallery, loaded } = toRefs(apiStore.functions);

const services1 = ref([]);
const services2 = ref([]);



onMounted(async () => {
  if (!apiStore.functions.loaded) {
    await apiStore.getFunctionsContent();
  }

  services1.value = apiStore.functions.services.slice(0, apiStore.functions.services.length / 2);
  services2.value = apiStore.functions.services.slice(apiStore.functions.services.length / 2, apiStore.functions.services.length );

 
});




</script>

<style lang="scss" scoped>

</style>
