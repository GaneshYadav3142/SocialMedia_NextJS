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