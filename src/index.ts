import express from 'express';
import images from '../src/routes/api/index';


const app =express();
const port = 3000;

app.use('/api', images);

app.get('/', (req, res) => {
    console.log("Welcome to ImageProcessingAPI");
    res.send("Welcome");
});

app.listen(port, (): void =>{
    console.log(`server started at http://localhost:${port}`);
});


export default app;