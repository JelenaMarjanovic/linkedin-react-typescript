import React from 'react';
import messageHoc from './Hoc';

const example = (props: any): JSX.Element => (
  <p>
    {props.name}: {props.message}
  </p>
);

const Message = messageHoc(example);

export default Message;
