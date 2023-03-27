import { getOptimizedLineup } from '../../backend/api-service/controllers/prediction';

const resolvers = {
  Query: {
    optimizedLineup: async () => {
      const optimizedLineup = await getOptimizedLineup();
      return optimizedLineup;
    },
  },
};

export default resolvers;
