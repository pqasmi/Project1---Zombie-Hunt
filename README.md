# Project1---Zombie-Hunt

The Game is called Zombie Hunt.
Game Rules:
- Player needs 10 coins to win the game
- When the game starts, user will have 10 ammo shots
- Player can buy 6 shots for 2 coins
- There will be a dynamic message board which will display the following messages upon game starting:
    - If shot successfull "Dead Zombie"
    - if shot missed " Missed Shot"
    - If 10 coins collected "Game Won" within 30 secs
    - If less than 10 coins collected within 30 secs --> "Game Lost"
- Game will also allow the Player to restart game at anytime.

Index HTML:
- Container properties used for buttons and screens with ID and classes

Style CSS:
- Flex properties enabled which will auto center the game screen on any screen size
- Used Cursor image properties

App.JS:
- Use of query selectors and event listeners.
- function call backs used throught, code is modular
- event target ID function are used to detect if Zombie shot successful
- Extensive use of SetTimeout and SetInterval properties
