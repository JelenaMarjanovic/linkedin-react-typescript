import React, { Component } from 'react';

const initialState = {
  name: 'React',
  message: 'HOC is cool!',
};

type State = Readonly<typeof initialState>;

const messageHoc = (WrappedComponent: any) => {
  class HOC extends Component<{}, State> {
    readonly state: State = initialState;

    render() {
      const { name, message } = this.state;

      return <WrappedComponent name={name} message={message} />;
    }
  }

  return HOC;
};

export default messageHoc;
