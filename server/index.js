const express = require("express");
require("dotenv").config();
const {graphqlHTTP} = require("express-graphql");
const connectDB = require("./config/db");
const schema = require("./schema/schema");
const app = express();
const cors = require("cors")
// Connect Database
connectDB();

app.use(cors());

app.use("/graphql", graphqlHTTP({
    schema,
    // graphiql:true
    graphiql:process.env.NODE_ENV === 'development'
}))

const port = process.env.PORT || 5000;
app.listen(port, ()=>{
    console.log(`Server is running on port: ${port}`);
})
