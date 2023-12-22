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
      <!-- <h2 class="text-3xl my-6">Services</h2>
      <div
      class="mb-8"
      style="background-color: #333333; height: 1px; width: 20%"
    ></div> -->
    <button class="py-4 px-14 rounded bg-black  mb-10" @click="goTo()">
        <p class="text-white text-xl">Book in a function today!</p>
      </button>
      <div v-if="!app.isMobile" class="flex flex-wrap justify-center w-full mt-4 mb-8 max-w-[1200px]">

          <ServiceCard
          v-for="service, index in apiStore?.functions?.services"
          :data="service"
          :class="{'lg:!mx-8': [1,4].includes(index)}"
          class="flex flex-col md:mx-8 lg:mx-0  mb-4 w-[332px] h-[350px]"
        />
       
      </div>
      <div v-else class="flex flex-col justify-center items-center mb-8">

        <ServiceCard
          v-for="service in apiStore?.functions?.services"
          :data="service"
          class="flex flex-col  mb-4 px-6"
        />
      </div>
      <!-- <button class="py-4 px-14 rounded bg-black mt-10 mb-8" @click="goTo()">
        <p class="text-white text-xl">Book in a function today!</p>
      </button> -->
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
import ServiceCard from "@/components/functions/ServiceCard.vue";
import { useHead } from "@unhead/vue";

const router = useRouter();

const apiStore = useContentfulStore();
const app = useAppStore();

const goTo = () => {
  router.push("/contact-us");
};


let { text, gallery, loaded } = toRefs(apiStore.functions);

// const services1 = ref([]);
// const services2 = ref([]);



onMounted(async () => {
  if (!apiStore.functions.loaded) {
    await apiStore.getFunctionsContent();
  }

  // services1.value = apiStore.functions.services.slice(0, apiStore.functions.services.length / 2);
  // services2.value = apiStore.functions.services.slice(apiStore.functions.services.length / 2, apiStore.functions.services.length );

 
});


useHead({
  title: "Cafe Latte Functions",
  description:
    "Nestled charmingly within Hawksburn, Melbourne, Cafe Latte warmly invites you to embark on a delightful journey of flavors. Our unassuming yet inviting space is where food enthusiasts gather to enjoy a menu crafted with care, incorporating a tasteful selection of exotic ingredients.",
  charset: "UTF-8",
  "og:title": "Cafe Latte Menu",
  "og:description":  "Nestled charmingly within Hawksburn, Melbourne, Cafe Latte warmly invites you to embark on a delightful journey of flavors. Our unassuming yet inviting space is where food enthusiasts gather to enjoy a menu crafted with care, incorporating a tasteful selection of exotic ingredients.",
  "og:image": "https://images.ctfassets.net/h4008btd2eyr/6pC4q6oLLBWlgfsNR1tRXC/a668cf65a5be39c95be017aeeab618eb/banner.jpg",
  "og:url": "https://cafelattehawksburn.com/menu",
});

</script>

<style lang="scss" scoped>
object svg{
color: rgb(45, 86, 201) !important;
}
</style>
