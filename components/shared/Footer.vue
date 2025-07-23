<template>
 <footer class="footer">
  <p>&copy; 2025 Nordhealth</p>

 </footer>
</template>

<script setup lang="ts">
</script>

<style scoped>
.footer {
 background: linear-gradient(135deg, #0070f3, #00bfa5);
 color: white;
 padding: 1.5rem 1rem;
 text-align: center;
 border-radius: 12px 12px 0 0;
 box-shadow: 0 -4px 6px rgba(0,0,0,0.1);
 margin-top: 3rem;
 width: 100%;
}

.footer p {
 margin: 0 0 0.5rem 0;
 font-weight: bold;
}



.footer-links a {
 color: white;
 text-decoration: underline;
 font-size: 0.9rem;
 opacity: 0.85;
 transition: opacity 0.2s ease;
}

.footer-links a:hover {
 opacity: 1;
}
</style>
