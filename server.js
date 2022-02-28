const express = require("express");
const mongoose = require("mongoose")

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

app.use(require("./routes"));

mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost:27017/social-app-db", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
    
app.listen(PORT, () => console.log(`App running on port ${PORT}!`));
