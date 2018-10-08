import { Pet } from './../src/petObject.js';

describe('animal', function() {
  beforeEach(() => {
  // let pet1 = new Pet();
    // pet1.hungerLevel = 0;
    jasmine.clock().install();
    // pet1.increaseHunger();
  });

  afterEach(() => {
    jasmine.clock().uninstall();
  })

  it ('should test whether hungerLevel increases by one every 5 seconds', function() {
    let pet1 = new Pet();
    pet1.increaseHunger();
    jasmine.clock().tick(3001);
    expect(pet1.hungerLevel).toBe(3);
  })
})
