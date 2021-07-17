'use strict';
const mockDBCalls = require('../database/index.js');

const getListOfAgesOfUsersWithHandler = async (request, response) => {
    try {
        const itemToLookup = request.query && request.query.item;
        const data = itemToLookup ? await mockDBCalls.getListOfAgesOfUsersWith(itemToLookup) : [];
        return response.status(200).send(JSON.stringify(data));
    } catch (e) {
        return response.status(500).send(JSON.stringify({ message: 'Problem processing request' }));
    }
};

module.exports = (app) => {
    app.get('/users/age', getListOfAgesOfUsersWithHandler);
};
