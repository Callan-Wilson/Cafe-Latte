<template>
  <div class="m-auto  pt-8 flex flex-col items-center">
    <h1 class="text-4xl  pridi bold">Menu</h1>
    <p class="text-center pridi my-6 max-w-[1000px] leading-loose text-md">
      Nestled charmingly within Hawksburn, Melbourne, Cafe Latte warmly invites
      you to embark on a delightful journey of flavors. Our unassuming yet
      inviting space is where food enthusiasts gather to enjoy a menu crafted
      with care, incorporating a tasteful selection of exotic ingredients. From
      dawn's first light to the sun's descent, savor the heartwarming embrace of
      dishes that marry simplicity with the extraordinary, making each visit to
      Cafe Latte a truly memorable and humbly elevated culinary escapade.
    </p>
    <div class="flex w-full justify-center  pt-8 px-6 ">
      <div class="menu-options flex flex-col  pr-10 1/3">
        <p
          v-for="option in menuFilters"
          :key="option"
          @click="setFilter(option)"
          class="mb-4 w-min whitespace-nowrap text-lg pridi cursor-pointer  relative inline-block"
        >
          {{ option }}
          <span :class="{ 'active-hover-line' : filter === option.toLowerCase()}" class="hover-line"></span>
        </p>
      </div>
      <div v-if="!loading"  class="flex justify-center w-2/3">
        <div class="menu-items px-4 pb-4 ">
        
          <menuCard
            v-for="(item, index) in filteredMenuItems"
            :key="index"
            :menuItem="item"
            :class="changing ? 'slide-y-out' : 'slide-y-in'"
          />
        </div>
      </div>
      <div v-else class="h-[1000px] w-full  pt-20" style="max-width: 1000px">
        <Spinner   />

      </div>
      <!-- <div class="w-1/4"></div> -->
    </div>
  </div>
</template>

<script setup>
import { ref, onBeforeMount, computed } from "vue";
import { useContentfulStore } from "../stores/contentfulStore";
import menuCard from "@/components/menuCard.vue";
import Spinner from "@/components/Spinner.vue"

const contentfulStore = useContentfulStore();

const menuFilters = ref([
  "All",
  "Breakfast",
  "Lunch",
  "Sweet",
  "Sides",
  "Kids",
  "Hot Drinks",
  "Cold Drinks",
  "Smoothies",
]);
const loading = ref(false);
const menuItems = ref([]);

const filter = ref('all');
const changing = ref(false);

const filteredMenuItems = computed(() => {
  if (filter.value === 'all') {
    return menuItems.value;
  }
  return menuItems.value.filter(item => item.filter.includes(filter.value));
});

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

onBeforeMount(async () => {
  if (!contentfulStore.menu.items.length) {
    loading.value = true;
    await contentfulStore.getMenuItems();

  }
  menuItems.value = contentfulStore.menu.items;
  loading.value = false;
});
</script>

<style lang="scss" scoped>
.menu-options {
  border-right: 2px solid rgb(59, 59, 59);
  min-width: fit-content;
 
  height: fit-content;
}

.menu-items {

  display: grid;
  grid-template-columns: 1fr 1fr 1fr;

  gap: 30px; /* Gap between grid items */
  height: 1000px;
  overflow-y: scroll;
  
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

.menu-options p:hover .hover-line {
  width: calc(100% + 10px);
}

.active-hover-line{
    width: calc(100% + 10px);
}

//  .menu-card-animation-leave-active {
//   transition: all 0.3s ;
// }

 .menu-card-animation-leave-to {
  opacity: 0;
  transform: translateY(-10px);
}

.slide-y-in{
    animation: slide-y-in 0.3s  forwards;
}

@keyframes slide-y-in{
    from{
        opacity: 0;
  transform: translateY(-10px);
    }
    to{
        opacity: 1;
  transform: translateY(0px);
    }
}
.slide-y-out{
    animation: slide-y-out 0.3s  forwards;
}

@keyframes slide-y-out{
    from{
        opacity: 1;
  transform: translateY(0px);
    }
    to{
        opacity: 0;
  transform: translateY(-10px);
    }
}

</style>
