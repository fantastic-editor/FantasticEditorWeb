<script lang="ts">
import {defineComponent} from 'vue'
import {getGlobalInfo, getLocalInfo} from "@/constants/GlobalInfo";
import type {InfoWebDTO} from "@/models/dto/info/InfoWebDTO";
import type {LocalWebDTO} from "@/models/dto/info/LocalWebDTO";

export default defineComponent({
  name: "HomeIndex",
  computed: {
    getGlobalInfo(): InfoWebDTO {
      return getGlobalInfo.value
    },
    getLocalInfo(): LocalWebDTO {
      return getLocalInfo.value
    }
  },
  async mounted() {
    this.getLocalInfo.title = this.getGlobalInfo.title + " | " + this.getGlobalInfo.subTitle
  },
})
</script>

<template>
  <div class="grid gap-36">
    <!-- Banner -->
    <section
        class="relative bg-[url(https://images.unsplash.com/photo-1604014237800-1c9102c219da?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat"
    >
      <div class="absolute inset-0 bg-white/75 sm:bg-transparent sm:bg-gradient-to-r sm:from-white sm:to-white/25"/>
      <div class="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div class="max-w-xl text-center sm:text-left">
          <h1 class="text-3xl font-extrabold sm:text-5xl">
            {{ getGlobalInfo.title }}
            <strong class="block font-extrabold text-teal-600">{{ getGlobalInfo.subTitle }}</strong>
          </h1>

          <p class="mt-4 max-w-lg text-center sm:text-left text-sm sm:text-md">
            支持多种文档格式，内容实时同步，随时随地轻松创作，高效协作。
          </p>

          <div class="mt-8 flex flex-wrap gap-4 text-center">
            <button
                class="block border border-blue-400 w-full rounded px-12 py-3 text-sm font-medium text-blue-400 hover:border-blue-500 hover:text-blue-500 shadow focus:ring ring-blue-200 sm:w-auto transition hover:scale-105 active:scale-110"
            >
              购买咨询
            </button>

            <button
                class="block rounded bg-blue-400 px-12 py-3 text-sm font-medium text-white shadow hover:bg-blue-500 hover:text-blue-50 focus:ring sm:w-auto transition hover:scale-105 active:scale-110"
            >
              免费使用
            </button>
          </div>
        </div>
      </div>
    </section>
    <!-- 丰富的Office应用 -->
    <section class="grid justify-center leading-normal">
      <h1 class="text-2xl font-bold sm:text-3xl mb-8 text-center">丰富的Office应用</h1>
      <div class="max-w-6xl">
        <div class="rounded-xl border-2 border-gray-100 bg-white shadow-xl hover:scale-105 transition flex gap-6 p-6">
          <div>WORD</div>
          <div>Excel</div>
          <div>PPT</div>
          <div>Markdown</div>
        </div>
      </div>
    </section>
    <!-- 可协作编辑的云端效率工具 -->
    <section class="grid justify-center leading-normal">
      <h1 class="text-2xl font-bold sm:text-3xl mb-8 text-center">可协作编辑的云端效率工具</h1>
      <div class="flex gap-6 max-w-6xl mx-3">
        <div class="flex-1 transition hover:scale-110">
          <h2 class="text-xl font-bold">实时同步</h2>
          <p>支持多种文档格式，内容实时同步，随时随地轻松创作，高效协作。</p>
        </div>
        <div class="flex-1 transition hover:scale-110">
          <h2 class="text-xl font-bold">多人协作</h2>
          <p>支持多人同时编辑，实时同步，让团队协作更加高效。</p>
        </div>
        <div class="flex-1 transition hover:scale-110">
          <h2 class="text-xl font-bold">云端存储</h2>
          <p>云端存储，随时随地访问，不用担心文件丢失。</p>
        </div>
        <div class="flex-1 transition hover:scale-110">
          <h2 class="text-xl font-bold">安全可靠</h2>
          <p>数据加密存储，安全可靠，让您的数据更加安全。</p>
        </div>
      </div>
    </section>
    <!-- 开始使用 -->
    <div class="mx-auto max-w-screen-xl">
      <div class="text-center">
        <h2 class="text-3xl font-extrabold text-gray-900 sm:text-5xl">{{ getGlobalInfo.title }}</h2>

        <p class="mx-auto mt-4 mb-6 max-w-lg text-gray-500 leading-normal">{{ getGlobalInfo.webDescription }}</p>

        <div class="grid justify-center">
          <button
              class="rounded bg-blue-400 px-24 py-3 text-sm font-medium text-white shadow hover:bg-blue-500 hover:text-blue-50 focus:ring transition hover:scale-105 active:scale-110"
          >
            免费使用
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
