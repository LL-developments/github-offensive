import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { welcomeMessage } from 'utils';
import { setToken, setUsername } from 'redux/actions';
import style from './Header.module.css';

const Header = () => {
  const { token, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const [tokenState, setTokenState] = useState('' || token);
  const [userState, setUserState] = useState('' || user);

  const handleChange = ({ target: { name, value } }) => {
    const validateInput = value !== '' ? value : null;
    if (name === 'user') setUserState(validateInput);
    if (name === 'token') setTokenState(validateInput);
  };

  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      dispatch(setToken(tokenState));
      dispatch(setUsername(userState));
    }, 3000);

    return () => clearTimeout(delayDebounceFn);
  }, [userState, tokenState]);

  const renderInput = () => (
    <article className={style.articleInput}>
      <input
        name="user"
        type="text"
        value={userState}
        onChange={handleChange}
        placeholder="usuário"
      />
      <input
        name="token"
        type="text"
        value={tokenState}
        onChange={handleChange}
        placeholder="token"
      />

      <span style={(!tokenState || !userState) ? { opacity: 1 } : { opacity: 0 }}>
        Por gentileza, insira o token para acesso a API do Github e seu
        usuário
      </span>

    </article>
  );

  return (
    <header className={style.header}>
      <h1>Github Offensive</h1>
      <p>{`${welcomeMessage()}, seja bem vindo ${user || 'usuário'}`}</p>
      {renderInput()}
    </header>
  );
};

export default Header;
