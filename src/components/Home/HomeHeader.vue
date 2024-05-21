<script lang="ts">
import {defineComponent} from 'vue'
import {getGlobalInfo} from "@/constants/GlobalInfo";
import type {InfoWebDTO} from "@/models/dto/info/InfoWebDTO";

export default defineComponent({
  name: "HomeHeader",
  computed: {
    getGlobalInfo(): InfoWebDTO {
      return getGlobalInfo.value
    }
  },
})
</script>

<template>
  <div class="mx-auto flex h-16 max-w-screen-xl items-center gap-8 px-4 sm:px-6 lg:px-8">
    <a class="block text-teal-600" href="#">
      <img :src="getGlobalInfo.webIcon" alt="WebLogo" class="w-8 h-auto">
    </a>

    <div class="flex flex-1 items-center justify-end md:justify-between">
      <nav aria-label="Global" class="flex items-center gap-6 text-sm">
        <a class="transition hover:opacity-50" href="#"> About </a>
        <a class="transition hover:opacity-50" href="#"> Careers </a>
        <a class="transition hover:opacity-50" href="#"> History </a>
        <a class="transition hover:opacity-50" href="#"> Services </a>
        <a class="transition hover:opacity-50" href="#"> Projects </a>
        <a class="transition hover:opacity-50" href="#"> Blog </a>
      </nav>

      <div class="flex items-center gap-4">
        <div class="sm:flex sm:gap-4">
          <button class="block border border-blue-400 transition rounded px-10 py-2 text-sm font-medium text-blue-400 active:scale-110 active:ring ring-blue-200 hover:text-blue-500 hover:border-blue-500 hover:scale-105">
            登录
          </button>
        </div>

        <button
            class="block rounded bg-gray-100 p-2.5 text-gray-600 transition hover:text-gray-600/75 md:hidden"
        >
          <span class="sr-only">菜单</span>
          <svg
              class="h-5 w-5"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M4 6h16M4 12h16M4 18h16" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</template>
