/*
Assigned to: Farhan 
Tasks: Create the Login Form as in the design.
*/

// Importing login form component
import LoginForm from "../components/LoginForm";

// Main function component
const LoginPage = () => {
  return (
    <div className="flex items-center justify-center h-screen px-4 py-8">
      <main className="w-full flex flex-col items-center gap-10">
        <h1 className="font-Nunito text-3xl md:text-4xl lg:text-5xl text-royalPurple">
          QMUL Feedback & Issues Hub
        </h1>
        <LoginForm />
      </main>
    </div>
  );
};

export default LoginPage;
