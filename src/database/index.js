'use strict';
const _ = require('lodash');
const db = require('./db.js');


// UTILS
//----------------
// This is a mock db call that waits for # milliseconds and returns
const mockDBCall = (dataAccessMethod) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(dataAccessMethod());
        }, 500);
    });
};

// MOCK DB CALLS
//----------------
const getUsers = () => {
    const dataAccessMethod = () => _.map(db.usersById, userInfo => userInfo)
    return mockDBCall(dataAccessMethod);
};
const getListOfUniqueItems = () => {
    const dataAccessMethod = () => {
        const itemsOfUserByUsername = db.itemsOfUserByUsername
        return _.uniq(_.flatten(_.map(itemsOfUserByUsername, itemsInfo => itemsInfo)))


    }
    return mockDBCall(dataAccessMethod);
}

const getListOfAgesOfUsersWith = (item) => {
    const dataAccessMethod = () => {
        
        const itemsOfUserByUsername = db.itemsOfUserByUsername
        const usersAge = _.map(db.usersById, userInfo => userInfo)

        const itemUserMatch = _.filter(_.map(itemsOfUserByUsername, (itemsInfo, key) => {
            if (itemsInfo.some(a => a === item)) {
                return key
            }
        }), data => !!data)
        
        const ages = _.filter(_.map(itemUserMatch, user => _.find(usersAge, userAge => userAge.username === user).age), data => !!data)

        return _.uniqBy(_.map(ages, elm => {
            return { age: elm, count: _.filter(ages, item => item == elm).length }
        }), 'age');


    }
    return mockDBCall(dataAccessMethod);
}

module.exports = {
    getUsers,
    getListOfAgesOfUsersWith,
    getListOfUniqueItems
};
