import { gql } from '@apollo/client';

export const NEW_EMAIL = gql`
  subscription EMAIL_newReceivedEmail($token: String!) {
    EMAIL_newReceivedEmail(token: $token) {
      _id
      to
      body
      subject
      from {
        email
      }
    }
  }
`;
