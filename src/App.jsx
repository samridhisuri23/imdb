import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Main from './container/Main';
import WatchList from './container/WatchList';
import Layout from './container/Layout';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Main />,
      },
      {
        path: "/watchlist",
        element: <WatchList />,
      },
    ],
  },
]);

function App() {
  return (
    <>
      < RouterProvider router={router} />;
    </>
  );
}

export default App;
