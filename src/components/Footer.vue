<template>
  <div
    v-if="route.name"
    class="footer w-full flex flex-col px-8  pridi justify-between border border-top relative"
  >
    <div class="absolute top-0 right-0 p-4">
      <img class="logo" src="../assets/cafeLatteLogo.jpg" />
    </div>
    <div class="flex w-2/3 justify-around pb-8 pt-[70px] text-lg min-h-content ">
      <div class="flex flex-col">
        <p
          v-for="item in firstColItems"
          :key="item"
          class="mb-6 footer-text w-max cursor-pointer"
          :class="{
            'text-black': route.name.includes(item.title.toLowerCase()),
          }"
          @click="goTo(item.path)"
        >
          {{ item.title }}
          <span
            :class="{
              '!w-full': route.name.includes(item.title.toLowerCase()),
            }"
            class="hover-line"
          ></span>
        </p>
      </div>
      <div class="divider"></div>
      <div class="flex flex-col">
        <p
          v-for="item in secondColItems"
          :key="item"
          class="mb-6 footer-text w-max cursor-pointer"
          :class="{
            'text-black': route.name.includes(item.title.toLowerCase()),
          }"
          @click="goTo(item.path)"
        >
          {{ item.title }}
          <span
            :class="{
              '!w-full': route.name.includes(item.title.toLowerCase()),
            }"
            class="hover-line"
          ></span>
        </p>
      </div>
      <div class="divider"></div>
      <div class="flex flex-col ">
        <p
          v-for="item in thirdColItems"
          :key="item"
          class="footer-text w-max cursor-pointer"
          :class="{
            'text-black': route.name.includes(item.title.toLowerCase()),
          }"
          @click="goTo(item.path)"
        >
          {{ item.title }}
          <span
            :class="{
              '!w-full': route.name.includes(item.title.toLowerCase()),
            }"
            class="hover-line"
          ></span>
        </p>
      </div>
    </div>

    <div class="flex justify-between items-center py-2 w-full">
      <div class="text-gray-500">Ph | (03) 7036 0084</div>
      <div class="flex items-center text-gray-500">
        <img src="../assets/locationIcon.svg" class="location-icon" />
        <p class="ml-2">521 Malvern Rd, Toorak VIC 3142</p>
      </div>
      <div class="flex">
        <img class="social-icon pr-4" src="../assets/instagram.png" />
        <img class="social-icon" src="../assets/facebook.png" />
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute, useRouter } from "vue-router";

const route = useRoute();
const router = useRouter();

const goTo = (path) => {
  router.push(path);
}

const firstColItems = [
  {
    title: "Home",
    path: "/",
  },
  // {
  //   title: "About Us",
  //   path: "/about-us",
  // },
  {
    title: "Functions",
    path: "/functions",
  },
];
const secondColItems = [
  {
    title: "Menu",
    path: "/menu",
  },
  {
    title: "Bookings",
    path: "/bookings",
  },
];

const thirdColItems = [
  {
    title: "Contact Us",
    path: "/contact",
  },
];
</script>

<style scoped>
.footer {
  background-color: white;
  position: absolute;
  bottom: 0px;
}

.logo {
  width: 100px;
  height: auto;
}

.social-icon {
  height: 30px;
  width: auto;
}

.location-icon {
  height: 18px;
  width: auto;
}

.divider {
  height: 156px;
  width: 1px;
  background: rgb(202, 198, 198);
}

.footer-text:hover .hover-line {
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
