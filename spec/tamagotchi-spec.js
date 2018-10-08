import { Pet } from './../src/petObject.js';

describe('animal', function() {
  beforeEach(() => {
    jasmine.clock().install();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  })

  it ('should test whether hungerLevel increases by one every second', function() {
    let pet1 = new Pet();
    pet1.increaseHunger();
    jasmine.clock().tick(3001);
    expect(pet1.hungerLevel).toBe(3);
  })

  it ('should test whether lonelinessLevel increases by one every 2 seconds', function() {
    let pet1 = new Pet();
    pet1.increaseLoneliness();
    jasmine.clock().tick(4001);
    expect(pet1.lonelinessLevel).toBe(2);
  })

  it ('should test whether sleepinessLevel increases by one every 3 seconds', function() {
    let pet1 = new Pet();
    pet1.increaseSleepiness();
    jasmine.clock().tick(6001);
    expect(pet1.sleepinessLevel).toBe(2);
  })
})
