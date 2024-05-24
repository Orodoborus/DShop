import React from 'react';
import ReactDOM from 'react-dom/client';
import { 
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider
} from 'react-router-dom';
import App from './App.jsx';
import HomeScreen from './screens/HomeScreen.jsx';
import ProductScreen from './screens/ProductScreen.jsx';
import './assets/styles/index.css';
import './assets/styles/bootstrap.custom.css'

const Router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={ <App /> }>
      <Route index={ true } path='/' element={ <HomeScreen /> } />
      <Route index={ true } path='/product/:id' element={ <ProductScreen /> } />
    </Route>
  )
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={Router} />
  </React.StrictMode>,
)
