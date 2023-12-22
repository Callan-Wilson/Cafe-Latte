<template>
  <div class="w-full flex flex-col pb-8 lg:pb-0 lg:flex-row">
    <div class="w-full lg:w-1/2 pridi p-4">
      <template v-if="loaded">
        <p class="lg:hidden text-2xl text-center underline my-4 lg:mt-10">
          Opening Times
        </p>
        <p class="lg:hidden text-xl text-center mb-12 lg-mb-0">
          6am - 3pm, Monday - Sunday
        </p>
        <h1 class="text-4xl hidden lg:block text-center mb-12 lg:mb-8 underline">
          {{ location.heading }}
        </h1>
        <p class="hidden lg:block text-xl text-center md:px-12 mb-10">
          {{ location.text }}
        </p>
        <p class="text-2xl text-center underline mb-4">Address</p>
        <p class="text-center text-xl flex items-center justify-center">
          <span class="mr-2">
            <svg
              class="location-icon"
              version="1.0"
              id="Layer_1"
              xmlns="http://www.w3.org/2000/svg"
              xmlns:xlink="http://www.w3.org/1999/xlink"
              width="800px"
              height="800px"
              viewBox="0 0 64 64"
              enable-background="new 0 0 64 64"
              xml:space="preserve"
            >
              <g>
                <path
                  fill="#231F20"
                  d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64
		s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39
		h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
                />
                <path
                  fill="#231F20"
                  d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32
		c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
                />
                <path
                  fill="#231F20"
                  d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36
		c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
                />
              </g>
            </svg>
          </span>
          521 Malvern Rd, Toorak VIC 3142
        </p>
        <div
          class="w-full h-[100vw] max-h-[400px] my-4 lg:hidden lg:w-1/2 overflow-hidden flex items-center justify-center"
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

        <p class="hidden lg:block text-2xl text-center underline my-4 lg:mt-10">
          Opening Times
        </p>
        <p class="hidden lg:block text-xl text-center mb-4 lg-mb-0">
         6am - 3pm, Monday - Sunday
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
