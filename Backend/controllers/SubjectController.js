const Subject = require('../models/subject');

// === Get all Theory subjects ===
const getTheorySubjects = async (req, res) => {
    try {
        const theorySubjects = await Subject.find({ type: 'Theory' });
        res.json(theorySubjects);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// === Get all Labs ===
const getLabs = async (req, res) => {
    try {
        const labs = await Subject.find({ type: 'Lab' });
        res.json(labs);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// === Add Theory Subject ===
const addTheorySubject = async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name is required" });

    try {
        const exists = await Subject.findOne({ name, type: 'Theory' });
        if (exists) return res.status(400).json({ message: "Subject already exists" });

        const subject = new Subject({ name, type: 'Theory' });
        await subject.save();
        res.status(201).json(subject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// === Add Lab ===
const addLab = async (req, res) => {
    const { name } = req.body;
    if (!name) return res.status(400).json({ message: "Name is required" });

    try {
        const exists = await Subject.findOne({ name, type: 'Lab' });
        if (exists) return res.status(400).json({ message: "Lab already exists" });

        const lab = new Subject({ name, type: 'Lab' });
        await lab.save();
        res.status(201).json(lab);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// === Delete Theory Subject ===
const deleteTheorySubject = async (req, res) => {
    try {
        const result = await Subject.findOneAndDelete({
            name: req.params.name,
            type: 'Theory'
        });
        if (!result) return res.status(404).json({ message: "Subject not found" });
        res.status(200).json({ message: "Subject deleted", result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// === Delete Lab ===
const deleteLab = async (req, res) => {
    try {
        const result = await Subject.findOneAndDelete({
            name: req.params.name,
            type: 'Lab'
        });
        if (!result) return res.status(404).json({ message: "Lab not found" });
        res.status(200).json({ message: "Lab deleted", result });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// === Update text ===
const updateText = async (req, res) => {
    try {
        const { name, type } = req.params;
        const { text } = req.body;
        const subject = await Subject.findOneAndUpdate(
            { name, type },
            { text },
            { new: true }
        );
        if (!subject) return res.status(404).json({ message: `${type} not found` });
        res.json(subject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// === Add Link ===
const addLink = async (req, res) => {
    try {
        const { name, type } = req.params;
        const { url, label } = req.body;
        const subject = await Subject.findOneAndUpdate(
            { name, type },
            { $push: { links: { url, label } } },
            { new: true }
        );
        if (!subject) return res.status(404).json({ message: `${type} not found` });
        res.json(subject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

// === Delete Link ===
const deleteLink = async (req, res) => {
    try {
        const { name, type } = req.params;
        const { url } = req.body;
        const subject = await Subject.findOneAndUpdate(
            { name, type },
            { $pull: { links: { url } } },
            { new: true }
        );
        if (!subject) return res.status(404).json({ message: `${type} not found` });
        res.json(subject);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

module.exports = {
    getTheorySubjects,
    getLabs,
    addTheorySubject,
    addLab,
    deleteTheorySubject,
    deleteLab,
    updateText,
    addLink,
    deleteLink
};
