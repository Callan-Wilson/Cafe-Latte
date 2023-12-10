<template>
  <!-- Burger icon or cross icon to toggle the menu -->
  <button
    :class="{
      'cross-icon pl-2': isMenuOpen,
      'burger-icon': !isMenuOpen,
    }"
  >
    <div :class="{ 'mb-1': !isMenuOpen }"></div>
    <div :class="{ 'mb-1': !isMenuOpen, hidden: isMenuOpen }"></div>
    <div></div>
  </button>
</template>

<script setup>
import { defineProps } from "vue";

const { isMenuOpen } = defineProps(["isMenuOpen"]);
</script>

<style scoped>
.burger-icon {
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  /* border: none;
  outline: none;
  display: flex;
  flex-direction: column; */
  height: auto;
}
.cross-icon {
  cursor: pointer;
  padding: 10px;
  background-color: transparent;
  /* border: none;
  outline: none;
  display: flex;
  flex-direction: column; */
  height: auto;
}

.burger-icon div {
  width: 25px;
  height: 3px;
  background-color: #333;
  border-radius: 3px;
}
/* Class for cross icon */
.cross-icon {
  background-color: transparent;
  height: 50px;
  width: 50px;
}

.cross-icon div {
  width: 100%;
  height: 3px;
  background-color: #333;
}

.cross-icon div:first-child {
  /* animation: burgerTop 0.5s ease-in-out forwards; */
  transform: rotate(45deg) translateY(100%);
}

.cross-icon div:last-child {
  /* animation: burgerBottom 0.5s ease-in-out forwards; */
  transform: rotate(-45deg) translateY(-100%);
}

/* @keyframes burgerTop {
  from {
    transform: rotate(0deg) translateY(0px);
  }
  to {
    transform: rotate(45deg) translateY(100%);
  }
}
@keyframes burgerBottom {
  from {
    transform: rotate(0deg) translateY(0px);
  }
  to {
    transform: rotate(-45deg) translateY(-100%);
  }
} */
</style>
