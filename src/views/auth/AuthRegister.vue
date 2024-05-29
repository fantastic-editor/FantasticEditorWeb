<script lang="ts">
import {defineComponent} from 'vue'
import type {InfoWebDTO} from "@/models/dto/info/InfoWebDTO";
import {getGlobalInfo, getLocalInfo} from "@/constants/GlobalInfo";
import type {LocalWebDTO} from "@/models/dto/info/LocalWebDTO";

export default defineComponent({
  name: "AuthRegister",
  computed: {
    getGlobalInfo(): InfoWebDTO {
      return getGlobalInfo.value
    },
    getLocalInfo(): LocalWebDTO {
      return getLocalInfo.value
    },
  },
  created() {
    this.getLocalInfo.title = this.getGlobalInfo.title + " | 注册"
  },
})
</script>

<template>
  <section class="bg-white">
    <div class="lg:grid lg:min-h-screen lg:grid-cols-12">
      <section class="relative flex h-32 items-end bg-gray-900 lg:col-span-5 lg:h-full xl:col-span-6">
        <img
            alt=""
            src="https://images.unsplash.com/photo-1617195737496-bc30194e3a19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80"
            class="absolute inset-0 h-full w-full object-cover opacity-80"
        />

        <div class="hidden lg:relative lg:block lg:p-12">
          <div class="block text-white">
            <img :src="getGlobalInfo.webIcon" alt="" class="size-16" @click="$router.replace({name: 'HomeIndex', replace: true})">
          </div>

          <h2 class="mt-6 text-2xl font-bold text-white sm:text-3xl md:text-4xl">
            欢迎来到{{ getGlobalInfo.title }}
          </h2>

          <p class="mt-4 leading-relaxed text-white/90">{{ getGlobalInfo.webDescription }}</p>
        </div>
      </section>

      <main class="flex items-center justify-center px-16 py-8 sm:px-12 lg:col-span-7 lg:px-4 lg:py-12 xl:col-span-6">
        <div class="max-w-xl lg:max-w-3xl">
          <div class="relative -mt-16 block lg:hidden">
            <img :src="getGlobalInfo.webIcon" alt="" class="size-16" @click="$router.replace({name: 'HomeIndex', replace: true})">
            <h1 class="mt-2 text-2xl font-bold text-gray-900 sm:text-3xl md:text-4xl">
              欢迎来到{{ getGlobalInfo.title }}
            </h1>
            <p class="mt-4 leading-relaxed text-gray-500">{{ getGlobalInfo.webDescription }}</p>
          </div>

          <form action="#" class="mt-8 lg:mt-0 grid grid-cols-6 gap-6 lg:w-[500px]">
            <div class="col-span-6 sm:col-span-3">
              <label for="username" class="block text-sm font-medium text-gray-700">
                用户名
              </label>
              <input
                  type="text"
                  id="username"
                  name="username"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  required
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for=" email" class="block text-sm font-medium text-gray-700">
                邮箱
              </label>
              <input
                  type="email"
                  id="email"
                  name="email"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  required
              />
            </div>

            <div class="col-span-6">
              <label for="phone" class="block text-sm font-medium text-gray-700">
                手机号
              </label>
              <input
                  type="tel"
                  id="phone"
                  name="phone"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  required
              />
            </div>

            <div class="col-span-6">
              <label for="phone" class="block text-sm font-medium text-gray-700">
                验证码
              </label>
              <input
                  type="text"
                  id="verifyCode"
                  name="verify_code"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  required
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="Password" class="block text-sm font-medium text-gray-700">
                密码
              </label>
              <input
                  type="password"
                  id="password"
                  name="password"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  required
              />
            </div>

            <div class="col-span-6 sm:col-span-3">
              <label for="PasswordConfirmation" class="block text-sm font-medium text-gray-700">
                确认密码
              </label>
              <input
                  type="password"
                  id="passwordConfirmation"
                  name="password_confirmation"
                  class="mt-1 w-full rounded-md border-gray-200 bg-white text-sm text-gray-700 shadow-sm"
                  required
              />
            </div>

            <div class="col-span-6">
              <label for="MarketingAccept" class="flex gap-4">
                <input
                    type="checkbox"
                    id="MarketingAccept"
                    name="marketing_accept"
                    class="size-5 rounded-md border-gray-200 bg-white shadow-sm"
                    checked
                />

                <span class="text-sm text-gray-700">
                  我想接收有关活动、产品更新和公司公告的电子邮件。
                </span>
              </label>
            </div>

            <div class="col-span-6">
              <p class="text-sm text-gray-500">
                <span>创建帐户即表示您同意我们的 </span>
                <a href="#" class="text-gray-700 underline">条款和条件</a>
                <span> 以及 </span>
                <a href="#" class="text-gray-700 underline">隐私政策</a>.
              </p>
            </div>

            <div class="col-span-6 sm:flex sm:items-center sm:gap-4">
              <button
                  class="transition inline-block shrink-0 rounded-md bg-blue-400 hover:bg-blue-500 hover:scale-105 active:scale-110 px-12 py-3 text-sm font-medium text-white"
              >
                创建一个账户
              </button>

              <p class="mt-4 text-sm text-gray-500 sm:mt-0">
                已经有账号了?
                <button type="button" class="transition text-blue-400 hover:text-blue-500 active:text-blue-600" @click="$router.push({name: 'AuthLogin'})">登录</button>.
              </p>
            </div>
          </form>
        </div>
      </main>
    </div>
  </section>
</template>
