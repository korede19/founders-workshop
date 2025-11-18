import React from "react";
import styles from "./styles.module.css";
import Feature from "@/svgs/features";
import { featuresData } from "@/utils/data";
import Arrow from "@/svgs/arrow";

const Features = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.headings}>
          <div className={styles.heroBtn}>
            <Feature />
            <p>Features</p>
          </div>
          <h2>Everything You Need to Build Bold Ideas</h2>
        </div>
        <div className={styles.featuresGrid}>
          {featuresData.map((feature, index) => (
            <div className={styles.featureCard} key={index}>
              <div className={styles.badge}>
                <span className={styles.badgeIcon}>{feature.badge.icon}</span>
                <span className={styles.badgeText}>{feature.badge.text}</span>
              </div>
              <h3 className={styles.featureTitle}>{feature.title}</h3>
              <p className={styles.featureDescription}>{feature.description}</p>
              <a href="#" className={styles.ctaLink}>
                {feature.cta}
                <Arrow />
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Features;
