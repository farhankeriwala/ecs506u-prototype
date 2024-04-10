import SyncLoader from "react-spinners/SyncLoader";

const LoadingSpinner = () => {
  return (
    <main className="flex items-center justify-center h-screen">
      <SyncLoader
        color={"#F8F8FF"}
        loading={true}
        size={10}
        aria-label="Loading Spinner"
        data-testid="loader"
      />
    </main>
  );
};

export default LoadingSpinner;
