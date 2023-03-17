import React, { useEffect, useState } from 'react';
// TYPES
import { EmailType } from '../../utils/types';
// APOLLO GRAPHQL
import { INBOX_EMAILS } from '../../graphql/queries';
import { NEW_EMAIL } from '../../graphql/subscriptions';
import { useLazyQuery, useSubscription } from '@apollo/client';
// COMPONENTS
import Email from './email';
import localStorageService from '../../utils/localStorageService';

const InboxEmails = () => {
  const token = localStorageService.getItem('jwt_token');
  const [emails, setEmails] = useState<EmailType[]>([]);

  // GRAPHQL FUNCTIONS
  const [getInboxEmails] = useLazyQuery(INBOX_EMAILS, {
    onCompleted: (data) => {
      setEmails(data.EMAIL_listReceived);
    },
  });

  useSubscription(NEW_EMAIL, {
    variables: {
      token,
    },
    onSubscriptionData: ({ subscriptionData }) => {
      const newEmailList = [...emails];
      newEmailList.splice(0, 0, subscriptionData.data.EMAIL_newReceivedEmail);
      setEmails(newEmailList);
    },
  });

  useEffect(() => {
    getInboxEmails();
  }, []);

  return (
    <div>
      <h1 className="p-2 font-bold">INBOX</h1>
      {emails.map((e, index) => (
        <Email
          key={index}
          from={e.from}
          subject={e.subject}
          body={e.body}
          time={'time'}
        />
      ))}
    </div>
  );
};

export default InboxEmails;
