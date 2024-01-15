import app from './app';
import { connectDatabase } from './db/dbConnect';

connectDatabase();

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
