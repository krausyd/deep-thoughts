// import the gql tagged template function
const { gql } = require('apollo-server-express');

// create our typeDefs
const typeDefs = gql`
type Thought {
    _id: ID
    thoughtText: String
    createdAt: String
    username: String
    reactionCount: Int
    reactions: [Reaction]
  }

type Reaction {
    _id: ID
    reactionBody: String
    createdAt: String
    username: String
  }

type User {
    _id: ID
    username: String
    email: String
    friendCount: Int
    thoughts: [Thought]
    friends: [User]
  }

type Auth {
    token: ID!
    user: User
  }

type Query {
    me: User
    users: [User]
    user(username: String!): User
    thoughts(username: String): [Thought]
    thought(_id: ID!): Thought
  }

type Mutation {
    login(email: String!, password: String!): Auth
    addUser(username: String!, email: String!, password: String!): Auth
    addThought(thoughtText: String!): Thought
    addReaction(thoughtId: ID!, reactionBody: String!): Thought
    addFriend(friendId: ID!): User
  }
`;

/* EXAMPLES OF QUERIES
query {
  me {
    _id
    username
    email
  }

  # query all thoughts
  thoughts {
    _id
    username
    thoughtText
    reactions {
      _id
      createdAt
      username
      reactionBody
    }
  }

  # query a single thought, use the `_id` value of a thought that returned from a previous query
  thought(_id: "6201d892c9c546408032fa9f") {
    _id
    username
    thoughtText
    createdAt
    reactions {
      username
      reactionBody
    }
  }

  #query all users
  users {
    _id
    email
    username
  }

  user(username: "Mellie74") {
    email
    username
  }

  
}
#mutation #addUser($username: String!, $password: String!, $email: String!) {
 # addUser(username: $username, password: $password, email: $email) {
 #   _id
 #   username
 #   email
#  }
#}
#mutation login($email: String!, $password: String!) {
#  login(email: $email, password: $password) {
#    token
 #   user {
 #     username
 #     _id
 #     email
 #   }
 # }
#}
#mutation addThought($thoughtText: String!) {
 # addThought(thoughtText: $thoughtText) {
 #   _id
 #   thoughtText
 #   createdAt
 #   username
 #   reactionCount
 # }
#}
#mutation addReaction($thoughtId: ID!, $reactionBody: String!) {
 # addReaction(thoughtId: $thoughtId, reactionBody: $reactionBody) {
  #  _id
   # reactionCount
    #reactions {
     # _id
      #reactionBody
      #createdAt
      #username
    #}
  #}
#}
mutation addFriend($friendId: ID!) {
  addFriend(friendId: $friendId) {
    _id
    username
    friendCount
    friends {
      _id
      username
    }
  }
}
*/

// export the typeDefs
module.exports = typeDefs;