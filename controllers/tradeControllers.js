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

module.exports = {
    readData,
    createTrade,
};
