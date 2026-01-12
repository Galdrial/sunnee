<script setup lang="ts">
import { useSunneeStore } from '@/stores/sunnee';
import { computed } from 'vue';
const props = defineProps<{
  capColor?: string;
  bodyColor?: string;
  bottomColor?: string;
}>();
const sunneeStore = useSunneeStore();

const cap = computed(() => props.capColor ?? sunneeStore.capColor);
const body = computed(() => props.bodyColor ?? sunneeStore.bodyColor);
const bottom = computed(() => props.bottomColor ?? sunneeStore.bottomColor);
</script>

<template>
  <div class="bottle-container">
    <img
      src="../assets/img/cap.png"
      class="layer cap"
      :style="{ backgroundColor: cap, mixBlendMode: 'multiply' }"
    />
    <img
      src="../assets/img/body.png"
      class="layer body"
      :style="{ backgroundColor: body, mixBlendMode: 'multiply' }"
    />
    <img
      src="../assets/img/bottom.png"
      class="layer bottom"
      :style="{ backgroundColor: bottom, mixBlendMode: 'multiply' }"
    />
    <img src="../assets/img/mask.png" class="layer body" />
    <img src="../assets/img/logo.png" class="layer label" />
  </div>
</template>
