const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log("Server is running on port " + port);
});

app.use(bodyParser.json());
app.set('view engine', 'ejs');


const doubts = [];


app.get('/', (req, res) => {
    res.render('page', { doubts });
  });

app.post("/student", (req, res) => {
    // const { data } = req.body;
    // if (data) {
      const newDoubt = [5,6,6];
      doubts.push(newDoubt);
      console.log("Doubt added:", newDoubt);
      res.status(200).json(doubts);
    // } else {
    //   console.error("Invalid data received"); 
    //   res.status(400).json({ error: "Invalid data" });
    // }
  });



app.get('/get-doubts', (req, res) => {
  res.status(200).json(doubts);
});
