<template>
    <div class="flex justify-center w-full h-auto ">
        <div class="relative w-full h-[300px] lg:w-[1000px] md:h-[500px] lg:mb-10 lg:rounded  overflow-hidden">
          <div
            v-for="picture, index in gallery"
            :key="picture"
            :class="animatePicture(picture, index)"
            class=" flex justify-center items-center  absolute top-0"
          >
            <img class="object-cover scale-effect " :src="picture" />
          </div>
        </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, onBeforeUnmount , computed} from 'vue';
  
  const props = defineProps(['gallery']);
  
  let activeUrl = ref({});
  let changing = ref(false);

  let nextIndex = computed(() => (activeUrl.value.index + 1) % props.gallery.length)
  
  const animatePicture = (url, index) => {
    let current = activeUrl.value.url === url;
    if (current && !changing.value) return 'fade-in';
    if (current && changing.value) return 'fade-out';
    if (nextIndex.value == index && changing.value) return 'fade-in';
    return 'hidden';
  };                                                                                                                                                                        
  
  const changeActiveUrl = () => {
  
    changing.value = true; // current fades out
    setTimeout(() => {
        changing.value = false;
        activeUrl.value = { url: props.gallery[nextIndex.value], index: nextIndex.value };
    }, 1000);

  };
  
  let intervalId;
  
  onMounted(() => {
    activeUrl.value = { index: 0, url: props.gallery[0] };
  
    intervalId = setInterval(() => {
      changeActiveUrl();
    }, 8000);
  });
  
  onBeforeUnmount(() => {
    clearInterval(intervalId);
  });
  </script>
  
  <style lang="scss" scoped>
  .scale-effect {
    overflow: hidden;
    animation: scale 20s ease-out;
  }
  
  .fade-in {
    animation: fadeIn 1s ease-in-out forwards;
  }
  
  .fade-out {
    animation: fadeOut 1s ease-in-out forwards;
   
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
    }
  
    to {
      opacity: 1;
    }
  }
  
  @keyframes fadeOut {
    from {
      opacity: 1;
    }
  
    to {
      opacity: 0;
    }
  }
  
  @keyframes scale {
    from {
      transform: scale(1.5);
    }
  
    to {
      transform: scale(1);
    }
  }
  </style>
  