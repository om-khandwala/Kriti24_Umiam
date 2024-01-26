const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();


app.use(cors());
app.use(express.json());

mongoose.connect(proceess.env.ATLAS_URI,{
    useNewUrlParse: true,
    useUnifiedTopology: true,
});
mongoose.connection.once("open",()=>{
    console.log("MongoDB database connection established successfully");
})

app.use("/api",require("./routes"));




const port = process.env.PORT || 5000;
app.listen(port, () => {
  // perform a database connection when server starts
  dbo.connectToServer(function (err) {
    if (err) console.error(err);
   });
  console.log(`Server is running on port: ${port}`);
});