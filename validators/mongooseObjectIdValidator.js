const Joi = require('joi');
Joi.objectId = require('joi-objectid')(Joi);

function objectIdValidator(objectId) {
    const schema = Joi.objectId();

    // Validate the single objectId
    const { error } = schema.validate(objectId);

    if (error) {
        return { isValid: false, error: error.details[0].message };
    } else {
        return { isValid: true };
    }
}


module.exports = {
    objectIdValidator
}