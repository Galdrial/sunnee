<script setup lang="ts">
// BottlePreview component: shows the bottle with customizable colors
import { useSunneeStore } from '@/stores/sunnee';
import { computed } from 'vue';
// Props allow overriding the default store colors (used for home preview)
const props = defineProps<{
  capColor?: string;
  bodyColor?: string;
  bottomColor?: string;
}>();
const sunneeStore = useSunneeStore();

// Use props if provided, otherwise fallback to store state
const cap = computed(() => props.capColor ?? sunneeStore.capColor);
const body = computed(() => props.bodyColor ?? sunneeStore.bodyColor);
const bottom = computed(() => props.bottomColor ?? sunneeStore.bottomColor);
</script>

<template>
  <div class="bottle-container">
    <!-- Cap image with dynamic color -->
    <img
      src="../assets/img/cap.png"
      alt="Bottle cap"
      class="layer cap"
      :style="{ backgroundColor: cap, mixBlendMode: 'multiply' }"
    />
    <!-- Body image with dynamic color -->
    <img
      src="../assets/img/body.png"
      alt="Bottle body"
      class="layer body"
      :style="{ backgroundColor: body, mixBlendMode: 'multiply' }"
    />
    <!-- Bottom image with dynamic color -->
    <img
      src="../assets/img/bottom.png"
      alt="Bottle bottom"
      class="layer bottom"
      :style="{ backgroundColor: bottom, mixBlendMode: 'multiply' }"
    />
    <!-- Mask and logo overlays -->
    <img src="../assets/img/mask.png" alt="Bottle mask overlay" class="layer body" />
    <img src="../assets/img/logo.png" alt="Sunnee Kids logo" class="layer label" />
  </div>
</template>
