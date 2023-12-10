<template>
  <div
    class="bg-white white py-4 w-full flex items-center justify-between px-4 z-50 flex shadow"
  >
    <div v-if="route.name" class="hidden lg:flex items-center w-1/3 pl-10">
      <p
        v-for="option in navItems"
        :key="option"
        @click="goTo(option.path)"
        class="nav-text pridi hover:text-black mr-6 text-lg cursor-pointer relative"
        :class="{
          'text-black': route.name.includes(option.title.toLowerCase()),
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
    <BurgerMenu
      class="lg:hidden"
      @click="$emit('toggleMenu')"
      :isMenuOpen="isMenuOpen"
    />
    <div class="h-full flex items-center justify-center w-1/3">
      <img
        @click="goTo('./')"
        class="mr-4 latte-logo cursor-pointer"
        src="../assets/logo.png"
      />
    </div>
    <div class="hidden lg:flex justify-end items-center w-1/3 pr-10">
      <a href="https://www.instagram.com/cafelattehawksburn/" target="blank">
        <img
          class="mr-4 social-icon cursor-pointer"
          src="../assets/instagram.png"
        />
      </a>
      <a href="https://www.facebook.com/cafelattehawksburn/" target="blank">
        <img class="social-icon cursor-pointer" src="../assets/facebook.png" />
      </a>
    </div>
  </div>
</template>

<script setup>
import { onMounted, ref, defineProps } from "vue";
import { useRouter, useRoute } from "vue-router";
import BurgerMenu from "@/components/BurgerMenu.vue";

// mobile menu
const { isMenuOpen } = defineProps(["isMenuOpen"]);

// routing
const router = useRouter();
const route = useRoute();

const navItems = ref([
  { title: "Home", path: "/" },
  { title: "Functions", path: "/functions" },
  { title: "Menu", path: "/menu" },
  { title: "Contact Us", path: "/contact" },
]);

const goTo = (path) => {
  router.push(path);
};
</script>

<style lang="scss" scoped>
.latte-logo {
  width: auto;
  height: 80px;
}
.logo-text {
  font-family: "Dancing Script", cursive;
  font-size: 36px;
  font-weight: bold;
}

.social-icon {
  height: 30px;
  width: auto;
}

.nav-text:hover .hover-line {
  width: 100%;
}

.hover-line {
  position: absolute;
  left: 0;
  bottom: 0px; /* Adjust this value to control the space between text and line */
  width: 0;
  height: 2px;
  background-color: rgb(59, 59, 59); /* Line color */
  transition: width 0.3s ease;
}
</style>
