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

  <transition name="badge-slide" appear>
   <div class="test-badge-wrapper">
    <NuxtLink v-if="!isOnTestPage" to="/test-results">
     <provet-button variant="success" size="small" class="test-badge">
      🔬 Testing page
     </provet-button>
    </NuxtLink>
    <NuxtLink v-else to="/">
     <provet-button variant="primary" size="small" class="test-badge">
      ⬅ Home
     </provet-button>
    </NuxtLink>
   </div>
  </transition>
 </header>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'

const route = useRoute()
const isOnTestPage = computed(() => route.path === '/test-results')
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

.test-badge-wrapper {
 margin-top: 1rem;
}

.test-badge {
 animation: pulse 3s ease-in-out infinite;
}

.badge-slide-enter-active,
.badge-slide-leave-active {
 transition: transform 0.6s ease, opacity 0.6s ease;
}
.badge-slide-enter-from {
 transform: translateY(-20px);
 opacity: 0;
}
.badge-slide-enter-to {
 transform: translateY(0);
 opacity: 1;
}

@keyframes pulse {
 0% { transform: scale(1); opacity: 1; }
 50% { transform: scale(1.05); opacity: 0.9; }
 100% { transform: scale(1); opacity: 1; }
}

</style>