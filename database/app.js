import express from 'express';
import { connectToDb } from './config/db.js';
import passport from 'passport'
import "./passport.js";
import authRouters from './routes/authRoutes.js';
import calorieTrakerRoutes from './routes/calorieTrackerRoutes.js';
import swaggerUi from 'swagger-ui-express';
import cors from 'cors';
import swaggerDocument from'./swagger.json' assert { type: 'json' };


const app = express();

connectToDb();

const corsOptions = {
  origin: 'http://localhost:5173',
  optionsSuccessStatus: 200
};

app.use(cors(corsOptions));

app.use('/api-docs', swaggerUi.serve);
app.get('/api-docs', swaggerUi.setup(swaggerDocument));
app.use(express.json())

app.use(passport.initialize());


app.use('/auth', authRouters )
app.use('/api', calorieTrakerRoutes)
// app.use('/api/product', productRouters)

app.use((req, res) => {
  res.status(404).json({ message: 'Not found' })
})

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message })
})

export default app;
