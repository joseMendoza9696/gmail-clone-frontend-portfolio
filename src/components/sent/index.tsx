import React, { useEffect, useState } from 'react';
// COMPONENTS
import EmailSent from './email';
// APOLLO GRAPHQL
import { useLazyQuery } from '@apollo/client';
import { SENT_EMAILS } from '../../graphql/queries';

const SentEmails = () => {
  const [emails, setEmails] = useState<any[]>([]);

  // GRAPHQL FUNCTIONS
  const [getSentEmails] = useLazyQuery(SENT_EMAILS, {
    onCompleted: (data) => {
      setEmails(data.EMAIL_listSent);
      console.log(data);
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
          key={index}
          to={e.to}
          subject={e.subject}
          body={e.body}
          time={'time'}
        />
      ))}
    </div>
  );
};

export default SentEmails;
