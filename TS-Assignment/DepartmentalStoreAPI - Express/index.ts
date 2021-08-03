import express from "express";
import dotenv from 'dotenv';

import { Middlewares } from './middlewares';

const app = express();
dotenv.config();

Middlewares.init(app);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
