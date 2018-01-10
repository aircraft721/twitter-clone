import TweetResolvers from './tweet-resolvers';
import GraphQLDate from 'graphql-date';
import UserResolvers from './user-resolver';

export default {
    Date: GraphQLDate,
    Query: {
        getTweet: TweetResolvers.getTweet,
        getTweets: TweetResolvers.getTweets
    },
    Mutation: {
        createTweet: TweetResolvers.createTweet,
        updateTweet: TweetResolvers.updateTweet,
        deleteTweet: TweetResolvers.deleteTweet,
        signup: UserResolvers.signup,
    }

}