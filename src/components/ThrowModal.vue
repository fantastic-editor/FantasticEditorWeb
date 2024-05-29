<script lang="ts">
import {defineComponent} from 'vue'
import {globalThrowModal, globalThrowTrace} from "@/constants/ThrowConstant";
import type {ExceptionDTO, StackTrace} from "@/models/dto/ExceptionDTO";

export default defineComponent({
  name: "ThrowModal",
  computed: {
    globalThrowModal(): boolean {
      return globalThrowModal.value
    },
    globalThrowTrace(): ExceptionDTO {
      return globalThrowTrace.value
    },
  },
  methods: {
    closeThrowModal() {
      globalThrowModal.value = false
    },
    changeColor(trace: StackTrace): string {
      console.log("执行")
      if (trace.className.includes("com.frontleaves")) {
        return "text-red-400"
      }
      if (trace.className.includes("org.springframework.aop")) {
        return "text-teal-500"
      }
      if (trace.className.includes("org.springframework.web")) {
        return "text-blue-400"
      }
      if (trace.className.includes("org.springframework.security") || trace.className.includes("org.apache")) {
        return "text-gray-400"
      }
      if (trace.className.includes("jakarta")) {
        return "text-fuchsia-400"
      }
      if (trace.className.includes(""))
        return "text-indigo-400"
      return "";
    }
  }
})
</script>

<template>
  <div>
    <a-modal v-model:open="globalThrowModal" title="错误堆栈" width="1000px" @cancel="closeThrowModal()">
      <div class="overflow-x-auto rounded-lg border border-gray-200">
        <table class="w-max divide-y-2 divide-gray-200 bg-white text-sm">
          <thead class="text-left">
          <tr>
            <th class="whitespace-nowrap px-1 py-2 font-medium text-gray-900">文件名字</th>
            <th class="whitespace-nowrap px-1 py-2 font-medium text-gray-900">方法名字</th>
            <th class="whitespace-nowrap px-1 py-2 font-medium text-gray-900">代码行</th>
            <th class="whitespace-nowrap px-1 py-2 font-medium text-gray-900">堆栈信息</th>
          </tr>
          </thead>

          <tbody class="divide-y divide-gray-200">
            <tr v-for="(trace, index) in globalThrowTrace.stackTrace" :key="index">
              <td id="traceN" v-if="trace.classLoaderName == 'app'" :class="changeColor(trace)" class="text-sm p-1">{{ trace.fileName }}</td>
              <td id="traceN" v-if="trace.classLoaderName == 'app'" :class="changeColor(trace)" class="text-sm p-1">{{ trace.methodName }}</td>
              <td id="traceN" v-if="trace.classLoaderName == 'app'" :class="changeColor(trace)" class="text-sm p-1">{{ trace.lineNumber }}</td>
              <td id="traceN" v-if="trace.classLoaderName == 'app'" :class="changeColor(trace)" class="text-sm p-1">{{ trace.className }}</td>
            </tr>
          </tbody>
        </table>
      </div>

      <template #footer>
        <button
            class="border border-blue-400 rounded-md text-blue-400 px-8 py-1 hover:border-blue-500 hover:text-blue-500 shadow focus:ring ring-blue-200 transition hover:scale-105 active:scale-110"
            @click="closeThrowModal()">
          关闭
        </button>
      </template>
    </a-modal>
  </div>
</template>


