<template>
 <div class="signup-success-wrapper">
  <div class="signup-success-container">
   <provet-card class="signup-success-card">
    <h2>Registration Complete!</h2>
    <p v-if="subscribedToUpdates">
     Thank you for registering. You’ve also subscribed to product updates – great choice!
    </p>
    <p v-else>
     Thank you for registering. We recommend subscribing to updates later to stay informed.
    </p>
    <provet-button variant="primary" @click="goToHome">Back to Home</provet-button>
   </provet-card>
  </div>
 </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import "@provetcloud/web-components/lib/Card"
import "@provetcloud/web-components/lib/Button"

const route = useRoute()
const router = useRouter()

const subscribedToUpdates = route.query.updatesApproved === 'true'

function goToHome() {
 router.push('/')
}
</script>

<style scoped>
.signup-success-wrapper {
 display: flex;
 justify-content: center;
 align-items: center;
 background: #f8fafc;
 padding: 2rem;
}

.signup-success-container {
 max-width: 500px;
 width: 100%;
}

.signup-success-card {
 padding: 2rem;
 text-align: center;
}

h2 {
 margin-bottom: 1rem;
 font-size: 1.5rem;
}

p {
 font-size: 1.05rem;
 margin-bottom: 1.5rem;
 color: #4a5568;
}
</style>
