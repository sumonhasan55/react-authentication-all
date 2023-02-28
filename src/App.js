
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css';
import Login from './components/Login';


import RegisterReactBoostrap from './components/RegisterReactBoostrap';
import Main from './layout/Main';

import FaceLog from './components/FaceLog';



const router = createBrowserRouter([
  {
    path: '/',
    element: <Main></Main>,
    children: [
      {
        path: '/',
        element: <RegisterReactBoostrap></RegisterReactBoostrap>
      },
      {
        path: '/register',
        element: <RegisterReactBoostrap></RegisterReactBoostrap>
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/facelog',
        element: <FaceLog></FaceLog>
      }

    ]
  },

])

function App() {
  return (
    <div className="form">

      <RouterProvider
        router={router}
      >

      </RouterProvider>



    </div>
  );
}

export default App;
