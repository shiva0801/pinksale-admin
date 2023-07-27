import { RouterProvider } from "react-router-dom";
import "./App.css";

import { router } from "./RouterProvider/Index";

function App() {
  return (
    <>
      <RouterProvider
        router={router}
        // fallbackElement={<BigSpinner />}
      />
    </>
  );
}
// beta mode test
export default App;
