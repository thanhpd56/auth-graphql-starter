import gql from "graphql-tag";

const mutation = gql`
    mutation SignUp($email: String, $password: String){
      signup(email: $email, password: $password){
        id,
        email
      }
    }
`;

export default mutation;