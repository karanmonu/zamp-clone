import styles from "./FeatureTabs.module.css";

export default function FeatureTabs() {
  return (
    <div className={styles.tabContainer}>
      <div className={styles.tabsCard}>
        <div className={styles.tabNav}>
          <div className={`${styles.tabItem} ${styles.active}`}>
            <h4 className={styles.tabTitle}>Automate Any financial process</h4>
            <p className={styles.tabDescription}>
              Any financial process. Any financial process, Any financial
              process, Any financial process, Any financial process.
            </p>
          </div>
          <div className={styles.tabItem}>Data Transformation</div>
          <div className={styles.tabItem}>Extract key data</div>
          <div className={styles.tabItem}>Browser control</div>
          <div className={styles.tabItem}>Assistance</div>
        </div>

        <div className={styles.tabContent}>
          {/* Placeholder for right side content */}
        </div>
      </div>
    </div>
  );
}
