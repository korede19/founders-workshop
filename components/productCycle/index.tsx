import React from "react";
import styles from "./styles.module.css";
import TransformTwo from "@/svgs/transformTwo";
import { steps } from "@/utils/data";
import LongArrow from "@/svgs/longArrow";

const ProductCycle = () => {
  return (
    <div className={styles.container}>
      <div className={styles.contain}>
        <div className={styles.glowBorder}>
          <div className={styles.innerContainer}>
            <div className={styles.titleBadge}>
              <TransformTwo />
              <h2>The Product Journey</h2>
            </div>
            <div className={styles.stepSvg}>
              <LongArrow />
            </div>
            <div className={styles.stepSvgTwo}>
              <LongArrow />
            </div>
            <div className={styles.contentCard}>
              {steps.map((item, index) => {
                return (
                  <div className={styles.step} key={index}>
                    {item.icon}
                    <p>{item.title}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCycle;
