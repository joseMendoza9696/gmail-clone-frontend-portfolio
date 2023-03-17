export interface EmailType {
  subject: string;
  body: string;
  createdAt: string;
  from: { email: string };
  to: string;
  read?: boolean;
  _id: string;
}
