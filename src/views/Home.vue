<template>
  <div>
    <MobileBanner v-if="appStore.isMobile" />
    <Banner v-else />
    <Events />
    <Store />
    <Gallery class="my-4" />
    <Location />
  </div>
</template>

<script setup>
import { onMounted } from "vue";
import { useContentfulStore } from "../stores/contentfulStore.js";
import { useAppStore } from "../stores/appStore.js";
import { useHead } from "@unhead/vue";

// mobile
import MobileBanner from "@/components/mobile/Banner.vue";

// desktop
import Banner from "@/components/home/banner.vue";
import Events from "@/components/home/events.vue";
import Gallery from "@/components/home/gallery.vue";
import Location from "@/components/home/location.vue";
import Store from "@/components/home/store.vue";

const apiStore = useContentfulStore();
const appStore = useAppStore();

onMounted(async () => {
  await apiStore.loadHomeContent();
});

useHead({
  title: "Cafe Latte",
  description:
    "Indulge in the rich flavors of Cafe Latte, where passion meets perfection in every cup of coffee and every dish served. Experience the vibrant essence of our cozy cafe, where the aroma of freshly brewed coffee and the tantalizing taste of exquisite cuisine come together to create an unforgettable experience.",
  charset: "UTF-8",
  "og:title": "Cafe Latte",
  "og:description":
    "Indulge in the rich flavors of Cafe Latte, where passion meets perfection in every cup of coffee and every dish served. Experience the vibrant essence of our cozy cafe, where the aroma of freshly brewed coffee and the tantalizing taste of exquisite cuisine come together to create an unforgettable experience.",
  "og:image":
    "https://images.ctfassets.net/h4008btd2eyr/6pC4q6oLLBWlgfsNR1tRXC/a668cf65a5be39c95be017aeeab618eb/banner.jpg",
  "og:url": "https://cafelattehawksburn.com",
});
</script>

<style lang="scss" scoped>
.banner {
  position: relative; /* Make the overlay absolute to this */
  width: 100%;
  max-width: 100vw;
  max-height: calc(100vh - 80px);
  overflow: hidden;
}

.banner-image {
  width: 100vw;
  object-fit: cover;
}

.overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  // pointer-events: none; /* Allow clicks to pass through the overlay */
  z-index: 2;
}

.overlay-content {
  // background: rgba(255,255,255, 0.3);
  background: rgba(23, 24, 23, 0.3);
  width: max-content;
  height: max-content;
  backdrop-filter: blur(3px);
}

.overlay-content button {
  // background: rgb(23, 24, 23)
  background: rgb(10, 10, 10);
  transition-duration: 0.1s;
  // background: white;
}
.overlay-content button:hover {
  background: rgb(20, 20, 20);
  transform: scale(1.03);
  // background: white;
}

.banner-logo {
  height: 400px;
  width: 400px;
}
</style>
