import React, { useRef } from 'react';
// APOLLO GRAPHQL
import { useMutation } from '@apollo/client';
import { CREATE_EMAIL } from '../../graphql/mutations';

const Compose = ({
  isVisible,
  onClose,
}: {
  isVisible: boolean;
  onClose: any;
}) => {
  if (!isVisible) return null;
  const form = useRef(null);

  // GRAPHQL FUNCTIONS
  const [createEmail] = useMutation(CREATE_EMAIL, {
    onCompleted: (data) => {
      console.log(data);
      onClose(false);
    },
  });

  // FUNCTIONS
  const sendEmail = () => {
    if (form.current !== null) {
      const formData = new FormData(form.current);
      const email = {
        to: formData.get('to'),
        subject: formData.get('subject'),
        body: formData.get('body'),
      };
      console.log(email);
      createEmail({
        variables: {
          email,
        },
      });
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm  flex justify-center items-center">
      <div className="w-[600px] flex flex-col">
        <button
          onClick={() => onClose(false)}
          className="text-white text-xl place-self-end"
        >
          X
        </button>
        <div className="bg-white p-2 rounded">
          <form ref={form}>
            <div>
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="to"
                name="to"
                type="email"
                autoComplete="off"
                placeholder="To:"
                required
              />
            </div>
            <div>
              <input
                className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                id="subject"
                name="subject"
                type="text"
                autoComplete="off"
                placeholder="Subject:"
                required
              />
            </div>
            <div>
              <textarea
                id="body"
                name="body"
                className="p-2.5 w-full text-black rounded-lg border "
                placeholder="Your email here ..."
              ></textarea>
            </div>
            <div>
              <button
                type="button"
                onClick={() => onClose(false)}
                className="group relative w-full flex justify-center text-black hover:bg-gray focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2"
              >
                cancel
              </button>
              <button
                type="button"
                onClick={sendEmail}
                className="group relative w-full flex justify-center text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
              >
                Send
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Compose;
