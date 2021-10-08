import React from 'react';
import Chatbot from 'react-chatbot-kit';
import ActionProvider from './action';
import MessageParser from './parser';
import config from './config';

const style = {
  position: 'absolute',
  bottom: 0,
  background: '#252525',
  right: 0,
  height: '100%',
  padding: '25px',
};

const Bot = () => (
  <section style={style}>
    <Chatbot
      config={config}
      actionProvider={ActionProvider}
      messageParser={MessageParser}
    />
  </section>
);

export default Bot;
