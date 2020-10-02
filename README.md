### ApiServer

[API SERVER](https://frozen-coast-94100.herokuapp.com/api/players)

- Minimum 4 HTTP Types of endpoints
- GET  
   /api/players - (with PostMan) Returns the list from data.js
- POST

  /api/players - (with PostMan) takes name team and rings, and creates a new player and pushes it to the array

- UPDATE (PUT)

  /api/players/:id ie: /api/players/1 - (with PostMan) requires /:ID and takes name team and rings, and updates the player with the :ID sent to change.

- DELETE

  /api/players/:id ie: /api/players/3 - (with PostMan) requires /:ID and splices the parameter :ID player out of the array.

- Database NOT required
- Data kept in memory (Static Object)
  - endpoints edit data in memory
- End Points are documented in APIreadme file

- End Points must return JSON Formatted Data
