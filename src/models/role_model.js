
const mongoose = require('mongoose');

const { tables } = require('../utils/tableNames.utils');

const Schema = mongoose.Schema;

const roleSchema = new Schema({
    name: {
        type: String, required: true,
        unique: true,

    },
    permissions: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: tables.Permissions,
        }
    ],

});

module.exports = mongoose.model(tables.Roles, roleSchema);


