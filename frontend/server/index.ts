import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import typeDefs from '../../backend/graphql-server/schema';
import resolvers from '../../backend/graphql-server/resolvers';

const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());

const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app });

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`GraphQL server is running on http://localhost:${PORT}${apolloServer.graphqlPath}`);
});
