import { Link } from "react-router-dom";
import styles from "./Error.module.css";

const Error = () => {
  return (
    <div className={styles.errorContainer}>
      <h1 className={styles.errorCode}>404</h1>
      <h2 className={styles.errorTitle}>Page Not Found</h2>
      <p className={styles.errorMessage}>
        Oops! The page you're looking for seems to have drifted away like a
        cloud. It might have moved or no longer exists. Let's guide you back to
        clearer skies.
      </p>

      <div className={styles.errorIllustration}>
        {/* Weather-themed animated illustration */}
        <div className={styles.cloudOne}></div>
        <div className={styles.cloudTwo}></div>
        <div className={styles.cloudThree}></div>

        {/* Animated raindrops */}
        <div className={styles.raindrop}></div>
        <div className={styles.raindrop}></div>
        <div className={styles.raindrop}></div>
        <div className={styles.raindrop}></div>
        <div className={styles.raindrop}></div>
        <div className={styles.raindrop}></div>
        <div className={styles.raindrop}></div>

        {/* Animated compass */}
        <div className={styles.compass}>
          <div className={styles.compassNeedle}></div>
        </div>
      </div>

      <Link to="/" className={styles.homeButton}>
        Return to Homepage
      </Link>
    </div>
  );
};

export default Error;
