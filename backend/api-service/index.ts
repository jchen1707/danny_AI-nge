import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from '../../frontend/server/graphql'; 
import { getOptimizedLineup } from './controllers/prediction';

const app = express();
const PORT = process.env.PORT || 4000;


app.use(cors());
app.use(express.json());

app.get('/predictions/optimized-lineup', getOptimizedLineup);

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`GraphQL server is running on http://localhost:${PORT}${apolloServer.graphqlPath}`);
});
