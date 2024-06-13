const fs = require('fs');
const path = require('path');

const dbPath = path.resolve(__dirname, '../db.json');


function readData() {
    try {
        const data = fs.readFileSync(dbPath, 'utf8');
        if (!data.trim()) {
            return [];
        }
        return JSON.parse(data);
    } catch (err) {
        console.error('Error reading data from file:', err);
        return [];
    }
}

function writeData(data) {
    fs.writeFileSync(dbPath, JSON.stringify(data, null, 2));
}

// post
function createTrade(req, res) {
    try {
        const trades = readData();
        const newTrade = {
            id: trades.length + 1,
            ...req.body,
        };
        trades.push(newTrade);
        writeData(trades);
        res.status(201).json(newTrade);
    } catch (err) {
        console.error('Error creating trade:', err);
        res.status(500).send('Internal Server Error');
    }
}

// get 
function getAllTrades(req, res) {
    try {
        const trades = readData();
        res.status(200).json({ trades });
    } catch (err) {
        console.error('Error getting all trades:', err);
        res.status(500).send('Internal Server Error');
    }
}

// get by id
function getTradeById(req, res) {
    try {
        const trades = readData();
        const trade = trades.find(trade => trade.id === parseInt(req.params.id));
        if (trade) {
            res.status(200).json(trade);
        } else {
            res.status(404).send('ID not found');
        }
    } catch (err) {
        console.error('Error getting trade by ID:', err);
        res.status(500).send('Internal Server Error');
    }
}

// delete
function deleteTradeById(req, res) {
    try {
        const trades = readData();
        const tradeIndex = trades.findIndex(trade => trade.id === parseInt(req.params.id));
        if (tradeIndex !== -1) {
            trades.splice(tradeIndex, 1);
            writeData(trades);
            res.sendStatus(200);
        } else {
            res.status(404).send('ID not found');
        }
    } catch (err) {
        console.error('Error deleting trade by ID:', err);
        res.status(500).send('Internal Server Error');
    }
}

// patch request:
function updateTradeById(req, res) {
    try {
        const trades = readData();
        const tradeIndex = trades.findIndex(trade => trade.id === parseInt(req.params.id));
        if (tradeIndex !== -1) {
            trades[tradeIndex].price = req.body.price;
            writeData(trades);
            res.sendStatus(200);
        } else {
            res.status(404).send('ID not found');
        }
    } catch (err) {
        console.error('Error updating trade by ID:', err);
        res.status(500).send('Internal Server Error');
    }
}


module.exports = {
    readData,
    createTrade,
    getAllTrades,
    getTradeById,
    deleteTradeById,
    updateTradeById
};
