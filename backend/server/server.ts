import express from 'express';
import { graphqlHTTP } from 'express-graphql';
import schema from '../graphql-server/schema';
import auth from '../api-service/controllers/apis/auth';


const app = express();
const PORT = process.env.PORT || 3000;


app.use('/auth', auth);

app.use(
  '/graphql',
  graphqlHTTP({
    schema,
    graphiql: true,
  }),
);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});