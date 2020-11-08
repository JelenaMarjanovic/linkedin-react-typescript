import React from 'react';

const Message = (props: {message: string}): JSX.Element => {
  return (
    <p>{props.message}</p>
  );
}

export default Message;