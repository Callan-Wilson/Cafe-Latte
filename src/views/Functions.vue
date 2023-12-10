<template>
  <div class="flex flex-col items-center lg:pt-10 pridi">
    <h1 class="hidden lg:block text-4xl mb-6 lg:mb-10">Functions</h1>
    <Spinner v-if="!loaded" class="mt-20" />
    <template v-else>
      <div
        v-for="picture in gallery"
        :key="picture"
        :class="{ hidden: picture !== activeUrl }"
        class="w-full h-[300px] lg:w-[1000px] lg:h-[500px] rounded lg:mb-10 flex justify-center items-center overflow-hidden"
      >
        <img class="object-cover scale-effect" :src="picture" lazy />
      </div>
      <h1 class="lg:hidden my-6 lg:block text-4xl lg:mb-10">Functions</h1>
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
          v-for="service in [...services1, ...services2]"
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
import { ref, toRefs, onMounted, onBeforeUnmount } from "vue";
import { useRouter } from "vue-router";
import { useContentfulStore } from "../stores/contentfulStore.js";
import { useAppStore } from "../stores/appStore.js";
import Spinner from "@/components/Spinner.vue";

const router = useRouter();

const apiStore = useContentfulStore();
const app = useAppStore();

const goTo = () => {
  router.push("/contact");
};

let activeUrl = ref("");

let { text, gallery, loaded } = toRefs(apiStore.functions);

const services1 = ref([
  "Tailored culinary experiences designed to match your event's theme and preferences.",
  "Elevate the dining experience with expertly chosen wine and beverage pairings that complement the exquisite cuisine.",
  "Indulge in an array of dishes that artfully integrate rare and captivating ingredients from around the world.",
]);
const services2 = ref([
  "Enjoy skillfully crafted cocktails and beverages from our experienced mixologists at the elegant bar.",
  "Our attentive and professional staff ensure that every guest receives impeccable service throughout the event.",
  "Experience the exclusivity of our private dining area for a more intimate and personalized atmosphere.",
]);

let intervalId;

onMounted(async () => {
  if (!apiStore.functions.loaded) {
    await apiStore.getFunctionsContent();
  }
  console.log(gallery.value, "gallery");
  activeUrl.value = gallery.value[0];
  // Start the interval to change the activeUrl every 8 seconds
  intervalId = setInterval(() => {
    changeActiveUrl();
  }, 8000);
});

// Stop the interval when the component is unmounted
onBeforeUnmount(() => {
  clearInterval(intervalId);
});

const changeActiveUrl = () => {
  const currentIndex = gallery.value.findIndex(
    (item) => item === activeUrl.value
  );
  const nextIndex = (currentIndex + 1) % gallery.value.length;
  activeUrl.value = gallery.value[nextIndex];
};
</script>

<style lang="scss" scoped>
.scale-effect {
  overflow: hidden;
  animation: scale 20s ease-out;
}

@keyframes scale {
  from {
    transform: scale(1.5);
  }

  to {
    transform: scale(1);
  }
}
</style>
