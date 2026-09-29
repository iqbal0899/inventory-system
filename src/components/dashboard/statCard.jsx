import styles from "../../css/statCard.module.css";

function StatCard({
  title,
  value,
  description,
  icon,
  iconClass = "blue",
}) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statContent}>
        <span className={styles.statTitle}>
          {title}
        </span>

        <strong className={styles.statValue}>
          {value}
        </strong>

        <span className={styles.statDescription}>
          {description}
        </span>
      </div>

      <div
        className={`${styles.statIcon} ${styles[iconClass]}`}
      >
        {icon}
      </div>
    </div>
  );
}

export default StatCard;