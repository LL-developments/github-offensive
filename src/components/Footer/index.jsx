import React from 'react';
import { setShowChat } from 'redux/actions';
import { useSelector, useDispatch } from 'react-redux';

const Footer = () => {
  const { showChat } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  return (
    <footer>
      footer
      <button type="button" onClick={() => dispatch(setShowChat(!showChat))}>
        Conversar com bot
      </button>
    </footer>
  );
};

export default Footer;
