// my-app/server.js
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 5000;

app.use(cors());
app.use(bodyParser.json());

const membersRouter = require('./routes/members');
app.use('/api/members', membersRouter);

const loginRouter = require('./routes/login');
app.use('/api/login', loginRouter);

const accountsRouter = require('./routes/accounts');
app.use('/api/accounts', accountsRouter);

const logsRouter = require('./routes/logs');
app.use('/api/logs', logsRouter);

const accountLogsRouter = require('./routes/accountLogs');
app.use('/api/account_logs', accountLogsRouter);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
