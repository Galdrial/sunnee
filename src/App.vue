
<script setup lang="ts">
// Import store for bottle configuration and routing utilities
import { useSunneeStore } from '@/stores/sunnee';
import { RouterView, useRoute } from 'vue-router';

const sunneeStore = useSunneeStore();
const route = useRoute();
</script>

<template>
  <div id="app" class="flex flex-col min-h-screen">
    <header class="flex-none">
      <div class="flex flex-row justify-between items-center px-4">
      <img
        src="./assets/img/logo2.png"
        alt="Sunnee Kids logo"
        style="position: relative; width: 150px; z-index: 10"
      />
      <div v-if="['/configurator','/step-2','/step-3'].includes(route.path)" class="step-indicator">
        <div class="step-circle">{{ sunneeStore.step }}</div>
        <span class="step-text">/ 3</span>
      </div>
     
      <router-link to="/" style="text-decoration: none">
        <button v-on:click="useSunneeStore().reset()" type="button" class="custom-pill-btn" data-icon="home">
          Home
        </button>
      </router-link>
    </div>
    </header>
    <main class="flex-1">
    <RouterView />
    </main>
    <footer class="flex-none">
    <nav class="flex shrink-0  items-center justify-center flex-wrap gap-2 sm:gap-16 p-2 relative z-50 w-full" aria-label="Footer">
      
      <!-- Copyright and author info -->
      <p class='text-gray-800 text-center' aria-label="Copyright © 2025 Simone Camerano">© 2025 Made with Passion by Simone Camerano</p>
      
      <!-- Social links section: GitHub, personal website, LinkedIn -->
      <div class="flex justify-center gap-4 sm:gap-2" aria-label="Social links">
        <!-- GitHub profile link -->
        <a href="https://github.com/Galdrial" target="_blank" rel="noopener" aria-label="GitHub profile">
          <img src="./assets/img/github.png" alt="GitHub" width="32" height="32" class="hover:scale-120 transition-transform duration-200" />
        </a>
        <!-- Personal website link -->
        <a href="https://simonecamerano.dev" target="_blank" rel="noopener" aria-label="Personal website">
          <img src="./assets/img/site.png" alt="Website" width="32" height="32" class="hover:scale-120 transition-transform duration-200"/>
        </a>
        <!-- LinkedIn profile link -->
        <a href="https://www.linkedin.com/in/simone-camerano/" target="_blank" rel="noopener" aria-label="LinkedIn profile">
          <img src="./assets/img/linkedin.png" alt="LinkedIn" width="32" height="32" class="hover:scale-120 transition-transform duration-200" />
        </a>
      </div>
    </nav>
    </footer>
  </div>
</template>

<style scoped>
.step-indicator {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.step-circle {
  width: 3rem;
  height: 3rem;
  border-radius: 50%;
  background-color: rgb(251, 183, 140);
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  font-weight: bold;
  box-shadow: 0 2px 8px rgba(245, 158, 66, 0.3);
}

.step-text {
  font-size: 1.5rem;
  font-weight: 600;
  color: #333;
}

@media (max-width: 800px) {
  .step-circle {
    width: 2.5rem;
    height: 2.5rem;
    font-size: 1.2rem;
  }
  
  .step-text {
    font-size: 1.2rem;
  }
}
</style>
