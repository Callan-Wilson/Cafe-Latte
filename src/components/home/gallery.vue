<template>
  <div>
    <h1 class="text-center text-2xl lg:text-3xl mt-8 pridi">
      Check out our Instagram!
    </h1>
    <div class="gallery-container">
      <template v-if="galleryLoaded">
        <!-- <transition name="slide-fade"> -->
        <!-- <div
          class="gallery"
          :style="{ transform: `translateX(${translateX}px)` }"
        > -->

        <swiper
          class="w-full h-[250px] lg:h-[250px]"
          :loop="true"
          :slides-per-view="app.isMobile ? 1 : 'auto'"
          :autoplay="{ delay: 3000 }"
          :centered-slides="app.isMobile"
          :modules="[Autoplay]"
        >
          <swiper-slide
            v-for="(post, index) in gallery"
            @click="redirectToInsta(post.url)"
            class="h-full w-full md:max-w-[350px] md:mr-8 rounded lg:overflow-hidden"
          >
            <img
              :key="index"
              :src="post.image"
              class="object-cover lg:object-fit h-full w-full cursor-pointer"
              alt="Gallery Image"
            />
          </swiper-slide>
        </swiper>
        <!-- </div> -->
        <!-- </transition> -->
      </template>
      <Spinner v-else />
    </div>
  </div>
</template>

<script setup>
import { toRefs, ref } from "vue";
import { useContentfulStore } from "../../stores/contentfulStore";
import { useAppStore } from "../../stores/appStore";
import Spinner from "@/components/Spinner.vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, EffectFade } from "swiper/modules";

const store = useContentfulStore();
const app = useAppStore();

console.log(app.isMobile);

let { gallery, galleryLoaded } = toRefs(store.home);

const redirectToInsta = (url) => {
  window.open(url, "_blank");
};
</script>

<style>
.gallery-container {
  width: 100%;
  overflow: hidden;
  position: relative;
  padding: 20px; /* Adjust to the desired gap */
  box-sizing: border-box;
}

.gallery {
  display: flex;
  transition: transform 1s;
}

.gallery-image {
  object-fit: cover;
}

@media (max-width: 1024px) {
  .swiper-wrapper {
    transition-timing-function: linear;
  }
}
</style>
