<template>
  <div class="flex flex-col items-center pt-10 pridi">
    <h1 class="text-4xl mb-10">Functions</h1>
    <div class="w-[1000px] h-[500px] rounded mb-10 flex justify-center items-center overflow-hidden" >
        <img class="scale-effect" src="../assets/functions.jpg"  />
    </div>
    <p class="text-center max-w-[900px] mb-10">
      Experience the epitome of refinement at Cafe Latte's Functions Page.
      Unveil the allure of our stylish bar and inviting dining area, where
      exceptional cuisine harmoniously integrates with rare and captivating
      ingredients. Our dedicated team is poised to craft an unforgettable event
      tailored precisely to your preferences, promising an ambiance that
      perfectly complements the splendid flavors on offer.
    </p>
    <h2 class="text-2xl mb-6">Services</h2>
    <div class="flex w-full max-w-[1000px]">
        <div class="px-8 w-1/2">
        <div v-for="service in services1" :key="service" class="flex flex-col justify-center items-center mb-4 ">
            <!-- <div class="rounded-full bg-black p-1 mr-4"></div> -->
            <p class="text-center mb-4">{{ service }}</p>
            <span class="mb-6" style="background-color: #333333; height: 1px; width: 30%;"></span>
        </div>
    </div>
    <div class="px-8 w-1/2">
        <div v-for="service in services2" :key="service" class="flex flex-col justify-center items-center mb-4 ">
            <!-- <div class="rounded-full bg-black p-1 mr-4"></div> -->
            <p class="text-center mb-4">{{ service }}</p>
            <span class="mb-6" style="background-color: #333333; height: 1px; width: 30%;"></span>
        </div>
    </div>

</div>
<button class="py-4 px-14 rounded bg-black mt-10 mb-8" @click="goTo()">
  <p class="text-white text-xl">Book in a function today!</p>
</button>

  </div>
</template>

<script setup>
import {ref} from 'vue';
import {useRouter} from 'vue-router'

const router = useRouter()

const goTo = () => {
    router.push('/contact')
}

const services1 = ref([
    "Tailored culinary experiences designed to match your event's theme and preferences.",
    "Elevate the dining experience with expertly chosen wine and beverage pairings that complement the exquisite cuisine.",
    "Indulge in an array of dishes that artfully integrate rare and captivating ingredients from around the world."
])
const services2 = ref([
    "Enjoy skillfully crafted cocktails and beverages from our experienced mixologists at the elegant bar.",
    "Our attentive and professional staff ensure that every guest receives impeccable service throughout the event.",
    "Experience the exclusivity of our private dining area for a more intimate and personalized atmosphere."
])

</script>

<style lang="scss" scoped>
.scale-effect{
    overflow: hidden;
    animation: scale 20s;
}

@keyframes scale{
    from{
        transform: scale(1.5);
       
    }

    to{
    transform: scale(1);
   
    
    }
}
</style>
