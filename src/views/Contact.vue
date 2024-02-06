<template>
  <div class="pt-10 flex flex-col items-center pridi">
    <h1 class="text-4xl mb-8">Get in touch!</h1>

    <Spinner v-if="!contactBlurb?.length" class="hidden lg:flex mb-8" />
    <div v-else class="flex flex-col items-center">
      <div
        class="w-full h-[400px] lg:w-[1000px] md:h-[600px] lg:mb-10 lg:rounded overflow-hidden"
      >
        <img class="object-cover w-full h-full" :src="banner" />
      </div>
      <p class="hidden lg:block text-md text-center mb-8 max-w-[900px]">
        {{ contactBlurb }}
      </p>
    </div>
    <div v-if="!submitted && !loading" class="flex flex-col items-center">
      <div
        :class="[
          showError
            ? 'error-enter'
            : !showError && errorMessage
            ? 'error-exit'
            : 'opacity-0',
        ]"
        class="bg-red-500 z-10 rounded px-4 py-2 flex items-center 'opacity-0'"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="white"
          class="w-6 h-6 white-text"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
        <p class="text-lg pridi text-white ml-2">{{ errorMessage }}</p>
      </div>
      <div v-if="!appStore.isMobile" class="contact-form px-12">
        <div class="input-row mt-10">
          <div class="input-group">
            <input
              v-model="form.firstName"
              type="text"
              class="input"
              placeholder="First Name"
            />
          </div>
          <div class="input-group">
            <input
              v-model="form.lastName"
              type="text"
              class="input"
              placeholder="Last Name"
            />
          </div>
        </div>
        <div class="input-row my-20">
          <div class="input-group">
            <input
              v-model="form.email"
              type="email"
              class="input"
              placeholder="Email"
            />
          </div>
          <div class="input-group">
            <input
              v-model="form.mobile"
              type="tel"
              class="input"
              placeholder="Phone Number"
            />
          </div>
        </div>
        <div class="input-row mt-20 mb-10">
          <div class="input-group !w-[90%]">
            <textarea
              v-model="form.message"
              class="textarea"
              placeholder="Message"
            ></textarea>
          </div>
        </div>
      </div>
      <div v-else class="px-6 w-screen">
        <div class="input-row mb-6">
          <input
            v-model="form.firstName"
            type="text"
            class="input"
            placeholder="First Name"
          />
        </div>
        <div class="input-row mb-6">
          <input
            v-model="form.lastName"
            type="text"
            class="input"
            placeholder="Last Name"
          />
        </div>
        <div class="input-row mb-6">
          <input
            v-model="form.email"
            type="email"
            class="input"
            placeholder="Email"
          />
        </div>
        <div class="input-row mb-6">
          <input
            v-model="form.mobile"
            type="tel"
            class="input"
            placeholder="Phone Number"
          />
        </div>
        <div class="input-row mb-6 mt-8">
          <textarea
            v-model="form.message"
            class="textarea"
            placeholder="Message"
          ></textarea>
        </div>
      </div>
      <button @click="sendEmail" class="py-4 px-14 mb-10 rounded bg-black">
        <p class="text-white text-xl">Send</p>
      </button>
    </div>
    <Spinner v-if="loading" class="h-[50vh]" />
    <div
      v-if="submitted"
      class="text-green-700 error-enter bg-green-100 rounded-lg flex flex-col items-center text-center mx-4 px-2 lg:px-8 py-10 pridi my-10"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-20 h-20"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M9 12.75L11.25 15 15 9.75M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>

      <!-- <p class="text-4xl">Success!</p> -->
      <p class="text-2xl mt-4">Thanks for sending a message</p>
      <p class="text-xl mt-4">
        We will get back to you shortly via email or text
      </p>
    </div>
  </div>
</template>
<script setup>
import { useAppStore } from "../stores/appStore.js";
import { useContentfulStore } from "../stores/contentfulStore.js";
import { onMounted, ref } from "vue";
import Spinner from "@/components/Spinner.vue";
import emailjs from "emailjs-com";
import { useHead } from "@unhead/vue";

const appStore = useAppStore();
const apiStore = useContentfulStore();

const contactBlurb = ref("");

const form = ref({
  firstName: "",
  lastName: "",
  email: "",
  mobile: "",
  message: "",
});

const banner = ref("");

// Replace with your Email.js user ID
const serviceID = "service_8e1u4xg"; // Replace with your service ID
const templateID = "template_rgt0b6v"; // Replace with your template ID
const userId = "gokcdYaHRlxoz_LkJ";

const loading = ref(false);
const submitted = ref(false);
const errorMessage = ref(false);
const showError = ref(false);

const handleError = (message) => {
  errorMessage.value = message;

  showError.value = true;
  window.scrollTo({ top: 0, behavior: "smooth" });
  return false;
};
const validate = () => {
  setTimeout(() => {
    showError.value = false;
  }, 1500);

  const { firstName, lastName, email, mobile, message } = form.value;
  if (!firstName?.length && !lastName.length)
    return handleError("Please provide a name");
  if (!email?.length && !mobile.length)
    return handleError("Please provide a mobile or email");
  if (!message.length) return handleError("Please provide a message");

  return true;
};

const sendEmail = async () => {
  if (!validate()) return;
  const templateParams = {
    ...form.value,
    to_email: "cafelattehawksburn@gmail.com",
    subject: `${form.firstName} ${form.lastName} has sent a message`,
  };

  try {
    await window.scrollTo({ top: 0, behavior: "smooth" });
    loading.value = true;
    const response = await emailjs.send(
      serviceID,
      templateID,
      templateParams,
      userId
    );
    if (response) {
      loading.value = false;
      submitted.value = true;
    }
  } catch (error) {
    loading.value = false;
    setTimeout(() => {
      showError.value = false;
    }, 1500);
    errorMessage.value = "Sorry something went wrong";
    showError.value = true;
  }
};

onMounted(async () => {
  console.log(apiStore.contact.text, "text");
  if (!apiStore?.contact?.text?.length) {
    await apiStore.getContactContent();
  }
  contactBlurb.value = apiStore?.contact?.text;
  banner.value = apiStore?.contact?.banner;
});

useHead({
  title: "Cafe Latte Contact",
  description:
    "Connect with Cafe Latte, nestled in the heart of Hawksburn, Melbourne. Reach out to us for inquiries about our exceptional coffee, delightful breakfast and lunch options, and our versatile event space perfect for hosting functions. We look forward to welcoming you to our inviting haven of flavors and hospitality.",
  charset: "UTF-8",
  "og:title": "Cafe Latte Menu",
  "og:description":
    "Connect with Cafe Latte, nestled in the heart of Hawksburn, Melbourne. Reach out to us for inquiries about our exceptional coffee, delightful breakfast and lunch options, and our versatile event space perfect for hosting functions. We look forward to welcoming you to our inviting haven of flavors and hospitality.",
  "og:image":
    "https://images.ctfassets.net/h4008btd2eyr/6pC4q6oLLBWlgfsNR1tRXC/a668cf65a5be39c95be017aeeab618eb/banner.jpg",
  "og:url": "https://cafelattehawksburn.com/menu",
});
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

.error-exit {
  animation: slideFadeDown 0.3s ease-in-out forwards;
}
.error-enter {
  animation: slideFadeUp 0.3s ease-in-out forwards;
}

@keyframes slideFadeDown {
  from {
    opacity: 1;
    transform: translateY(0px);
  }
  to {
    opacity: 0;
    transform: translateY(10px);
  }
}
@keyframes slideFadeUp {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0px);
  }
}
</style>
