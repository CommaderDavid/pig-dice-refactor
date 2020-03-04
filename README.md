# Pig Dice Refactor
#### Test it out, for Fidgetech
#### Date: 3-4-2020 by:_**David Boedigheimer**_
### Description
This program is a remake of the Pig game, (Also known as Pig Dice). This refactor uses Tests to help make the code DRY. Two players play this game. Each taking turns to roll a dice and rack up points till one of them gets to 100.
### BDD Process
  1. Player clicks on "roll", and a random number between 1-6 is generated and shown.
    * **Input**: Click on roll button
    * **Output**: "4"
  2. When the "Dice" is rolled, it adds to a current total pool.
    * **Input**: Current pool: "10" (click on roll) = 3
    * **Output**: Current pool: "13"
  3. When end turn button is clicked, Current pool is added to current players total score, then cleared.
    * **Input**: Current pool: "18" (click end turn button)
    * **Output**: Player one score: "18", current pool: "0"
  4. When end turn button is clicked, switch players.
    * **Input**: (End turn clicked)
    * **Output**: "Player two's turn"
  5. When a "1" is rolled, Delete current pool.
    * **Input**: Roll = "1"
    * **Output**: Current pool: "0"
  6. When a "1" is rolled, switch players.
    * **Input**: Roll = "1"
    * **Output**: "Players 2 turn"
  7. When one player reaches 100, they win.
    * **Input**: Player 1 score: "100"
    * **Output**: "Player 1 Wins!"

### Setup
* Click on clone or download
* Copy link to clipboard
* Open your preferred terminal
* Navigate to `$cd Desktop`
* Create a folder to house the copy `$mkdir "Copy"`
* Paste the link, (this is using github) `$git clone "Link"`
* Run npm install `$npm install`
* Then run npm start and enjoy `$npm start`

### Contact
If you have any questions or concerns, please contact me at stealth259@gmail.com
### Known bugs
There are no known bugs in the program.
### License
This program is licensed under the ISC license.
Copyright (c) 2020 _**David Boedigheimer**_
