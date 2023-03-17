import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation USER_login($login: AuthUser!) {
    USER_login(login: $login) {
      token
    }
  }
`;

export const CREATE_EMAIL = gql`
  mutation EMAIL_create($email: EmailCreate!) {
    EMAIL_create(email: $email)
  }
`;

export const MOVE_TO_TRASH = gql`
  mutation EMAIL_moveTrashEmail($emailId: String!) {
    EMAIL_moveTrashEmail(emailId: $emailId)
  }
`;
