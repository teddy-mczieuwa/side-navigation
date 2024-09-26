<template>
  <div
    class="mx-auto bg-green-100 border md:border-0 border-green-800 mb-8 md:mb-2 rounded-4xl py-2 mt-16 md:mt-10 h-96 flex justify-center items-center w-5/6 md:w-3/5 shadow-lg"
  >
    <button
      class="bg-green-800 shadow-lg text-green-300 py-2 px-4 rounded-md"
      @click="() => openSideNav()"
    >
      Open
    </button>
    <side-navigation v-slot="{ close }" v-model="sideNav">
      <Transition name="fade">
        <div
          v-if="sideNav"
          class="blured absolute top-0 left-0 h-full w-screen z-50"
          @click.self="() => close()"
        >
          <div
            class="absolute top-0 left-0 h-screen w-screen md:w-1/5 bg-green-700 shadow-lg"
          >
            <span
              class="text-green-200 text-2xl p-4 absolute right-8 top-4 cursor-pointer hover:text-green-100"
              @click="() => close()"
              >&#x2715;
            </span>

            <ul class="w-5/6 h-56 ml-6 mt-32">
              <li class="text-green-200 hover:text-green-100 text-2xl mb-4">
                <router-link :to="{ name: 'accordion' }">Home</router-link>
              </li>
              <li class="text-green-200 hover:text-green-100 text-2xl mb-4">
                <router-link :to="{ name: 'tabs' }">Profile</router-link>
              </li>
              <li class="text-green-200 hover:text-green-100 text-2xl mb-4">
                <router-link :to="{ name: 'search-input' }">About</router-link>
              </li>
              <li class="text-green-200 hover:text-green-100 text-2xl mb-4">
                <router-link :to="{ name: 'menu-icon' }">Settings</router-link>
              </li>
            </ul>
          </div>
        </div>
      </Transition>
    </side-navigation>
  </div>
</template>
<script setup lang="ts">
import { ref } from "vue";

import SideNavigation from "@/components/SideNavigation";
const sideNav = ref(false);
const openSideNav = () => (sideNav.value = true);
</script>

<style scoped>
.blured {
  backdrop-filter: blur(15px);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
</style>
