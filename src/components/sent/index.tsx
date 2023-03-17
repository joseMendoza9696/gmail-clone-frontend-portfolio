import React, { useEffect, useState } from 'react';
// TYPES
import { EmailType } from '../../utils/types';
// COMPONENTS
import EmailSent from './email';
// APOLLO GRAPHQL
import { useLazyQuery } from '@apollo/client';
import { SENT_EMAILS } from '../../graphql/queries';

const SentEmails = () => {
  const [emails, setEmails] = useState<EmailType[]>([]);

  // GRAPHQL FUNCTIONS
  const [getSentEmails] = useLazyQuery(SENT_EMAILS, {
    onCompleted: (data) => {
      setEmails(data.EMAIL_listSent);
    },
  });

  useEffect(() => {
    getSentEmails();
  }, []);

  return (
    <div>
      <h1 className="p-2 font-bold">SENT</h1>
      {emails.map((e, index) => (
        <EmailSent
          _id={e._id}
          from={e.from}
          key={index}
          to={e.to}
          subject={e.subject}
          body={e.body}
          createdAt={e.createdAt}
        />
      ))}
    </div>
  );
};

export default SentEmails;
