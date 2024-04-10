import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleLoginClick = () => {
    navigate('/login');
  };
  return (
    <div className="flex items-center justify-center h-screen">
      <main className="border-2 border-royalPurple p-12 rounded-xl flex flex-col items-center justify-center shadow-xl">
        <p className="font-Montserrat text-xl sm:text-2xl md:text-3xl lg:text-4xl text-royalPurple my-2">
          Welcome to QMUL Feedback & Issues Hub
        </p>
        <p className="font-Poppins text-md sm:text-lg md:text-xl lg:text-2xl text-matteBlack my-2">
          The online platform for Feedback & Issues
        </p>
        <button onClick={handleLoginClick} className="md:w-[400px] w-full p-2 my-2 border-2 border-royalPurple hover:bg-royalPurple text-matteBlack text-md sm:text-lg md:text-xl lg:text-2xl hover:text-coolWhite transition-all duration-300 rounded-xl">
          Login
        </button>
      </main>
    </div>
  );
};

export default HomePage;
