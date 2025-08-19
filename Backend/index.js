require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const connectDB = require('./config/db');
const SubjectRoutes = require('./routes/subjectRoutes');

connectDB();
app.use(cors());
app.use(express.json());   // ✅ this alone is enough

// Routes
app.use('/subjects', SubjectRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
    console.log(`server running on port ${PORT}`);
});
