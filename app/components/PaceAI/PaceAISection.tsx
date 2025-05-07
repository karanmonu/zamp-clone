"use client";
import styles from "./PaceAI.module.css";
import PaceAIHeading from "./PaceAIHeading";
import FeatureTabs from "./FeatureTabs";

export default function PaceAISection() {
  return (
    <section className={styles.paceAISection}>
      <div className={styles.container}>
        <div className={styles.headingWrapper}>
          <span className={styles.newBadge}>NEW</span>
          <PaceAIHeading />
        </div>
        <FeatureTabs />
      </div>
    </section>
  );
}
