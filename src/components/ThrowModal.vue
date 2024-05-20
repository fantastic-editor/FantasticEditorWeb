<script lang="ts">
import {defineComponent} from 'vue'
import {globalThrowModal} from "@/constants/ThrowConstant";

export default defineComponent({
  name: "ThrowModal",
  computed: {
    globalThrowModal() {
      return globalThrowModal
    }
  },
  data() {
    return {
      modal: false
    }
  },
})
</script>

<template>
  <div>
    <a-modal v-model:open="globalThrowModal.value" title="错误抛出">
      <p>Some contents...</p>
      <p>Some contents...</p>
      <p>Some contents...</p>
    </a-modal>
  </div>
</template>


