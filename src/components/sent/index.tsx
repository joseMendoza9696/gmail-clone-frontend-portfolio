import React, { useEffect, useState, useContext } from 'react';
// TYPES
import { EmailType } from '../../utils/types';
// COMPONENTS
import EmailSent from './email';
import AppContext from '../../context/AppContext';
import SingleEmail from '../shared/email';
// APOLLO GRAPHQL
import { useLazyQuery } from '@apollo/client';
import { SENT_EMAILS } from '../../graphql/queries';

const SentEmails = () => {
  const [emails, setEmails] = useState<EmailType[]>([]);
  // CONTEXT
  const appContext: any = useContext(AppContext);
  const showEmail = appContext.state.open;

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
      {!showEmail ? (
        emails.map((e, index) => (
          <EmailSent
            _id={e._id}
            from={e.from}
            key={index}
            to={e.to}
            subject={e.subject}
            body={e.body}
            createdAt={e.createdAt}
          />
        ))
      ) : (
        <SingleEmail />
      )}
    </div>
  );
};

export default SentEmails;
