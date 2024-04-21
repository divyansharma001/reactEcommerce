import express from 'express'
import connectDB from './db.js';
import cors from 'cors';

connectDB();

const app = express();
const port = 3000;

app.use(cors({origin: "*"}));
app.use(express.json());

app.get('/', (req, res)=>{
res.send('Server is running!!');
});

app.listen(port, ()=>{
    console.log(`Server is running on port ${port}`);
})