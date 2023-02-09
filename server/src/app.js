const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.PORT || 3030;

const corsOptions = {
  origin: ['http://localhost:4200', 'http://localhost:3030'],
  credentials: true
};
app.use(cors(corsOptions));

const apiRoutes = require('./routes');
app.use('/api', apiRoutes);

app.listen(port, _ => {
  console.log(`Server running on port ${port}.....`);
});
