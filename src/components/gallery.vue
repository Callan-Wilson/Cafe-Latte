<template>
  <div class="gallery-container" >
    <transition name="slide-fade">
      <div class="gallery " :style="{ transform: `translateX(${translateX}px)` }">
        <img
          v-for="(image, index) in loopedImages"
          :key="index"
          :src="image"
          class="gallery-image rounded cursor-pointer"
          alt="Gallery Image"
          @click="redirectToInsta()"
        />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';


const images = [
    'https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/349092970_1689153411544697_911573343040680173_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=5f2048&_nc_ohc=tvDb9NLuAPsAX99WOJO&_nc_ht=scontent-syd2-1.xx&oh=00_AfBLqr6gi31EZQiB1q1bLo9kgg8OlzwhuKEBSB6wBYOnWg&oe=654A2FD1',
    'https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/352667545_564845409178540_5367574323331393755_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=5f2048&_nc_ohc=HduTbCx9Un4AX81BTDK&_nc_ht=scontent-syd2-1.xx&oh=00_AfBw_2y9F5ICMIbWOID-rFNTv65xSnxnlki8Yd81fq9Wuw&oe=654C0CB1',
    'https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/304122131_579814833878078_558436648157210781_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Cj2mDPcWuboAX-chYrn&_nc_ht=scontent-syd2-1.xx&oh=00_AfAXATKyx1KycdbhJ-rrYeRybcC7O1sVkrXMaj6DTy7D1A&oe=654A8E10',
    'https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/302521778_579028153956746_2723220637420433236_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=sIsb1fp8nokAX9CY77t&_nc_ht=scontent-syd2-1.xx&oh=00_AfBgzjFTpe0Nlv7T3lajRuI9v33j8pSkadaqR5TLiuvW3Q&oe=654B51B3',
    'https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/289355870_5601761733223822_8400781862628033056_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=jcH6EsZQS_cAX8nBz4F&_nc_ht=scontent-syd2-1.xx&oh=00_AfB0K9wS6qrsdkvAIv3g7mbPjFlhWpm2ZGGDOaaAdqFW3Q&oe=654B49DD',
    'https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/273160549_5188898291176837_3421893514453480875_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=5f2048&_nc_ohc=y2kXjZcC-MAAX_TYSlO&_nc_ht=scontent-syd2-1.xx&oh=00_AfCm1ljaBlDQLzaPPbTwlHgeHcNeZXFIlezzDFcSVu5vBA&oe=654B65B7',
    'https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/272887802_5172757742790892_5529988146251204876_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=5f2048&_nc_ohc=vzN8Zrpn_skAX8Yn0BT&_nc_ht=scontent-syd2-1.xx&oh=00_AfACgO7lauEVO0j1zAsjTeJOrjA3mCqh0IrCVKndoI6S5w&oe=654B5065',
    'https://scontent-syd2-1.xx.fbcdn.net/v/t39.30808-6/272738636_5160059100727423_4343083016425740558_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=5f2048&_nc_ohc=kVS8W4D5fRwAX-xxd5j&_nc_ht=scontent-syd2-1.xx&oh=00_AfBxom6Nge7YaJe-ZKbbMIx8AUHCkyxyYbi37YK7Qeb0Lw&oe=654BA557'
  ];


const imageWidth = 300; // Adjust the width of each image
const gap = 20; // Adjust the gap between images
const slideInterval = 3000; // Adjust slide interval in milliseconds

// Duplicate images for infinite loop effect
const loopedImages = images.concat(images);

const translateX = ref(0);

const changeImage = () => {
  if (translateX.value > -((images.length) * (imageWidth + gap))) {
    translateX.value -= (imageWidth + gap);
  } else {
    translateX.value = 0;
  }
};

const redirectToInsta = ()  => {
  window.open("https://www.instagram.com/cafelattehawksburn/", '_blank');
 
}

const autoChangeImage = () => {
  setInterval(changeImage, slideInterval); // Change image every 3 seconds
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
  padding: 20px; /* Adjust to the desired gap */
  box-sizing: border-box;
}

.gallery {
  display: flex;
  transition: transform 1s;
}

.gallery-image {
  width: 300px; /* Adjust to the desired width */
  height: 200px; /* Adjust to the desired height */
  object-fit: cover;
  margin-right: 20px; /* Adjust to the desired gap */
}
</style>
