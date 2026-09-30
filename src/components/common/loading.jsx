import { LoaderCircle } from "lucide-react";
import PropTypes from "prop-types";

import styles from "../../css/loading.module.css";

const Loading = ({
  size = "medium",
  text = "Memuat...",
  fullPage = false,
  showText = true,
  className = "",
}) => {
  const content = (
    <div
      className={`${styles.container} ${className}`}
    >
      <LoaderCircle
        className={styles.spinner}
        size={
          size === "small"
            ? 18
            : size === "large"
              ? 36
              : 26
        }
        strokeWidth={2}
      />

      {showText && <span>{text}</span>}
    </div>
  );

  if (fullPage) {
    return (
      <div className={styles.fullPage}>
        {content}
      </div>
    );
  }

  return content;
};

Loading.propTypes = {
  size: PropTypes.oneOf([
    "small",
    "medium",
    "large",
  ]),
  text: PropTypes.string,
  fullPage: PropTypes.bool,
  showText: PropTypes.bool,
  className: PropTypes.string,
};

export default Loading;