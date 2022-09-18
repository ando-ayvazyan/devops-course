import dotenv from 'dotenv';
import express, { Request, Response } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';

import conveterRoutes from './routes/converter.routes';
import { createDataContextMiddleware } from './middleware/dataContext.middleware';
import { clientErrorHandlerMiddleware } from './middleware/clientErrorHandler.middleware';
import { errorLogger, loggerMiddleware } from './middleware/logger.middleware';

// Assuming .env file for prod will be created in deployment phase.
dotenv.config();

const app = express();
const port = process.env.SERVER_PORT || 8000;

app.use(bodyParser.json());

app.use(cors({
  allowedHeaders: [ 'Content-Type' ]
}));

app.use(createDataContextMiddleware);

loggerMiddleware(app);

app.use('/convert', conveterRoutes);
app.get('/health', (_: Request, res: Response) => {
  res.end('Server is running...');
});

errorLogger(app);

app.use(clientErrorHandlerMiddleware);

app.listen(port, () => {
  console.log(`Server started at http://localhost:${port}`);
});

export default app;
