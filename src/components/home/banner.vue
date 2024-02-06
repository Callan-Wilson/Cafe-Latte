<template>
  <div class="banner">
    <div class="overlay flex justify-center items-center">
      <div
        class="overlay-content-container pridi flex flex-col justify-center items-center px-10 rounded-lg"
      >
        <div class="overlay-bg"></div>
        <!-- <img
          class="banner-logo my-4"
          src="../../assets/cafeLatteLogoRound.png"
          alt="logo"
        /> -->
        <div>
          <img
            class="banner-logo my-4"
            src="../../assets/logoRound.png"
            alt="logo"
          />
        </div>
        <p
          class="text-2xl text-center mb-8 max-w-[500px] text-white button-container"
        >
          Indulge in the Essence of Coffee: Immerse Yourself in the Café Latte
          Experience.
        </p>
        <div class="flex justify-around w-full mb-8">
          <button
            class="py-4 rounded transition-all flex w-[200px] bg-black"
            @click="goTo()"
          >
            <p class="text-white text-center text-xl w-full">
              Explore our Menu
            </p>
            <!-- <img
                  class="h-[30px] text-white font-normal"
                  src="../../assets/CaretRight.png"
                /> -->
          </button>
          <button
            class="py-4 rounded transition-all flex !bg-white w-[200px]"
            @click="goToBooking()"
          >
            <p class="text-xl pridi text-center w-full text-black">Book Now</p>
            <!-- <img
                  class="h-[30px] text-white font-normal"
                  src="../../assets/CaretRight.png"
                /> -->
          </button>
        </div>
      </div>
    </div>
    <img class="banner-image" :src="banner" alt="Banner Image" />
  </div>
</template>

<script setup>
import { useRouter } from "vue-router";
import banner from "../../assets/banner.jpg";

const router = useRouter();
const goTo = () => {
  router.push("/menu");
};

const goToBooking = () => {
  window.open("https://www.quandoo.com.au/place/cafe-latte-93684", "_blank");
};
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

.overlay-content-container {
  width: max-content;
  height: max-content;
}
.overlay-bg {
  // background: rgba(255,255,255, 0.3);
  background: rgba(23, 24, 23, 0.3);
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  backdrop-filter: blur(3px);
  border-radius: 5px;
}

.overlay-content-container button {
  background: rgb(10, 10, 10);
  transition-duration: 0.2s;
}
.overlay-content-container button:hover {
  background: rgb(20, 20, 20);
  transform: scale(1.03);
}

.banner-logo {
  height: 400px;
  width: 400px;
}

.button-container button:hover {
  transition: transform 0.5s ease-in-out;
  transform: scale(1.2);
}

@media (max-height: 800px) {
  .banner-logo {
    height: 320px;
    width: 320px;
  }
}
</style>
