import React, { useState, useEffect } from 'react';
// COMPONENTS
import EmailTrash from './email';
// APOLLO GRAPHQL
import { useLazyQuery } from '@apollo/client';
import { TRASH_EMAILS } from '../../graphql/queries';

const TrashComponent = () => {
  const [emails, setEmails] = useState<any[]>([]);

  // GRAPHQL FUNCTIONS
  const [getTrashEmails] = useLazyQuery(TRASH_EMAILS, {
    onCompleted: (data) => {
      setEmails(data.EMAIL_listTrash);
    },
  });

  useEffect(() => {
    getTrashEmails();
  }, []);

  return (
    <div>
      <h1 className="p-2 font-bold">TRASH</h1>
      {emails.map((e, index) => (
        <EmailTrash
          _id={e._id}
          to={e.to}
          key={index}
          from={e.from}
          subject={e.subject}
          body={e.body}
          read={e.read}
          createdAt={e.createdAt}
        />
      ))}
    </div>
  );
};

export default TrashComponent;
