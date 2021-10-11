import React from 'react';
import Chatbot from 'react-chatbot-kit';
import { useSelector } from 'react-redux';
import ActionProvider from './action';
import MessageParser from './parser';
import config from './config';
import style from './Bot.module.css';

const Bot = () => {
  const { showChat } = useSelector((state) => state.user);
  return (
    <section className={showChat ? style.section : style.hide}>
      <Chatbot
        config={config}
        actionProvider={ActionProvider}
        messageParser={MessageParser}
      />

    </section>
  );
};

export default Bot;
