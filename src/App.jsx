import { useUserRole } from "./context/UserRoleContext";
import CurrentTickets from "./components/CurrentTickets";
import Header from "./components/Header";
import Footer from "./components/Footer";

const App = () => {
  const userRole = useUserRole();
  console.log(userRole);

  return (
    <div className="flex items-center justify-center h-max">
      <main className="w-full flex flex-col gap-5">
        <Header />
        <div>
          <CurrentTickets />
        </div>
        <Footer />
      </main>
    </div>
  );
};

export default App;
