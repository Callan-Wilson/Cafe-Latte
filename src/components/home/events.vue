<template>
  <div
    class="flex flex-col-reverse items-center lg:mt-4 lg:flex-row lg:h-[500px]"
  >
    <template v-if="loaded">
      <div
        class="flex flex-col justify-center items-center lg:items-end w-full h-full"
      >
        <div class="w-full lg:w-4/5 text-center lg:text-left">
          <h1
            v-if="!appStore.isMobile"
            class="text-2xl lg:text-5xl pridi mb-4 mt-4 lg:mt-0"
          >
            {{ events.heading }}
          </h1>
          <h2 class="text-xl lg:text-3xl pridi my-4">
            {{ events.subheading }}
          </h2>
          <p class="pridi text-left w-full px-8 lg:px-1 lg:text-xl lg:w-4/5+">
            {{ events.text }}
          </p>
        </div>
      </div>
      <div
        class="flex overflow-hidden items-center justify-center w-full h-[200px] px-4 lg:h-full"
      >
        <img
          class="object-cover object-top lg:object-center rounded-lg w-full lg:w-auto h-full lg:h-4/5"
          :src="events.image"
          alt="Image"
        />
      </div>
      <h1 class="text-2xl pridi mb-4 mt-4 lg:mt-0 lg:hidden">
        {{ events.heading }}
      </h1>
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

let { events, loaded } = toRefs(store.home);
</script>

<style lang="scss" scoped></style>
