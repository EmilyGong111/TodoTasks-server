const express = require("express");
const cors = require('cors');
const v1Router = require("./routes");

const app = express();
app.use(cors({origin:"*"}));
app.use(express.json());

//GET/v1/tasks
// app.use('/v1')
//GET/tasks
app.use(v1Router);
app.listen(3000,()=>{console.log(`server is listening on 3000`)});
