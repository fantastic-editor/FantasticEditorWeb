<script lang="ts">
import {getGlobalInfo} from "@/constants/GlobalInfo";
import {GlobalInfoApi} from "@/apis/InfoApi";
import ThrowModal from "@/components/ThrowModal.vue";

export default {
  name: "StartApp",
  components: {ThrowModal},
  async created() {
    getGlobalInfo.value = (await GlobalInfoApi()).data
    document.title = getGlobalInfo.value!!.title
  },
}
</script>

<template>
  <RouterView/>
  <ThrowModal/>
</template>
