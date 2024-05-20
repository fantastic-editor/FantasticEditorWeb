<script lang="ts">
import {defineComponent} from 'vue'
import {getGlobalInfo} from "@/constants/GlobalInfo";

export default defineComponent({
  name: "HomeIndex",
  computed: {
    getGlobalInfo() {
      return getGlobalInfo
    }
  },
})
</script>

<template>

</template>

<style scoped>

</style>
