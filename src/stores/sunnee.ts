import { defineStore } from 'pinia';
import { ref } from 'vue';

// Pinia store for managing the Sunnee bottle configurator state
export const useSunneeStore = defineStore('sunnee', () => {
  // Default color for all bottle parts
  const defaultColor = 'whitesmoke';
  // Reactive state for each bottle part
  const capColor = ref(defaultColor);
  const bodyColor = ref(defaultColor);
  const bottomColor = ref(defaultColor);
  // Current step in the configurator (1: cap, 2: body, 3: bottom)
  const step = ref(1);
  // Available color options
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

  // Advance to the next step (max 3)
  function advanceStep() {
    if (step.value < 3) {
      step.value += 1;
    }
  }

  // Go back to the previous step (min 1)
  function stepBack() {
    if (step.value > 1) {
      step.value -= 1;
    }
  }

  // Setters for each bottle part color
  function setCapColor(color: string) {
    capColor.value = color;
  }

  function setBodyColor(color: string) {
    bodyColor.value = color;
  }

  function setBottomColor(color: string) {
    bottomColor.value = color;
  }

  // Reset all colors and step to default
  function reset() {
    capColor.value = colors.default;
    bodyColor.value = colors.default;
    bottomColor.value = colors.default;
    step.value = 1;
  }

  // Expose state and actions
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