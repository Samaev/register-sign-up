<template>
 <div class="main">
  <Header/>
  <main>
   <slot/>
  </main>

  <Footer/>
 </div>
</template>

<script setup lang="ts">
import Header from "../components/shared/Header.vue";
import Footer from "../components/shared/Footer.vue";
</script>
<style scoped>
.main {
 display: flex;
 flex-direction: column;
 align-items: center;
 justify-content: space-between;
 min-height: 100vh;
 width: 100%;
}
</style>