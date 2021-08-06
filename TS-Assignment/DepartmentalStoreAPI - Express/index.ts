import express from "express";
import appConfig  from './config/default';

import { Middlewares } from './middlewares';
import db from './models/index';

const app = express();

Middlewares.init(app);

const PORT = appConfig.PORT || 4000;


app.listen(PORT, async () => {
    console.log(`Server up on http://localhost:${PORT}`)
    await db.sequelize.authenticate()
    console.log('Database Connected!')
});
