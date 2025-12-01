
import { RouterProvider } from "react-router-dom";
import './App.css'
import appRoutes from './core/routes/AppRoutes';

const App = () => {

  return (
    <main>
      <RouterProvider router={appRoutes} />
    </main>
  );
};

export default App;
