const express = require("express");
const app = express();

const PORT = process.env.PORT || 4000;
app.use(express.json());

app.listen(PORT, () => {
  console.log(`Server is listening on a port ${PORT}...`);
});
