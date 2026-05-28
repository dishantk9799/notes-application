import express from 'express';
import noteRoute from '../routes/note.route.js';

const app = express();

app.use(express.json());

// ---- Note routes ----
app.use('/api', noteRoute);

export default app;