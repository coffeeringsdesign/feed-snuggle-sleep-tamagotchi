import Pet from './petObject.js';

export function increaseHunger() {
  const hungerInterval = setInterval(() => {
    this.hungerLevel++;
    if (hungerLevel === 10) {
      return "Your pet is dead";
    } else {
      console.log(hungerLevel);
      return hungerLevel;
    }
  }, 10000);
}
