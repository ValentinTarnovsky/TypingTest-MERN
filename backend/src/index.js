import app from "./app.js";
import { connectDB } from "./db.js";

import dotenv from 'dotenv';
dotenv.config();

const PORT = process.env.PORT || 3000;
connectDB();
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
});