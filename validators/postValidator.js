const Joi = require("joi");

function postValidator(post) {
    const schema = Joi.object({
        title: Joi.string().trim().min(6).max(55).required(),
        description: Joi.string().trim().min(6).max(55).required(),
        content: Joi.string().trim().required(),
        read_count: Joi.number()
    })

    const { error } =  schema.validate(post);
    if (error) {
        return { isValid: false, error: error.details[0].message };
    } else {
        return { isValid: true };
    }
}

module.exports = {
    postValidator,
}