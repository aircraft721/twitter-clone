import TweetResolvers from './tweet-resolvers';

export default {
    Query: {
        getTweet: TweetResolvers.getTweet,
        getTweets: TweetResolvers.getTweets
    },
    Mutation: {
        createTweet: TweetResolvers.createTweet
    }

}