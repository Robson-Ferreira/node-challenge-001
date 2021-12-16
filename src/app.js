import express from 'express';
import os from 'os';

const app = express()

app.get('*', (req,res) => {
  res.send('Hello World!')
})

const port = process.env.APP_PORT || '8080';

app.listen(port, () => console.log(
  `up and running in ${process.env.NODE_ENV}@:${os.hostname()} on port: ${port}`)
);
