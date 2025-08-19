const mongoose = require('mongoose');
const subjectSchema = new mongoose.Schema({
    name: { type: String, required: true, unique: true },
    type: { type: String, enum: ['Theory', 'Lab'], required: true },
     links: [
        {
            url: { type: String },
            label: { type: String }
        }
    ],
    text: { type: String }
});
module.exports = mongoose.model('subject', subjectSchema);