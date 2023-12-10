<template>
  <div class="pt-10 flex flex-col items-center pridi">
    <h1 class="text-4xl mb-8">Get in touch!</h1>
    <p class="hidden lg:block text-md text-center mb-8 max-w-[900px]">
      Welcome to Cafe Latte, an exquisite destination nestled in the heart of
      Melbourne, where elegance meets unparalleled flavor. Our dedicated team
      awaits the pleasure of assisting you in every possible way. Whether you
      seek a delightful culinary experience or have inquiries about our
      offerings, our contact page is your gateway to reaching us – a seamless
      blend of professionalism and warmth, just like our signature beverages.
    </p>
    <div v-if="!appStore.isMobile" class="contact-form px-12">
      <div class="input-row my-20">
        <div class="input-group">
          <input type="text" class="input" placeholder="First Name" />
        </div>
        <div class="input-group">
          <input type="text" class="input" placeholder="Last Name" />
        </div>
      </div>
      <div class="input-row my-20">
        <div class="input-group">
          <input type="email" class="input" placeholder="Email" />
        </div>
        <div class="input-group">
          <input type="tel" class="input" placeholder="Phone Number" />
        </div>
      </div>
      <div class="input-row mt-20 mb-10">
        <div class="input-group !w-[90%]">
          <textarea class="textarea" placeholder="Message"></textarea>
        </div>
      </div>
    </div>
    <div v-else class="px-6 w-full">
      <div class="input-row mb-6">
        <input type="text" class="input" placeholder="First Name" />
      </div>
      <div class="input-row mb-6">
        <input type="text" class="input" placeholder="Last Name" />
      </div>

      <div class="input-row mb-6">
        <input type="email" class="input" placeholder="Email" />
      </div>
      <div class="input-row mb-6">
        <input type="tel" class="input" placeholder="Phone Number" />
      </div>

      <div class="input-row mb-6 mt-8">
        <textarea class="textarea" placeholder="Message"></textarea>
      </div>
    </div>
    <button @click="sendEmail" class="py-4 px-14 mb-10 rounded bg-black">
      <p class="text-white text-xl">Send</p>
    </button>
  </div>
</template>

<script setup>
import { useAppStore } from "../stores/appStore.js";

const appStore = useAppStore();

//import emailjs from "emailjs-com";

// Replace with your Email.js user ID
// const emailjsUserId = "user_your_emailjs_user_id";
// const serviceID = 'default_service'; // Replace with your service ID
// const templateID = 'template_default'; // Replace with your template ID

// // const sendEmail = async () => {
// const templateParams = {
//   to_email: 'recipient@example.com',
//   subject: 'Hello',
//   message: 'This is the body of the email.'
// };
// const userID = 'user_your_emailjs_user_id'; // Replace with your user ID

// try {
//   const response = await emailjs.send(serviceID, templateID, templateParams, userID);
//   console.log('Email sent successfully:', response);
// } catch (error) {
//   console.error('Error sending email:', error);
// }
// };
</script>

<style scoped>
.contact-form {
  max-width: 800px;
  width: 50vw;
  margin: auto;

  /* border: 1px solid #ccc; */
}

.input-row {
  display: flex;
  width: 100%;
  justify-content: space-around;
}

.input-group {
  width: 40%;
  position: relative;
}

.input {
  background-color: #fbf7f5;
  border: none;
  border-bottom: 1px solid #333333;
  width: 100%;
  padding: 10px 0;
  font-size: 16px;
  outline: none;
}

input::placeholder,
textarea::placeholder {
  color: #333333; /* Adjust the color to make it slightly darker */
}

.textarea {
  border: 1px solid #333333;
  width: 100%;
  padding: 10px;
  font-size: 16px;
  height: 200px;
  resize: none;
  outline: none;
}
</style>
