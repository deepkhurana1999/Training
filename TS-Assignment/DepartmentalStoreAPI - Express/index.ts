import express from "express";
import appConfig  from './config/default';

import { Middlewares } from './middlewares';

const app = express();

Middlewares.init(app);

const PORT = appConfig.PORT || 4000;
app.listen(PORT, () => console.log(`Listening on port ${PORT}...`));
