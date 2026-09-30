import Loading from "../common/loading";

import styles from "../../css/statCard.module.css";

function StatCard({
  title,
  value,
  description,
  icon,
  iconClass = "blue",
  loading = false,
}) {
  return (
    <div className={styles.statCard}>
      <div className={styles.statContent}>
        {loading ? (
          <Loading
            size="small"
            showText={false}
          />
        ) : (
          <>
            <span className={styles.statTitle}>
              {title}
            </span>

            <strong className={styles.statValue}>
              {value}
            </strong>

            <span className={styles.statDescription}>
              {description}
            </span>
          </>
        )}
      </div>

      <div
        className={`${styles.statIcon} ${
          styles[iconClass] || styles.blue
        }`}
      >
        {icon}
      </div>
    </div>
  );
}

export default StatCard;