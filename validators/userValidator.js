const Joi = require("joi");

function registerUserValidator(user) {
    const schema = Joi.object({
        username: Joi.string().min(3).max(55).required(),
        email: Joi.string().email({tlds: false}).max(55).required(),
        password: Joi.string().min(6).max(1024).required(),
    });

    const {error} = schema.validate(user);
    if (error) {
        return { isValid: false, error: error.details[0].message };
    } else {
        return { isValid: true };
    }
}

function loginUserValidator(user) {
    const schema = Joi.object({
        email: Joi.string().min(3).max(55).required(),
        password: Joi.string().min(6).max(1024).required(),
    })

    const {error} = schema.validate(user);
    if (error) {
        return { isValid: false, error: error.details[0].message };
    } else {
        return { isValid: true };
    }
}

module.exports = {
    registerUserValidator,
    loginUserValidator
};