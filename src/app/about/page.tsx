import Image from 'next/image';
import React from 'react';
import styles from '../styles/About.module.sass';
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiOutlineTwitter,
  AiOutlineYoutube,
} from 'react-icons/ai';
import { TfiPinterest } from 'react-icons/tfi';

type Props = {};

const page = (props: Props) => {
  return (
    <section className={styles.section}>
      <div className={styles.heroContainer}>
        <div className={styles.titleContainer}>
          <h1>about us</h1>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={'/about-hero.png'}
            alt="hero container"
            fill
            priority
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <h1>get to know us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          labore maxime ratione officia repellendus autem, debitis facilis ea
          exercitationem, dolorum quibusdam. Mollitia quas magnam ea dolor quis
          quasi placeat esse!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          labore maxime ratione officia repellendus autem, debitis facilis ea
          exercitationem, dolorum quibusdam. Mollitia quas magnam ea dolor quis
          quasi placeat esse!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          labore maxime ratione officia repellendus autem, debitis facilis ea
          exercitationem, dolorum quibusdam. Mollitia quas magnam ea dolor quis
          quasi placeat esse!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          labore maxime ratione officia repellendus autem, debitis facilis ea
          exercitationem, dolorum quibusdam. Mollitia quas magnam ea dolor quis
          quasi placeat esse!
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias
          labore maxime ratione officia repellendus autem, debitis facilis ea
          exercitationem, dolorum quibusdam. Mollitia quas magnam ea dolor quis
          quasi placeat esse!
        </p>
      </div>
      <div className={styles.operationsContainer}>
        <div className={styles.innerContainer}>
          <div className={styles.contactDetailsContainer}>
            <h1>hours</h1>
            <ul>
              <li>Monday: 9am - 5pm</li>
              <li>Tuesday: 9am - 5pm</li>
              <li>Wednesday: 9am - 5pm</li>
              <li>Thursday: 9am - 5pm</li>
              <li>Friday: 9am - 5pm</li>
              <li>Saturday: Closed</li>
              <li>Sunday: Closed</li>
            </ul>
          </div>
          <div className={styles.contactDetailsContainer}>
            <h1>contacts</h1>
            <ul>
              <li>Phone: (555) 555-5555</li>
              <li>Email: email@example.com</li>
              <li>Address: 123 Main Street, Anytown USA</li>
            </ul>
          </div>
          <div className={styles.contactDetailsContainer}>
            <h1>socials</h1>
            <ul>
              <li>
                <AiFillFacebook fontSize={25} fill="#fff" />
              </li>
              <li>
                <AiOutlineInstagram fontSize={25} fill="#fff" />
              </li>
              <li>
                <AiOutlineTwitter fontSize={25} fill="#fff" />
              </li>
              <li>
                <TfiPinterest fontSize={25} fill="#fff" />
              </li>
              <li>
                <AiOutlineYoutube fontSize={25} fill="#fff" />
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default page;
