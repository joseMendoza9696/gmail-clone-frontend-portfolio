import { gql } from '@apollo/client';

export const INBOX_EMAILS = gql`
  query {
    EMAIL_listReceived {
      _id
      to
      body
      subject
      createdAt
      read
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
      createdAt
      from {
        email
      }
    }
  }
`;

export const TRASH_EMAILS = gql`
  query {
    EMAIL_listTrash {
      _id
      to
      body
      subject
      createdAt
      from {
        email
      }
    }
  }
`;
