const express = require('express');
const error = require('../middleware/error');
const users = require('../routes/contacts');
const signup = require('../routes/signup');
const addresses = require('../routes/address');
const hr = require('../routes/hr');
const departments = require('../routes/department');
const roles = require('../routes/role');
const apps = require('../routes/app');
const absences = require('../routes/absence');
const holidays = require('../routes/holiday');
const leaveTypes = require('../routes/leaveType');
const settings = require('../routes/settings');
const inventories = require('../routes/inventory');
const logs = require('../routes/log');
const auth = require('../routes/auth');

module.exports = function (app) {
    app.use(express.json());
    app.use('/api/users', users);
    app.use('/api/signup', signup);
    app.use('/api/addresses', addresses);
    app.use('/api/hr', hr);
    app.use('/api/departments', departments);
    app.use('/api/roles', roles);
    app.use('/api/apps', apps);
    app.use('/api/absences', absences);
    app.use('/api/holidays', holidays);
    app.use('/api/leaveTypes', leaveTypes);
    app.use('/api/settings', settings);
    app.use('/api/inventories', inventories);
    app.use('/api/logs', logs);
    app.use('/api/auth', auth);
    app.use(error);
}