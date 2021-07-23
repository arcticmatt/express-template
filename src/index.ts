import express from "express";

const main = async () => {
  const app = express();

  const port = 4000;
  const host = 'localhost';

  app.get('/', (req, res) => {
    res.send('Hello World!')
  })

  app.listen(port, host, () => {
    console.log(`Example app listening at http://${host}:${port}`);
  });
};

main();
