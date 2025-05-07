import styles from "./PaceAI.module.css";

export default function PaceAIHeading() {
  return (
    <h2 className={styles.heading}>
      <span className={styles.meetWrapper}>
        <span className={styles.newBadge}>NEW</span>
        Meet
      </span>{" "}
      <span className={styles.bold}>Pace AI</span>, the most advanced finance
      agent
    </h2>
  );
}
