import React from "react";
import styles from "./styles.module.css";
import { menuItems } from "@/utils/data";
import Link from "next/link";
import Image from "next/image";

const Header = () => {
  return (
    <section className={styles.bgContainer}>
      <div className={styles.container}>
        <div className={styles.logoContainer}>
          <div className={styles.logoImg}>
            <Image src="/assets/logo.png" alt="logo" width={107} height={32} />
          </div>
          <div className={styles.btnContain}>
            <button className={styles.founderBtn}>For Founders</button>
            <button className={styles.agenciesBtn}>For Agencies</button>
          </div>
        </div>
        <div className={styles.menuContainer}>
          <div className={styles.menuItems}>
            {menuItems.map((items, index) => {
              return (
                <div key={index} className={styles.menuItems}>
                  <p>
                    <Link href={items.link}>{items.title}</Link>
                  </p>
                </div>
              );
            })}
          </div>
          <div className={styles.menuBtn}>
            <button className={styles.loginBtn}>Login</button>
            <button className={styles.signupBtn}>Sign Up</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Header;
