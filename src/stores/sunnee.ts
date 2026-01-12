import { defineStore } from 'pinia';
import { ref } from 'vue';

export const useSunneeStore = defineStore('sunnee', () => {
  const defaultColor = 'whitesmoke';
  const capColor = ref(defaultColor);
  const bodyColor = ref(defaultColor);
  const bottomColor = ref(defaultColor);
  const step = ref(1);
    const colors = {
      default: 'whitesmoke',
      red: 'rgb(251, 170, 161)',
      green: 'rgb(210, 251, 212)',
      skyblue: 'rgb(183, 238, 251)',
      purple: 'rgb(183, 183, 251)',
      gold: 'rgb(255, 215, 0)',
      orange: 'rgb(251, 183, 140)',
      pink: 'rgb(251, 183, 238)',
      silver: 'rgb(192, 192, 192)',
      black: 'rgb(140, 139, 139)',
    };

function advanceStep() {
    step.value += 1;
  }

  function stepBack() {
    if (step.value > 1) {
      step.value -= 1;
    }
  }

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
    capColor.value = colors.default;
    bodyColor.value = colors.default;
    bottomColor.value = colors.default;
    step.value = 1;
  }

  return {
    reset,
    capColor,
    bodyColor,
    bottomColor,
    setCapColor,
    setBodyColor,
    setBottomColor,
    colors,
    step,
    advanceStep,
    stepBack,
  };
});