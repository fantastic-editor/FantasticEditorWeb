<script lang="ts">
import {defineComponent} from 'vue'
import {getGlobalInfo, getLocalInfo} from "@/constants/GlobalInfo";
import type {InfoWebDTO} from "@/models/dto/info/InfoWebDTO";
import type {LocalWebDTO} from "@/models/dto/info/LocalWebDTO";
import {DebugApi} from "@/apis/InfoApi";

export default defineComponent({
  name: "AuthLogin",
  computed: {
    getGlobalInfo(): InfoWebDTO {
      return getGlobalInfo.value
    },
    getLocalInfo(): LocalWebDTO {
      return getLocalInfo.value
    },
  },
  created() {
      this.getLocalInfo.title = this.getGlobalInfo.title + " | 登录"
    DebugApi();
  },
})
</script>

<template>
  <section class="relative flex flex-wrap lg:h-screen lg:items-center">
    <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
      <div class="mx-auto max-w-lg text-center">
        <h1 class="text-2xl font-bold sm:text-3xl">欢迎回来~</h1>

        <p class="mt-4 text-gray-500">{{ getGlobalInfo.title }} - {{ getGlobalInfo.subTitle }}</p>
      </div>

      <form action="#" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
        <div>
          <label for="email" class="sr-only">用户名</label>
          <div class="relative">
            <input
                type="text"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="输入邮箱或用户名"
            />
            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
            </span>
          </div>
        </div>

        <div>
          <label for="password" class="sr-only">密码</label>

          <div class="relative">
            <input
                type="password"
                class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                placeholder="输入密码"
            />
            <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                />
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                />
              </svg>
            </span>
          </div>
        </div>

        <div class="flex items-center justify-between">
          <p class="text-sm text-gray-500">
             没有账号?
            <button class="text-blue-400 hover:text-blue-500 active:text-blue-600" type="button" @click="$router.push({name: 'AuthRegister'})">注册</button>
          </p>

          <button
              type="submit"
              class="transition inline-block rounded-lg bg-blue-400 hover:bg-blue-500 hover:scale-105 active:scale-110 px-8 py-3 text-sm font-medium text-white"
          >
            登录
          </button>
        </div>
      </form>
    </div>

    <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
      <img
          alt=""
          src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
          class="absolute inset-0 h-full w-full object-cover"
      />
    </div>
  </section>
</template>
