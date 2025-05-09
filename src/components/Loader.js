import styles from "./Loader.module.css";

const Loader = ({ type = "default" }) => {
  if (type === "spinner") {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.spinnerLoader}></div>
      </div>
    );
  }

  if (type === "pulse") {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.pulseLoader}></div>
      </div>
    );
  }

  if (type === "combined") {
    return (
      <div className={styles.loaderContainer}>
        <div className={styles.combinedLoader}>
          <div className={styles.spinnerLoader}></div>
          <h3 className={styles.loader}>Loading</h3>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.loaderContainer}>
      <h3 className={styles.loader}>Loading</h3>
    </div>
  );
};

export default Loader;
