<script lang="ts">
import {defineComponent} from 'vue'
import {getGlobalInfo} from "@/constants/GlobalInfo";
import type {InfoWebDTO} from "@/models/dto/info/InfoWebDTO";
import {GithubOutlined} from "@ant-design/icons-vue";

export default defineComponent({
  name: "HomeFooter",
  components: {GithubOutlined},
  computed: {
    getGlobalInfo(): InfoWebDTO {
      return getGlobalInfo.value
    }
  },
})
</script>

<template>
  <div class="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
    <div class="grid grid-cols-1 gap-8 lg:grid-cols-3">
      <div>
        <div class="transition text-blue-400 hover:text-blue-500 flex items-end">
          <img alt="WebLogo" class="w-8 h-auto me-3" src="http://localhost:8080/favicon.ico">
          <span class="text-2xl">{{ getGlobalInfo.title }}</span>
        </div>

        <p class="mt-4 max-w-xs leading-normal">{{ getGlobalInfo.webDescription }}</p>

        <ul class="mt-8 flex gap-6">
          <li>
            <a
                class="transition hover:opacity-75 hover:scale-125 flex items-center"
                :href="getGlobalInfo.webIcon"
                rel="noreferrer"
                target="_blank"
            >
              <GithubOutlined class="text-xl"/>
            </a>
          </li>
        </ul>
      </div>

      <div class="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
        <div>
          <p class="font-medium text-lg">产品</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li><a class="text-gray-700 transition hover:opacity-75" href="#">产品介绍</a></li>
            <li><a class="text-gray-700 transition hover:opacity-75" href="#">开放中心</a></li>
            <li><a class="text-gray-700 transition hover:opacity-75" href="#">会员服务</a></li>
          </ul>
        </div>

        <div>
          <p class="font-medium text-lg">支持</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a class="text-gray-700 transition hover:opacity-75" href="#">功能更新说明</a>
            </li>

            <li>
              <a class="text-gray-700 transition hover:opacity-75" href="#">常见问题</a>
            </li>

            <li>
              <a class="text-gray-700 transition hover:opacity-75" href="#">用户反馈</a>
            </li>
          </ul>
        </div>

        <div>
          <p class="font-medium text-lg">友情链接</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li>
              <a class="text-gray-700 transition hover:opacity-75" href="#"> Contact </a>
            </li>

            <li>
              <a class="text-gray-700 transition hover:opacity-75" href="#"> FAQs </a>
            </li>

            <li>
              <a class="text-gray-700 transition hover:opacity-75" href="#"> Live Chat </a>
            </li>
          </ul>
        </div>

        <div>
          <p class="font-medium text-lg">联系我们</p>

          <ul class="mt-6 space-y-4 text-sm">
            <li><a class="transition hover:opacity-50" href="#">商务合作</a></li>
            <li><a class="transition hover:opacity-50" href="#">加入{{ getGlobalInfo.title }}</a></li>
            <li><a class="transition hover:opacity-50" href="#">交流QQ群：00000000</a></li>
          </ul>
        </div>
      </div>
    </div>
    <p class="text-xs text-gray-400/75">Copyright &copy; 2023-2024 Frontleaves. All Rights Reserved. 版权所有</p>
  </div>
</template>
