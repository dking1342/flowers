'use client';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import styles from '../../styles/navbar/Navbar.module.sass';
import { GiFlowerTwirl } from 'react-icons/gi';
import { RxHamburgerMenu } from 'react-icons/rx';
import { AiOutlineClose } from 'react-icons/ai';
import { Navlinks } from '../../types/navbar';
import { RequestCookie } from 'next/dist/compiled/@edge-runtime/cookies';
import { navlinks, adminNavlinks } from '../../data/navbar';
import { MdOutlineLogout } from 'react-icons/md';
import { COOKIE_NAME } from '../../constants';
import { prefix } from '../../utils/prefix';

type Props = {
  cookie: RequestCookie[] | undefined;
};

const Navbar = ({ cookie }: Props) => {
  const [isMobileBtnPressed, setIsMobileBtnPressed] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [hasCookies, setHasCookies] = useState(false);
  const [nav, setNav] = useState<Navlinks[]>([]);

  const handleMobileBtnToggle = () => {
    setIsMobileBtnPressed(!isMobileBtnPressed);
    setIsMobileMenuOpen(!isMobileMenuOpen);

    if (isMobileBtnPressed) {
      document.querySelector('html')!.style.overflowY = '';
    } else {
      document.querySelector('html')!.style.overflowY = 'hidden';
    }
  };

  const handleCloseMenu = () => {
    setIsMobileBtnPressed(false);
    setIsMobileMenuOpen(false);
    document.querySelector('html')!.style.overflowY = '';
  };

  const logoutUser = async () => {
    try {
      const url = prefix();
      await fetch(`${url.url.API_URL}/logout/api`);
      location.reload();
    } catch (error) {
      location.reload();
    }
  };

  useEffect(() => {
    if (cookie) {
      cookie.forEach((c) => {
        if (c.name === COOKIE_NAME) {
          setHasCookies(true);
          setNav(adminNavlinks);
        } else {
          setHasCookies(false);
          setNav(navlinks);
        }
      });
    }
    if (!cookie) {
      setHasCookies(false);
      setNav(navlinks);
    }
    if (!cookie!.length) {
      setHasCookies(false);
      setNav(navlinks);
    }
  }, [cookie]);

  return (
    <nav className={styles.nav}>
      <div className={styles.row}>
        <Link className={styles.navIcon} href={'/'} onClick={handleCloseMenu}>
          <GiFlowerTwirl fill="#fff" height={100} width={100} />
        </Link>
        <div className={styles.navLinks}>
          <ul className={styles.ul}>
            {nav.map(({ id, name, href }) => (
              <li key={id} className={styles.li}>
                <Link href={href} className={styles.navLink}>
                  {name}
                </Link>
              </li>
            ))}
            {hasCookies && (
              <li>
                <button className={styles.btn} onClick={logoutUser}>
                  <MdOutlineLogout fill="#fff" fontSize={16} />
                </button>
              </li>
            )}
          </ul>
        </div>
        <button
          className={styles.mobileToggleBtn}
          onClick={() => handleMobileBtnToggle()}
        >
          {isMobileBtnPressed ? (
            <AiOutlineClose fontSize={25} fontStyle={'bold'} color="#fff" />
          ) : (
            <RxHamburgerMenu fontSize={25} fontStyle={'bold'} color="#fff" />
          )}
        </button>
      </div>
      <div
        className={`${styles.row} ${styles.mobileMenu} ${
          isMobileMenuOpen ? styles.mobileMenuOpen : styles.mobileMenuClose
        }`}
      >
        <ul className={styles.ul}>
          {nav.map(({ id, name, href }) => (
            <li key={id} className={styles.li}>
              <Link
                href={href}
                className={styles.navLink}
                onClick={handleCloseMenu}
              >
                {name}
              </Link>
            </li>
          ))}
          {hasCookies && (
            <li>
              <button className={styles.btn} onClick={logoutUser}>
                <MdOutlineLogout fill="#fff" fontSize={16} />
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
