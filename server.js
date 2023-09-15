
// Greeting

const express = require('express');
const app = express();
const port = 3000;

app.get('/greeting', (req, res) => {
  res.send('Hello, stranger');
});

app.get('/greeting/:name', (req, res) => {
    const name = req.params.name;
    res.send(`Wow! Hello there, ${name}!`);
  });
  
  app.listen(port, () => {
    console.log('listening on port' , port);
  });

// //Tip Calculator

// const express = require('express');
// const app = express();
// const port = 3000;

// app.get ('/tip/:total/:tipPercentage',(req,res) => {
    
//     const total = parseFloat(req.params.total);
//     const tipPercentage = parseFloat(req.params.tipPercentage);
  
//     if (isNaN(total) || isNaN(tipPercentage)) {
//       res.send('Invalid input. Please provide valid numbers.');
//     } else {
//       const tipAmount = (total * tipPercentage) / 100;
//       res.send(`Your tip amount is: $${tipAmount.toFixed(2)}`);
//     }
//   });
  
//   app.listen(port, () => {
//     console.log('listening on port' , port);
//   });
 

//Magic 8 Ball
// const express = require('express');
// const app = express();
// const port = 3000;

// // Magic 8 Ball responses
// const magic8BallResponses = [
//   "It is certain", "It is decidedly so", "Without a doubt", "Yes definitely",
//   "You may rely on it", "As I see it yes", "Most likely", "Outlook good",
//   "Yes", "Signs point to yes", "Reply hazy try again", "Ask again later",
//   "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
//   "Don't count on it", "My reply is no", "My sources say no",
//   "Outlook not so good", "Very doubtful"
// ];

// app.get('/magic/:question', (req, res) => {
//   const question = req.params.question.replace(/%20/g, ' '); // Replace %20 with spaces
//   const randomResponse = magic8BallResponses[Math.floor(Math.random() * magic8BallResponses.length)];
//   res.send(`<h1>Your Question: ${question}</h1><h1>Magic 8 Ball Response: ${randomResponse}</h1>`);
// });

// app.listen(port, () => {
//   console.log('listening on port' , port);
// });
  
  
  

