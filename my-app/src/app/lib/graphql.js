import { gql } from "@apollo/client";

export const GET_ALL_POSTS = gql`
  query {
    getAllPost {
      _id
      image
      description
      comment {
              _id
              description
              name
              }
      userData {
             _id
             username
             }
    }
  }
`;

export const GET_USER_POSTS=gql`
query GetUserPost($userId: ID!){
  userPost(id: $userId) {
    _id,
      image
      description
      comment {
              description
              name
              }
      userData {
             username
             }
  }
}
`

export const SIGNUP_USER=gql`
mutation  RegisterUser($user: addUserInput!){
  addUser(user: $user) {
    _id
  }
}
`

export const LOGIN_USER=gql`
mutation LoginUser($email:String!,$password:String!){
  loginUser(email:$email,password:$password){
    token
  }
}
`

export const ADD_POST=gql`
mutation AddUserPost($post: addPostInput!){
  addPost(post: $post) {
    _id,
    image,
    description,
    userId
  }
}
`

export const DELETE_POST=gql`
mutation DeleteUserPost($deletePostId: ID!){
  deletePost(id: $deletePostId) {
    image,
    description
  }
}
`