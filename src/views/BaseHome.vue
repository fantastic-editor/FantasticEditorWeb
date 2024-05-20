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
    <header>
      <HomeHeader/>
    </header>
    <main>
      <RouterView/>
    </main>
    <footer>
      <HomeFooter/>
    </footer>
  </div>
</template>

<style scoped>

</style>
