import { RouterProvider, createBrowserRouter  } from 'react-router-dom';
import './App.css';
import About from './components/About/About';
import Portfolio from './components/Portfolio/Portfolio';
import Contact from './components/Contact/Contact';
import LayOut from './components/LayOut/LayOut';
import Home from './components/Home/Home';
 
function App() {


 

  const routes = createBrowserRouter([
    {path: '', element: [<LayOut />] , children: [
      {index:true , element: <Home /> },
      {path: 'about' , element: <About /> },
      {path: 'portfolio' , element: <Portfolio />},
      {path: 'contact' , element: <Contact />},
    ]}
    

  ]);

  return (<>
  <RouterProvider router={routes} ></RouterProvider>
  </>)
    
}

export default App;
