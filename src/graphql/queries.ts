import { gql } from '@apollo/client';

export const INBOX_EMAILS = gql`
  query {
    EMAIL_listReceived {
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

export const SENT_EMAILS = gql`
  query {
    EMAIL_listSent {
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
