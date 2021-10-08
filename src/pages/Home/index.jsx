import { Bot, Contributions } from 'features';
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getData from 'redux/actions/data';
import style from './Home.module.css';

const Home = () => {
  const { token, user } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getData({ token, user }));
  }, [token, user]);

  const renderDashboard = () => (
    <>
      {`Olá, ${user}, seja bem vindo ao dashboard.`}
      <Contributions />
    </>
  );

  return (
    <main className={style.main}>
      {!token || !user ? 'Aguardando informações' : renderDashboard()}
      <Bot />
    </main>
  );
};

export default Home;
