![Kendra Kelly Logo](/kkgithub.png)
# Feed, Snuggle, Sleep.. Tamagotchi!

#### Epicodus JavaScript exercise, Date

#### Kendra Kelly & Nikki Wong

## Description

Add description here

## Specs

| Behavior | Input | Output |
|----------|-------|--------|
| When the user enters a name and clicks submit it names the pet. The field disappears and the name displays. | Gargamael | Gargamael |
| After one hour has passed Hunger level is increased. | Nothing | Hunger Level: 1 |
| After two hours has passed the Loneliness level & Hunger level is increased  | Nothing | Hunger Level: 2, Loneliness Level: 1 |
| After three hours has passed all levels are increased. | Nothing | Hunger Level: 3, Loneliness Level: 2, Sleepiness Level: 1 |
| When the user clicks the Feed Me button the Hunger level goes back to zero | clicks Feed Me! | Hunger Level: 0 |
| When the user clicks the Play with Me button the Loneliness level goes back to zero | clicks Play with Me! | Loneliness Level: 0 |
| When the user clicks the Go to Sleep button the Sleepiness level goes back to zero | clicks Go to Sleep! | Sleepiness Level: 0 |
| If any of the levels reach 10 the animal dies | Doesn't do anything for a long time | Your pet has died |
| If pet is dead a play again button shows, is clicked, and everything starts over | Clicks Play Again! | Page refreshes and new prompt to name new animal |

## Setup on OSX

* Install Node.js
* Install karma-cli globally: `npm install -g karma-cli`
* Clone the repo
* `npm install` to install dependencies
* `npm run start` to build and start the dev server
* `npm run lint` to explicitly run ESLint
* `npm run test` to run the unit tests with Karma and Jasmine. Visit `localhost:9876` to view the tests.

## Contribution Requirements

1. Clone the repo
1. Make a new branch
1. Commit and push your changes
1. Create a PR

## Technologies Used

* JavaScript
* Node.js
* jQuery 3.3.1
* Bootstrap 4.1.3
* Babel
* Webpack
* ESLint
* Jasmine
* Karma

## License

This software is licensed under the MIT license.

Copyright (c) 2018 **Kendra Kelly**
