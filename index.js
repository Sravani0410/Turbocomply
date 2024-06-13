const express =require("express");
const morgan =require("morgan")
const logger = require('./middleware/logger');
const tradeController =require("./controllers/tradeControllers")
const app=express();
const PORT=8087;

app.use(express.json());
app.use(morgan('combined'));
app.use(logger);


// routes:
app.post('/trades', tradeController.createTrade);
app.get('/trades',tradeController.getAllTrades);
app.get('/trades/:id',tradeController.getTradeById)
app.delete('/trades/:id', tradeController.deleteTradeById);
app.patch('/trades/:id',tradeController.updateTradeById)

app.listen(PORT,()=>{
    console.log(`server is connected ${PORT}`)
})