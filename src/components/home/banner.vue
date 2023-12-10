<template>
  <div class="banner">
    <div class="overlay flex justify-center items-center">
      <div
        class="overlay-content pridi flex flex-col justify-center items-center px-10 rounded-lg"
      >
        <img
          class="banner-logo my-4"
          src="../../assets/cafeLatteLogoRound.png"
          alt="logo"
        />
        <p class="text-2xl text-center mb-8 max-w-[500px] text-white">
          Indulge in the Essence of Coffee: Immerse Yourself in the Café Latte
          Experience.
        </p>
        <div class="flex justify-around w-full mb-8">
          <button
            class="py-4 rounded transition-all flex w-[200px]"
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
import banner from "../../assets/banner.jpg";
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
