<template>
  <transition name="slide" mode="out-in">
    <div
      v-if="isMenuOpen"
      class="menu p-4 w-[80vw] md:w-[50vw] flex flex-col justify-between"
    >
      <div>
        <p
          v-for="option in navItems"
          :key="option"
          @click="goTo(option.path)"
          class="nav-text pridi hover:text-black text-2xl mb-8 cursor-pointer relative"
          :class="{
            'text-black underline ': route.name.includes(
              option.title.toLowerCase()
            ),
          }"
        >
          {{ option.title }}
          <span
            :class="{
              '!w-full': route.name.includes(option.title.toLowerCase()),
            }"
            class="hover-line"
          ></span>
        </p>
      </div>
      <div class="flex flex-col items-center mb-4">
        <p class="text-lg pridi">6am - 3pm, Monday - Sunday</p>
        <p class="text-lg pridi">521 Malvern Rd, Toorak VIC 3142</p>
      </div>
    </div>
  </transition>
</template>

<script setup>
import { defineProps, ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const { isMenuOpen } = defineProps(["isMenuOpen"]);
const emit = defineEmits(["toggleMenu"]);

const route = useRoute();
const router = useRouter();

const goTo = (path) => {
  router.push(path);
  emit("toggleMenu");
};

const navItems = ref([
  { title: "Home", path: "/" },
  { title: "Functions", path: "/functions" },
  { title: "Menu", path: "/menu" },
  { title: "Contact Us", path: "/contact" },
]);
</script>

<style lang="scss" scoped>
.menu {
  position: absolute; /* Use absolute positioning */
  top: 111px; /* Adjust the top value based on your navigation bar height */
  height: calc(100vh - 112px);
  left: 0px;
  //box-shadow: -2px 0 10px rgba(0, 0, 0, 0.1);
  z-index: 999;
  overflow-y: auto;
  background: rgba(255, 255, 255, 0.95);
  // background: linear-gradient(
  //   to bottom,
  //   rgba(255, 255, 255, 1),
  //   rgba(251, 247, 245, 0.8)
  // ); /* Gradient background */
  //   transform: translateX(100%);
}

.nav-text {
  animation: navEnter 0.5s forwards;
  animation-delay: 0.2s;
  opacity: 0;
}
.nav-text:first-child {
  animation-delay: 0.2s;
}
.nav-text:nth-child(2) {
  animation-delay: 0.3s;
}
.nav-text:nth-child(3) {
  animation-delay: 0.4s;
}
.nav-text:last-child {
  animation-delay: 0.5s;
}

@keyframes navEnter {
  from {
    transform: translateY(100%);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
}

/* Transition animation */
.slide-enter-active,
.slide-leave-active {
  transition: transform 0.5s;
}
.slide-enter-from, .slide-leave-to /* .slide-leave-active in <2.1.8 */ {
  transform: translateX(-100%);
}
.slide-enter, .slide-leave-from /* .slide-leave-active in <2.1.8 */ {
  transform: translateX(0);
}
</style>
