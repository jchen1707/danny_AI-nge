import express from 'express';
import cors from 'cors';
import { ApolloServer } from 'apollo-server-express';
import { typeDefs, resolvers } from '../../frontend/server/graphql'; // Import your GraphQL schema and resolvers
import { getOptimizedLineup } from './controllers/prediction';

const app = express();
const PORT = process.env.PORT || 4000;

// Middleware
app.use(cors());
app.use(express.json());

// API routes
app.get('/predictions/optimized-lineup', getOptimizedLineup);

// Set up the GraphQL server
const apolloServer = new ApolloServer({ typeDefs, resolvers });
apolloServer.applyMiddleware({ app });

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
  console.log(`GraphQL server is running on http://localhost:${PORT}${apolloServer.graphqlPath}`);
});
