import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';
import axios from 'axios';

const UserType = new GraphQLObjectType({
  name: 'User',
  fields: {
    id: { type: GraphQLString },
    name: { type: GraphQLString },
  },
});

const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      args: {
        accessToken: { type: GraphQLString },
      },
      resolve: async (_parentValue, args) => {
        try {
          const response = await axios.get('https://fantasysports.yahooapis.com/fantasy/v2/users;use_login=1', {
            headers: {
              'Authorization': 'Bearer ${args.accessToken}',
              'Content-Type': 'application/json',
              },
              });
              const user = response.data.fantasy_content.users[0].user[0];
      return {
        id: user.guid,
        name: user.nickname,
      };
    } catch (error) {
      console.error('Error fetching user data:', error);
      throw error;
    }
  },
},
},
});

export default new GraphQLSchema({
query: RootQuery,
});
