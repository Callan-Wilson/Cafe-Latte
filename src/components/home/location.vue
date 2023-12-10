<template>
  <div class="w-full flex flex-col lg:flex-row">
    <div class="w-full lg:w-1/2 pridi p-4">
      <template v-if="loaded">
        <h1 class="text-4xl hidden lg:block text-center mb-10 underline">
          {{ location.heading }}
        </h1>
        <p class="hidden lg:block text-xl text-center px-4 mb-10">
          {{ location.text }}
        </p>
        <p class="text-2xl text-center underline mb-4">Address</p>
        <p class="text-center text-xl flex items-center justify-center">
          <span class="mr-2">
            <img src="../../assets/locationIcon.svg" class="location-icon" />
          </span>
          521 Malvern Rd, Toorak VIC 3142
        </p>
        <div
          class="w-full h-[100vw] my-4 lg:hidden lg:w-1/2 overflow-hidden flex items-center justify-center"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.524655054859!2d145.00131827674196!3d-37.84801263599772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6682b17e1b84b%3A0x8494ab429665d4d0!2sCafe%20Latte!5e0!3m2!1sen!2sau!4v1693493737539!5m2!1sen!2sau"
            class="w-[90vw] h-full"
            style="border: 0px; border-radius: 0.5rem"
            frameborder="0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        <p class="text-2xl text-center underline my-4 lg:mt-10">
          Opening Times
        </p>
        <p class="text-xl text-center mb-4 lg-mb-0">
          Open: 6am - 3pm, Monday - Sunday
        </p>
      </template>
      <Spinner v-else />
    </div>
    <div class="hidden lg:block lg:w-1/2 text-center">
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3150.524655054859!2d145.00131827674196!3d-37.84801263599772!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad6682b17e1b84b%3A0x8494ab429665d4d0!2sCafe%20Latte!5e0!3m2!1sen!2sau!4v1693493737539!5m2!1sen!2sau"
        class="w-full"
        height="600"
        style="border: 0px"
        frameborder="0"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";
import { useContentfulStore } from "../../stores/contentfulStore";
import Spinner from "@/components/Spinner.vue";

const store = useContentfulStore();

let { location, loaded } = toRefs(store.home);
</script>

<style lang="scss" scoped>
.location-icon {
  height: 18px;
  width: auto;
}
</style>
