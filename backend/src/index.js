import express from 'express';
import cors from 'cors';
import router from './routes/router';

const PORT = 3001;
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use('/', router);

app.listen(PORT, () => {
    console.log(`Todo Backend app listening at http://localhost:${PORT}`);
});