<script lang="ts">
import {getGlobalInfo, getLocalInfo} from "@/constants/GlobalInfo";
import {GlobalInfoApi} from "@/apis/InfoApi";
import ThrowModal from "@/components/ThrowModal.vue";
import type {LocalWebDTO} from "@/models/dto/info/LocalWebDTO";
import type {Ref} from "vue";

export default {
  name: "StartApp",
  components: {ThrowModal},
  computed: {
    info() {
      return getLocalInfo
    }
  },
  async created() {
    getGlobalInfo.value = (await GlobalInfoApi()).data!!
    document.title = this.info.value.title
  },
  watch: {
    info: {
      handler: function (newData: Ref<LocalWebDTO>) {
        document.title = newData.value.title
      },
      deep: true
    },
  }
}
</script>

<template>
  <RouterView/>
  <ThrowModal/>
</template>
