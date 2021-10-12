import React from 'react';
import { useSelector } from 'react-redux';
import {
  BarChart, Bar, ResponsiveContainer, XAxis,
} from 'recharts';
import style from './Contributions.module.css';

const Contributions = () => {
  const {
    issues: { total_count: totalCount, items: issues },
    loading,
  } = useSelector((state) => state.data);
  const data = [
    {
      name: 'Page A',
      uv: 4000,
      pv: 2400,
      amt: 2400,
    },
    {
      name: 'Page B',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: 'Page C',
      uv: 2000,
      pv: 9800,
      amt: 2290,
    },
    {
      name: 'Page D',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: 'Page E',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: 'Page F',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: 'Page G',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  // TODO Fazer requisicao com url de events
  const renderIssues = () => (
    <article className={style.issuesContainer}>
      <section className={style.issues}>
        <h2>{`Voce possui ${totalCount}`}</h2>
        {issues && issues.map((issue) => {
          const { title } = issue;
          return (
            <section className={style.issue}>
              <h3>{title}</h3>
            </section>
          );
        })}
      </section>
      <section className={style.issues}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <Bar dataKey="uv" fill="grey" />
            <Bar dataKey="amt" fill="black" />
            <XAxis dataKey="name" />
          </BarChart>
        </ResponsiveContainer>
      </section>
    </article>
  );

  if (loading) return <div>Carregando...</div>;

  return (
    <section className={style.container}>
      {renderIssues()}
    </section>
  );
};

export default Contributions;
