const express = require('express');
const router = express.Router();
const {
    getTheorySubjects,
    getLabs,
    addTheorySubject,
    addLab,
    deleteTheorySubject,
    deleteLab,
    updateText,
    addLink,
    deleteLink
} = require('../controllers/SubjectController');

// === Theory ===
router.get('/theory', getTheorySubjects);
router.post('/theory', addTheorySubject);
router.delete('/theory/:name', deleteTheorySubject);

// === Labs ===
router.get('/labs', getLabs);
router.post('/labs', addLab);
router.delete('/labs/:name', deleteLab);

// === Update / Links ===
// Add `:type` so controller knows whether it's Theory or Lab
router.put('/:type/:name/text', updateText);     
router.put('/:type/:name/links', addLink);       
router.put('/:type/:name/links/delete', deleteLink); 

module.exports = router;
