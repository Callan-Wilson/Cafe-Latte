<template>
  <div
    v-if="route.name"
    class="footer w-full flex flex-col px-8 pridi justify-between border border-top relative"
  >
    <div class="absolute top-0 right-0 p-4">
      <img class="logo" src="../assets/cafeLatteLogo.jpg" />
    </div>
    <div
      class="flex w-2/3 justify-around pb-8 pt-4 sm:pt-[70px] text-lg min-h-content"
    >
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
      <div class="hidden sm:flex sm:flex-col">
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
      <div v-if="appStore.isMobile" class="flex flex-col">
        <div class="text-gray-500">Ph | (03) 7036 0084</div>
        <div class="flex items-center text-gray-500">
          <p class="">521 Malvern Rd, Toorak VIC 3142</p>
        </div>
      </div>
      <div class="hidden lg:block text-gray-500">Ph | (03) 7036 0084</div>
      <div class="hidden lg:flex items-center text-gray-500">
        <svg
          class="location-icon"
          version="1.0"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="800px"
          height="800px"
          viewBox="0 0 64 64"
          enable-background="new 0 0 64 64"
          xml:space="preserve"
        >
          <g>
            <path
              fill="#231F20"
              d="M32,0C18.745,0,8,10.745,8,24c0,5.678,2.502,10.671,5.271,15l17.097,24.156C30.743,63.686,31.352,64,32,64
		s1.257-0.314,1.632-0.844L50.729,39C53.375,35.438,56,29.678,56,24C56,10.745,45.255,0,32,0z M48.087,39h-0.01L32,61L15.923,39
		h-0.01C13.469,35.469,10,29.799,10,24c0-12.15,9.85-22,22-22s22,9.85,22,22C54,29.799,50.281,35.781,48.087,39z"
            />
            <path
              fill="#231F20"
              d="M32,14c-5.523,0-10,4.478-10,10s4.477,10,10,10s10-4.478,10-10S37.523,14,32,14z M32,32
		c-4.418,0-8-3.582-8-8s3.582-8,8-8s8,3.582,8,8S36.418,32,32,32z"
            />
            <path
              fill="#231F20"
              d="M32,10c-7.732,0-14,6.268-14,14s6.268,14,14,14s14-6.268,14-14S39.732,10,32,10z M32,36
		c-6.627,0-12-5.373-12-12s5.373-12,12-12s12,5.373,12,12S38.627,36,32,36z"
            />
          </g>
        </svg>
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
import { useAppStore } from "../stores/appStore.js";

const appStore = useAppStore();
const route = useRoute();
const router = useRouter();

const goTo = (path) => {
  router.push(path);
};

const firstColItems = appStore.isMobile
  ? [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Functions",
        path: "/functions",
      },
      {
        title: "Menu",
        path: "/menu",
      },
    ]
  : [
      {
        title: "Home",
        path: "/",
      },
      {
        title: "Functions",
        path: "/functions",
      },
    ];
const secondColItems = appStore.isMobile
  ? [
      {
        title: "Bookings",
        path: "/bookings",
      },
      {
        title: "Contact Us",
        path: "/contact-us",
      },
    ]
  : [
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
    path: "/contact-us",
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
