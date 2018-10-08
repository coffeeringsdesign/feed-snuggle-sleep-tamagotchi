
export default class Pet {
  constructor() {
    this.name = name;
    this.hungerLevel = 0;
    this.lonelinessLevel = 0;
    this.sleepinessLevel = 0;
  }

  deathClearInterval(hungerInterval, lonelinessInterval, sleepinessInterval) {
    if (this.hungerLevel === 10 || this.lonelinessLevel === 10 || this.sleepinessLevel === 10) {
    clearInterval(hungerInterval);
    clearInterval(lonelinessInterval);
    clearInterval(sleepinessInterval);
    }
  }

  increaseHunger() {
    const hungerInterval = setInterval(() => {
      console.log(this.deathCheck());
      if (this.deathCheck() === true) {
        console.log("condition met");
        this.deathClearInterval(hungerInterval);
      } else {
        console.log("Hunger: " + this.hungerLevel);
        this.hungerLevel++;
        return this.hungerLevel;
      }
    }, 1000);
  }

  increaseLoneliness() {
    const lonelinessInterval = setInterval(() => {
      console.log(this.deathCheck());
      if (this.deathCheck() === true) {
        this.deathClearInterval(lonelinessInterval);
      } else {
        console.log("Loneliness: " + this.lonelinessLevel);
        this.lonelinessLevel++;
        return this.lonelinessLevel;
      }
    }, 3000);
  }

  increaseSleepiness() {
    const sleepinessInterval = setInterval(() => {
      if (this.deathCheck() === true) {
        console.log("Should stop");
        this.deathClearInterval(sleepinessInterval);
      } else {
        console.log("Sleepiness: " + this.sleepinessLevel);
        this.sleepinessLevel++;
        return this.sleepinessLevel;
      }
    }, 3000);
  }

  deathCheck() {
    if (this.hungerLevel === 10 || this.lonelinessLevel === 10 || this.sleepinessLevel === 10) {
      return true;
    } else {
      return false;
    }
  }

}
