import { useState } from "react";
import "./App.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  const [error, setError] = useState(false);
  // const handleButton = () => {
  //   setError(!error);
  // };
  //handle Change :
  const handleChange = e => {
    e.preventDefault();
  };
  return (
    <div>
      <ToastContainer />
      <h4>Hi</h4>
      <button
        className={error ? "btn btn-danger" : "btn btn-primary"}
        onClick={() => {
          setError(!error);
        }}
      >
        Click To Change Button Color
      </button>
      <p
        className="text-light mt-4 p-3"
        style={{ backgroundColor: error ? "Red" : "Blue" }}
      >
        {error ? "Something went wrong !!" : "Everything Is Cool !!"}
      </p>
      
    </div>
  );
}

export default App;
