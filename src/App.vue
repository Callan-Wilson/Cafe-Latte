<template>
  <div class="p-relative h-full min-h-screen overflow-x-hidden">
    <Nav :isMenuOpen="isMenuOpen" @toggleMenu="toggleMenu" />
    <SlideOver
      class="lg:hidden"
      :isMenuOpen="isMenuOpen"
      @toggleMenu="toggleMenu"
    />
    <router-view v-slot="{ Component }" class="footer-padding">
      <transition name="fadeOut" mode="out-in">
        <component :is="Component" />
      </transition>
    </router-view>
    <Footer />
  </div>
</template>
<script setup>
import { RouterLink, RouterView } from "vue-router";
import Nav from "@/components/Nav.vue";
import Footer from "@/components/Footer.vue";
import { ref, onBeforeMount, computed } from "vue";
import SlideOver from "@/components/SlideOver.vue";

import Spinner from "@/components/Spinner.vue";

//let appLoading = ref(false)

let isMenuOpen = ref(false);

function toggleMenu() {
  isMenuOpen.value = !isMenuOpen.value;
}
</script>

<style scoped>
* {
  background-color: #fbf7f5;
}

.fadeOut-enter-active,
.fadeOut-leave-active {
  transition: opacity 0.3s;
}
.fadeOut-enter-from,
.fadeOut-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}
</style>
