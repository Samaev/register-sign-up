<template>
 <div class="test-page">
  <h1>🧪 Unit Test Report</h1>
  <p>This runs and shows validator test results.</p>

  <provet-button variant="primary" @click="runTests" :disabled="loading">
   {{ loading ? 'Running Tests...' : 'Run Unit Tests' }}
  </provet-button>

  <div v-if="result" class="result">
   <h3>📊 Summary:</h3>
   <ul>
    <li><strong>Duration:</strong> {{ Number(String(result.summary.duration).replace('ms', '')).toFixed(1) }}ms</li>
   </ul>

   <h3>📁 Per File:</h3>
   <ul>
    <li v-for="file in result.testDetails" :key="file.file">
     {{ file.file }} —
     ✅ {{ file.passed }} /
     ❌ {{ file.failed }} — {{ file.status }}
    </li>
   </ul>
  </div>

  <div class="error" v-if="error">
   <h3>❌ Error:</h3>
   <pre>{{ error }}</pre>
  </div>
 </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const loading = ref(false)
const result = ref<any>(null)
const error = ref('')

async function runTests() {
 loading.value = true
 result.value = null
 error.value = ''

 try {
  const res = await $fetch('/api/run-tests')
  result.value = res
 } catch (err: any) {
  error.value = err.message || 'Error running tests'
 } finally {
  loading.value = false
 }
}
</script>

<style scoped>
.test-page {
 padding: 2rem;
 max-width: 800px;
 margin: auto;
}

.result ul {
 padding: 0;
 list-style: none;
}

.result li {
 margin: 0.4rem 0;
}

.error pre {
 background: #fee;
 color: #900;
 padding: 1rem;
 border-radius: 6px;
}
</style>
