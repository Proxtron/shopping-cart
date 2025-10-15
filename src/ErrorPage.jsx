import { useRouteError, Link, useNavigate } from "react-router";
import styles from "./ErrorPage.module.css";

const ErrorPage = () => {
  const error = useRouteError();
  const navigate = useNavigate();

  // Determine error message and status
  const getErrorInfo = () => {
    if (error?.status === 404) {
      return {
        status: 404,
        title: "Page Not Found",
        message: "The page you're looking for doesn't exist.",
        suggestion: "Check the URL or go back to our homepage.",
      };
    } else if (error?.status >= 500) {
      return {
        status: error.status || 500,
        title: "Server Error",
        message: "Something went wrong on our end.",
        suggestion:
          "Please try again later or contact support if the problem persists.",
      };
    } else {
      return {
        status: error?.status || "Unknown",
        title: "Something Went Wrong",
        message: error?.message || "An unexpected error occurred.",
        suggestion:
          "Please try refreshing the page or go back to our homepage.",
      };
    }
  };

  const errorInfo = getErrorInfo();

  return (
    <div className={styles.errorPage}>
      <div className={styles.errorContainer}>
        <div className={styles.errorContent}>
          <h1 className={styles.errorStatus}>{errorInfo.status}</h1>
          <h2 className={styles.errorTitle}>{errorInfo.title}</h2>
          <p className={styles.errorMessage}>{errorInfo.message}</p>
          <p className={styles.errorSuggestion}>{errorInfo.suggestion}</p>

          <div className={styles.errorActions}>
            <Link to="#" onClick={() => navigate(-1)} className={styles.primaryButton}>
              Go Back
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
