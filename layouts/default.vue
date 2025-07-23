<template>
 <div class="main">

  <main>
   <slot/>
  </main>


 </div>
</template>

<script setup lang="ts">

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