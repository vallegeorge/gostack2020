const express = require("express");

const app = express();

app.get("/", function(request, response){
  response.json({ message: 'Hellooooo'});
});

app.listen(3333, () => {
  console.log('🚀 Back-end started!');
});
