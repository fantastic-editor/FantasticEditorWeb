<script lang="ts">
import {defineComponent} from 'vue'
import {getGlobalInfo, getLocalInfo} from "@/constants/GlobalInfo";

export default defineComponent({
  name: "HomeIndex",
  async mounted() {
    getLocalInfo.value.title = getGlobalInfo.value.title + " | " + getGlobalInfo.value.subTitle
  },
})
</script>

<template>

</template>

<style scoped>

</style>
