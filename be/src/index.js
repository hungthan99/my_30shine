const express = require("express");
const dotenv = require("dotenv");
const cors = require("cors");

const db = require('./config/db')

const route = require('./routes')

const app = express();

// permit call api in frontend
app.use(cors());

app.use(express.json());

dotenv.config();

// Connect database
db.connect()

const port = process.env.PORT || 3001;

// Routing
route(app)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
