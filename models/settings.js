const Joi = require('joi');
const mongoose = require('mongoose');

const settingsSechema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        maxlength: 256
    },
    value: {
        type: String,
        required: true,
        maxlength: 256
    },
    desc: {
        type: String,
        maxlength: 768
    },
    enabled: {
        type: Boolean,
        default: true
    },
    createdBy: {
        type: String,
        maxlength: 256
    },
    createdDate: {
        type: Date,
        default: Date.now
    },
    modifiedBy: {
        type: String,
        maxlength: 256
    },
    modifiedDate: {
        type: Date,
        default: Date.now
    }
});

const Settings = new mongoose.model('Settings', settingsSechema);

function validateSettings(settings) {
    const schema = {
        name: Joi.string().max(256).required(),
        value: Joi.string().max(256).required(),
        desc: Joi.string().optional().allow(null).allow('').max(768),
        enabled: Joi.boolean(),
        createdBy: Joi.string().optional().allow(null).allow('').max(256),
        modifiedBy: Joi.string().optional().allow(null).allow('').max(256)
    }

    return Joi.validate(settings, schema);
}

module.exports.SettingsSechema = settingsSechema;
module.exports.Settings = Settings;
module.exports.validateSettings = validateSettings;