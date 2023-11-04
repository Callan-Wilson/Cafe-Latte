<template>
<div class=" p-relative h-full min-h-screen ">
  <Nav />
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
import Nav from '@/components/Nav.vue'
import Footer from '@/components/Footer.vue'

// client.getEntry('21cuPdKyJxp3kdYGcqEIUw')
//   .then((entry) => console.log(entry))
//   .catch(console.error)
</script>


<style scoped>

*{
    background-color: #fbf7f5;
}

.fadeOut-enter-active,
.fadeOut-leave-active {
    transition: opacity 0.3s;
}
.fadeOut-enter-from,
.fadeOut-leave-to {
    opacity: 0;
    transform: translateY(-10px)
}
</style>
