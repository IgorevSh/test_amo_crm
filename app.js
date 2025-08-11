import express from 'express';
import cors from 'cors';
import routes from './src/routes/index.js'
import dotenv from 'dotenv';

dotenv.config();
const app = express();

// Middleware
app.use(cors());
app.use(routes)
const port = process.env.RUN_PORT || 3000
app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
