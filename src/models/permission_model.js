
const mongoose = require('mongoose');

const { tables } = require('../utils/tableNames.utils');

const Schema = mongoose.Schema;

const permissionSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,

    },
    enabled: {
        type: Boolean,
        default: true,
    },

});

module.exports = mongoose.model(tables.Permissions, permissionSchema);