const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema({
    title: {
        type: String,
        minLength: 3,
        maxLength: 55,
        required: true,
    },
});

const Category = mongoose.model("Category", categorySchema);
