const express =require("express");
const morgan =require("morgan")

const app=express();
const PORT=8085;

app.use(express.json());
app.use(morgan('combined'));

app.listen(PORT,()=>{
    console.log(`server is connected ${PORT}`)
})