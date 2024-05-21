<script lang="ts">
import {defineComponent} from 'vue'
import HomeHeader from "@/components/Home/HomeHeader.vue";
import HomeFooter from "@/components/Home/HomeFooter.vue";

export default defineComponent({
  name: "BaseHome",
  components: {HomeFooter, HomeHeader}
})
</script>

<template>
  <div class="grid">
    <header class="bg-white shadow-md">
      <HomeHeader/>
    </header>
    <main class="mb-24">
      <RouterView/>
    </main>
    <footer class="bg-white">
      <HomeFooter/>
    </footer>
  </div>
</template>

<style scoped>

</style>
