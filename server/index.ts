import * as bodyParser from 'body-parser';
import nextapp from './nextapp';
import * as routes from './routes';
const express = require('express');

const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api', routes.api);
app.use('/', routes.app);

(async () => {
  try {
    await nextapp.prepare();
    app.listen(port);
    console.log(`server listening on port ${port}`);
  } catch (err) {
    console.error(err);
  }
})();
