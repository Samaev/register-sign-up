<template>
 <header class="header">
  <NuxtLink to="/">
   <div class="logo-wrapper">
    <div class="header-logo">
     <NuxtImg height="30px" width="30px" src="/favicon.png" />
    </div>
    <h1>Nordhealth</h1>
   </div>
   <p class="header-subtitle">
    Create your account to get started with our latest features and product updates.
   </p>
  </NuxtLink>


 </header>
</template>

<script setup lang="ts">

</script>


<style scoped>
.header {
 width: 100%;
 background: linear-gradient(135deg, #0070f3, #00bfa5);
 color: white;
 padding: 2rem 1rem;
 text-align: center;
 border-radius: 0 0 12px 12px;
 box-shadow: 0 4px 6px rgba(0,0,0,0.1);
 position: relative;
}
.header-logo {
 width: 20px;
 height: 20px;
}
.logo-wrapper {
 display: flex;
 flex-direction: column;
 justify-content: center;
 align-items: center;
 gap: 1rem;
 @media (min-width: 768) {
  flex-direction: row;
 }
}
.header h1 {
 font-size: 1.75rem;
 margin-bottom: 0.5rem;
}

.header-subtitle {
 font-size: 1rem;
 opacity: 0.9;
 max-width: 600px;
 margin: 0 auto;
}



</style>