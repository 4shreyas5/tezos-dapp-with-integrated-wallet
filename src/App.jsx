import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="container pt-10 mx-auto">
        <div className="flex justify-center">
          <h1 className="text-6xl font-extrabold text-transparent bg-clip-text text-black">
            Welcome Developer !!!
          </h1>
        </div>
      </div>
    </div>
  );
};

export default App;
