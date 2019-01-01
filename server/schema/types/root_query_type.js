const graphql = require('graphql');
const { GraphQLObjectType, GraphQLID, GraphQLString } = graphql;
const UserType = require('./user_type');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    user: {
      type: UserType,
      fields: {
        id: {
          type: GraphQLID
        },
        email: {
          type: GraphQLString
        }
      },
      resolve(parentValue, args, req){
        return req.user;
      }
    }
  }
});

module.exports = RootQueryType;
