export default`
    type Tweet {
        _id: ID!
        text: String!
    }

    type Query {
        getTweet(_id: ID!): Tweet
        getTweets: [Tweet]
    }

    type Mutation {
        createTweet(text: String!): Tweet
        updateTweet(_id: ID!, text: String, email: String): Tweet
    }

    schema {
        query: Query
        mutation: Mutation
    }
`;