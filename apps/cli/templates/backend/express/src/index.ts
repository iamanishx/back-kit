import express from 'express';

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req: express.Request, res: express.Response) => {
    res.send('Hello, Express!');
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});