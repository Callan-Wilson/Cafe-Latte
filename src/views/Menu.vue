<template>
  <div class="m-auto pt-8 flex flex-col items-center">
    <h1 class="text-4xl pridi bold">Menu</h1>
    <p
      class="lg:px-0 text-center pridi my-6 max-w-[1000px] leading-loose text-md"
    >
      {{ menuText }}
    </p>
    <button
      class="py-4 bg-black rounded flex w-[80%] lg:w-full transition-transform mx-4 lg:max-w-[500px] lg:hover:scale-[1.1]"
      @click="downloadPdf()"
    >
      <p class="text-white text-center text-xl w-full">Download Pdf</p>
      <!-- <img
                    class="h-[30px] text-white font-normal"
                    src="../../assets/CaretRight.png"
                  /> -->
    </button>
    <div
      class="flex flex-col w-full justify-center lg:items-center relative pt-8 md:px-6 z-10"
    >
      <div class="md:my-6 overflow-scroll flex pl-4 z-10">
        <p
          v-for="(option, index) in menuFilters"
          :key="option"
          @click="setFilter(option)"
          :class="[
            index !== menuFilters.length - 1
              ? 'border-r-2 border-slate-500'
              : 'border-none',
          ]"
          class="hover-parent mb-4 mx-2 pr-4 w-min whitespace-nowrap text-lg md:text-xl pridi cursor-pointer relative inline-block"
        >
          {{ option }}
          <span
            :class="{ 'active-hover-line': filter === option.toLowerCase() }"
            class="hover-line"
          ></span>
        </p>
      </div>
      <!-- <span
        v-if="index !== menuFilters.length - 1"
        :class="{ 'active-hover-line': filter === option.toLowerCase() }"
        class="border ml-4 border-left border-slate-500 bg-slate-300"
      ></span> -->
      <!-- <div class="menu-options pr-6 mr-6 hidden lg:flex flex-col z-10">
        <p
          v-for="option in menuFilters"
          :key="option"
          @click="setFilter(option)"
          class="mb-4 w-min whitespace-nowrap text-lg pridi cursor-pointer relative inline-block"
        >
          {{ option }}
          <span
            :class="{ 'active-hover-line': filter === option.toLowerCase() }"
            class="hover-line"
          ></span>
        </p>
      </div> -->
      <div v-if="!loading" class="flex justify-center w-full px-4 lg:px-0">
        <div class="menu-items lg:max-w-[1600px] lg:px-4 pb-4">
          <menuCard
            v-for="(item, index) in filteredMenuItems"
            :key="index"
            :menuItem="item"
            :class="changing ? 'slide-y-out' : 'slide-y-in'"
          />
        </div>
      </div>
      <div
        v-else
        class="h-[200px] lg:h-[1000px] w-full pt-20"
        style="max-width: 1000px"
      >
        <Spinner />
      </div>
      <!-- <div class="w-1/4"></div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, computed } from "vue";
import { useContentfulStore } from "../stores/contentfulStore";
import menuCard from "@/components/menuCard.vue";
import Spinner from "@/components/Spinner.vue";
import { useHead } from "@unhead/vue";

const contentfulStore = useContentfulStore();

const menuFilters = ref([
  "All Day Menu",
  "Kids",
  "Hot Drinks",
  "Cold Drinks",
  "Smoothies",
]);
const loading = ref(false);
const menuItems = ref([]);
const menuText = ref("");

const filter = ref("all day menu");
const changing = ref(false);

const filteredMenuItems = computed(() => {
  if (filter.value === "all day menu") {
    return menuItems.value.filter(
      (item) =>
        !["Kids", "Hot Drinks", "Cold Drinks", "Smoothies"].includes(
          item.filter
        )
    );
  }

  console.log(filter.value, "filter");
  return menuItems.value.filter((item) => item.filter.includes(filter.value));
});

const downloadPdf = () => {
  window.open(contentfulStore.menu.pdf, "_blank");
};

const setFilter = (option) => {
  // First, animate out by setting filter to 'none'
  changing.value = true;

  // Wait for the CSS transition to complete (you can adjust the duration if needed)
  setTimeout(() => {
    // After animation out is complete, update the filter to the new option
    filter.value = option.toLowerCase();
    changing.value = false;
  }, 300);
};
useHead({
  title: "Cafe Latte Menu",
  description:
    "Nestled charmingly within Hawksburn, Melbourne, Cafe Latte warmly invites you to embark on a delightful journey of flavors. Our unassuming yet inviting space is where food enthusiasts gather to enjoy a menu crafted with care, incorporating a tasteful selection of exotic ingredients.",
  charset: "UTF-8",
  "og:title": "Cafe Latte Menu",
  "og:description":
    "Nestled charmingly within Hawksburn, Melbourne, Cafe Latte warmly invites you to embark on a delightful journey of flavors. Our unassuming yet inviting space is where food enthusiasts gather to enjoy a menu crafted with care, incorporating a tasteful selection of exotic ingredients.",
  "og:image":
    "https://images.ctfassets.net/h4008btd2eyr/6pC4q6oLLBWlgfsNR1tRXC/a668cf65a5be39c95be017aeeab618eb/banner.jpg",
  "og:url": "https://cafelattehawksburn.com/menu",
});

onBeforeMount(async () => {
  if (!contentfulStore.menu.items.length) {
    loading.value = true;
    await contentfulStore.getMenuContent();
    await contentfulStore.getPdf();
  }
  menuItems.value = contentfulStore.menu.items;
  menuText.value = contentfulStore.menu.text;
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.menu-options {
  // border-right: 2px solid rgb(59, 59, 59);
  min-width: fit-content;
  position: absolute;
  left: 20px;
  height: fit-content;
}

.menu-items {
  display: grid;
  grid-template-columns: 1fr;
  gap: 25px;
  overflow-y: scroll;
}
@media (min-width: 768px) {
  .menu-items {
    grid-template-columns: 1fr 1fr;
  }
}

@media (min-width: 1280px) {
  .menu-items {
    grid-template-columns: 1fr 1fr 1fr;
  }
}
@media (min-width: 1800px) {
  .menu-options {
    left: 50px;
    border-right: 0px;
  }
  .menu-items {
    grid-template-columns: 1fr 1fr 1fr 1fr;
  }
}

// .menu-container {
//   width: 100%;
//   max-width: 1600px;
// }

.hover-line {
  position: absolute;
  left: 0;
  bottom: 0px; /* Adjust this value to control the space between text and line */
  width: 0;
  height: 2px;
  background-color: rgb(59, 59, 59); /* Line color */
  transition: width 0.3s ease;
}

.hover-parent:hover span {
  width: calc(100% - 15px);
}

.active-hover-line {
  width: calc(100% - 15px);
}

//  .menu-card-animation-leave-active {
//   transition: all 0.3s ;
// }

.menu-card-animation-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-y-in {
  animation: slide-y-in 0.3s forwards;
}

@keyframes slide-y-in {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
.slide-y-out {
  animation: slide-y-out 0.3s forwards;
}

@keyframes slide-y-out {
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(-10px);
  }
}
</style>
