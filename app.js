const express = require('express');
const app = express();
const port = 3000;
// const bodyParser = require('body-parser');
// app.use(bodyParser.json());
// const importData = require('./data.json');
const members = ['Cersei', 'Tywin', 'Tyrion', 'Jamie'];
const players = [
  {
    "name": "Kobe",
    "team": "Lakers",
    "rings": 5
  },
  {
    "name": "Olajuwon",
    "team": "Rockets",
    "rings": 2
  },
  {
    "name": "Rodman",
    "team": "Bulls",
    "rings": 5
  }
]

const names = members.map((member) => {
  return member;
});
app.set('view engine', 'ejs');

app.get('/', (req, res) => {
  res.render('index', { title: 'Some Title', names: names.join(' ') }); //Send dynamic data to the selected ejs page
});
app.get('/about', (req, res) => {
  res.render('about', { title: 'About Page', players }); //Send dynamic data to the selected ejs page
});
app.get('/player/create', (req, res) => {
  res.render('create');
});

// use middleware to handle as last resort for 404 page
app.use((req, res) => {
  res.status(404).render('404', { title: "4 oh' 4" });
});
app.listen(process.env.PORT || port, () =>
  console.log(`"API App LIstening at http://localhost:${port}`)
);

// app.get('/players', (req, res) => {
//   res.json(importData);
// });
// app.get('/member', (req, res) => {
//   res.send(JSON.stringify(names));
// });
