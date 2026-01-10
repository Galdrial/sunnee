import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSunneeStore = defineStore('sunnee', () => {
  const capColor = ref('whitesmoke');
  const bodyColor = ref('whitesmoke');
  const bottomColor = ref('whitesmoke');

  function setCapColor(color: string) {
    capColor.value = color;
  }

  function setBodyColor(color: string) {
    bodyColor.value = color;
  }

  function setBottomColor(color: string) {
    bottomColor.value = color;
  }

  function reset() {
    capColor.value = 'whitesmoke';
    bodyColor.value = 'whitesmoke';
    bottomColor.value = 'whitesmoke';
  }

  return {
    reset,
    capColor,
    bodyColor,
    bottomColor,
    setCapColor,
    setBodyColor,
    setBottomColor,
  };
});