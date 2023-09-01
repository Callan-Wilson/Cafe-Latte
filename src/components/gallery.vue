<template>
    <div class="gallery-container">
      <transition name="slide-fade" mode="out-in">
        <div :key="currentImageIndex" class="gallery">
          <img
            v-for="(image, index) in images"
            :key="index"
            :src="image"
            class="gallery-image"
            :style="imageStyles(index)"
            alt="Gallery Image"
          />
        </div>
      </transition>
    </div>
  </template>
  
  <script setup>
  import { ref, watch, onMounted } from 'vue';
  
  const images = [
    'image1.jpg',
    'image2.jpg',
    'image3.jpg',
    'image4.jpg',
    // ... add more images
  ];
  
  const currentImageIndex = ref(0);
  
  const imageStyles = (index) => {
    const translateX = -index * 100;
    return {
      transform: `translateX(${translateX}%)`
    };
  };
  
  const changeImage = () => {
    const newIndex = (currentImageIndex.value + 1) % images.length;
    currentImageIndex.value = newIndex;
  };
  
  const autoChangeImage = () => {
    setInterval(changeImage, 5000); // Change image every 5 seconds
  };
  
  onMounted(() => {
    autoChangeImage();
  });
  </script>
  
  <style>
  .gallery-container {
    width: 100%;
    overflow: hidden;
    position: relative;
    height: 300px;
    padding: 20px;
    box-sizing: border-box;
  }
  
  .gallery {
    display: flex;
    transition: transform 1s;
  }
  
  .gallery-image {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  
  .slide-fade-enter-active, .slide-fade-leave-active {
    transition: transform 1s, opacity 1s;
  }
  
  </style>
  