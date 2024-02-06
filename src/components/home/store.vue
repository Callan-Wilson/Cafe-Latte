<template>
  <div class="flex flex-col items-center lg:flex-row lg:h-[500px] mt-8">
    <template v-if="loaded">
      <div
        class="events-image flex overflow-hidden items-center justify-center w-full px-4 lg:h-full"
      >
        <img
          class="object-cover object-bottom lg:object-center rounded-lg w-full lg:w-auto h-full"
          src="@/assets/storeImage.jpg"
          alt="Image"
        />
      </div>
      <div
        class="flex flex-col justify-center items-center lg:items-end w-full h-full"
      >
        <div class="w-full">
          <p
            class="pridi w-full mt-8 lg:mt-0 px-8 lg:px-1 lg:text-xl lg:w-4/5 text-center lg:!leading-10"
          >
            {{ location.text }}
          </p>
        </div>
      </div>
    </template>
    <div v-else class="w-full h-full flex justify-center items-center">
      <Spinner />
    </div>
  </div>
</template>

<script setup>
import { toRefs } from "vue";
import { useContentfulStore } from "@/stores/contentfulStore.js";
import { useAppStore } from "@/stores/appStore.js";
import Spinner from "@/components/Spinner.vue";

const store = useContentfulStore();
const appStore = useAppStore();

let { location, loaded } = toRefs(store.home);
</script>

<style lang="scss" scoped>
// .events-image {
//   height: 300px;
// }

// @media (min-width: 550px) {
//   .events-image {
//     height: 400px;
//   }
// }
</style>
