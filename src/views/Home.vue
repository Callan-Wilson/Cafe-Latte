<template>
  <div v-if="!loading">
    <div class="banner">
      <div class="overlay flex justify-center items-center">
        <div
          class="overlay-content pridi flex flex-col justify-center items-center px-10 rounded-lg"
        >
          <img
            class="banner-logo my-8"
            src="../assets/cafeLatteLogoRound.png"
            alt="logo"
          />
          <!-- <div class=" text-black font-bold w-full flex justify-center">
            <p class="text-xl mr-4">Excellent Coffee.</p>
            <p class="text-xl mr-4">Delicious Food.</p>
            <p class="text-xl">Incredible Service.</p>
          </div> -->
          <p class="text-2xl text-center mb-8 max-w-[500px] text-white">
            Indulge in the Essence of Coffee: Immerse Yourself in the Café Latte
            Experience.
          </p>
          <button
            class="py-4 px-4 rounded transition-all flex mb-8"
            @click="goTo()"
          >
            <p class="text-white text-xl mr-8">Explore our Menu</p>
            <img
              class="h-[30px] text-white font-normal"
              src="../assets/CaretRight.png"
            />
          </button>
        </div>
      </div>
      <!-- <img class="banner-image" src="../assets/banner.png" alt="Banner Image" /> -->
      <img
        class="banner-image"
        src="../assets/banner2.png"
        alt="Banner Image"
      />
    </div>
    <div>
      <Gallery />
    </div>
    <div class="w-full flex">
      <div class="w-1/2 pridi p-20">
        <h1 class="text-4xl text-center mb-10 underline">
          Location and Opening Times
        </h1>
        <p class="text-xl text-center px-4 mb-10">
          Nestled within the vibrant heart of Hawksburn, Melbourne, Cafe Latte
          stands as more than just a coffee haven. With a warm and inviting
          ambiance, it's a cherished gathering spot that mirrors the close-knit
          community it calls home. Our café proudly intertwines rich espresso
          aromas with the genuine camaraderie of Hawksburn, crafting an
          experience that not only satisfies taste buds but also fosters a sense
          of belonging.
        </p>
        <p class="text-2xl text-center underline mb-4">Address</p>
        <p class="text-center text-xl flex items-center justify-center">
          <span class="mr-2">
            <img src="../assets/locationIcon.svg" class="location-icon" />
          </span>
          521 Malvern Rd, Toorak VIC 3142
        </p>
        <p class="text-2xl text-center underline mb-4 mt-20">Opening Times</p>
        <p class="text-xl text-center">Open: 6am - 3pm Monday - Sunday</p>
      </div>
      <div class="w-1/2 text-center">
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
  </div>
</template>

<script setup>
import { onBeforeMount, ref } from "vue";
import { useContentfulStore } from "../stores/contentfulStore";
import { useRouter } from "vue-router";
import Gallery from '@/components/gallery.vue'

const router = useRouter();

const goTo = () => {
  router.push("/menu");
};



const contentfulStore = useContentfulStore();
let banner = ref("");
let loading = ref(false);

// onBeforeMount(async () => {
//     loading.value = true;
//     await contentfulStore.getHomeContent();
//     banner.value = contentfulStore.home.banner;
//     console.log(banner.value, 'banner value');
//     loading.value = false;
// });
</script>

<style lang="scss" scoped>
.banner {
  position: relative; /* Make the overlay absolute to this */
  width: 100%;
  max-width: 100vw;
  max-height: calc(100vh - 80px);
  overflow: hidden;
}

.location-icon {
  height: 18px;
  width: auto;
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
