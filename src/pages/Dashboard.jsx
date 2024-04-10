import Header from "../components/Header";
import CurrentTickets from "../components/CurrentTickets";
import Footer from "../components/Footer";

const Dashboard = () => {
  return (
    <div className="flex items-center justify-center h-max">
      <div className="w-full flex flex-col justify-between">
        <Header />
        <main className="p-8 w-full h-full">
          <h1 className="font-OpenSans text-matteBlack text-xl sm:text2xl md:text-3xl lg:text-4xl my-4">
            Current Issues
          </h1>
          <CurrentTickets />
        </main>
        <Footer />
      </div>
    </div>
  );
};

export default Dashboard;
