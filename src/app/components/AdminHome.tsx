'use client';
import React, { useState } from 'react';
import styles from '@/app/styles/AdminHome.module.sass';
import { AiOutlineDashboard, AiOutlineEdit } from 'react-icons/ai';
import { VscGraphLine } from 'react-icons/vsc';

type Props = {};

const sidebarItems = [
  {
    id: 1,
    icon: <AiOutlineDashboard fontSize={20} fill="#fff" />,
    name: 'dashboard',
  },
  {
    id: 2,
    icon: <AiOutlineEdit fontSize={20} fill="#fff" />,
    name: 'activities',
  },
];

const dashboardCards = [
  {
    id: 1,
    title: 'dashboard title',
    body: <VscGraphLine fontSize={80} />,
    footer: 'dashboard footer',
  },
  {
    id: 2,
    title: 'dashboard title',
    body: <VscGraphLine fontSize={80} />,
    footer: 'dashboard footer',
  },
  {
    id: 3,
    title: 'dashboard title',
    body: <VscGraphLine fontSize={80} />,
    footer: 'dashboard footer',
  },
  {
    id: 4,
    title: 'dashboard title',
    body: <VscGraphLine fontSize={80} />,
    footer: 'dashboard footer',
  },
];

const activitiesCards = [
  {
    id: 1,
    title: 'activities title',
    body: <VscGraphLine fontSize={80} />,
    footer: 'activities footer',
  },
  {
    id: 2,
    title: 'activities title',
    body: <VscGraphLine fontSize={80} />,
    footer: 'activities footer',
  },
  {
    id: 3,
    title: 'activities title',
    body: <VscGraphLine fontSize={80} />,
    footer: 'activities footer',
  },
  {
    id: 4,
    title: 'activities title',
    body: <VscGraphLine fontSize={80} />,
    footer: 'activities footer',
  },
];

const AdminHome = (props: Props) => {
  const [current, setCurrent] = useState('dashboard');
  const [currentCards, setCurrentCards] = useState(dashboardCards);

  const handleCurrent = (name: string) => {
    setCurrent(name);
    handleCards(name);
  };

  const handleCards = (name: string) => {
    switch (name) {
      case 'dashboard':
        setCurrentCards(dashboardCards);
        break;

      case 'activities':
        setCurrentCards(activitiesCards);
        break;
      default:
        setCurrentCards(dashboardCards);
        break;
    }
  };

  return (
    <section className={styles.section}>
      <aside>
        <ul>
          {sidebarItems.map((item) => (
            <li key={item.id}>
              <button onClick={() => handleCurrent(item.name)}>
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </button>
            </li>
          ))}
        </ul>
      </aside>
      <div className={styles.main}>
        <h1>{current}</h1>
        <div className={styles.cardsContainer}>
          {currentCards.map((card) => (
            <button className={styles.card} key={card.id}>
              <h1 className={styles.cardTitle}>{card.title}</h1>
              <div className={styles.cardBody}>{card.body}</div>
              <div className={styles.cardFooter}>{card.footer}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdminHome;
