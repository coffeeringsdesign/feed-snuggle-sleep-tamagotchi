export class Pet {
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
    document.getElementById("dead").innerHTML = "Your pet is dead";
    document.getElementById("restart").innerHTML = "<button type='button' name='restart' id='restartButton'>Restart</button>";
    }
  }

  increaseHunger() {
    const hungerInterval = setInterval(() => {
      if (this.deathCheck() === true) {
        this.deathClearInterval(hungerInterval);
      } else {
        this.hungerLevel++;
        console.log("Hunger: " + this.hungerLevel);
        document.getElementById("hungerStatus").innerHTML = this.hungerLevel;
        return this.hungerLevel;
      }
    }, 1000);
  }

  feed() {
    this.hungerLevel = 0;
  }

  increaseLoneliness() {
    const lonelinessInterval = setInterval(() => {
      if (this.deathCheck() === true) {
        this.deathClearInterval(lonelinessInterval);
      } else {
        this.lonelinessLevel++;
        document.getElementById("lonelinessStatus").innerHTML = this.lonelinessLevel;
        return this.lonelinessLevel;
      }
    }, 2000);
  }

  snuggle() {
    this.lonelinessLevel = 0;
  }

  increaseSleepiness() {
    const sleepinessInterval = setInterval(() => {
      if (this.deathCheck() === true) {
        this.deathClearInterval(sleepinessInterval);
      } else {
        this.sleepinessLevel++;
        document.getElementById("sleepinessStatus").innerHTML = this.sleepinessLevel;
        return this.sleepinessLevel;
      }
    }, 3000);
  }

  sleep() {
    this.sleepinessLevel = 0;
  }

  deathCheck() {
    if (this.hungerLevel === 10 || this.lonelinessLevel === 10 || this.sleepinessLevel === 10) {
      return true;
    } else {
      return false;
    }
  }
}
