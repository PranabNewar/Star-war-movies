import { Provider } from 'react-redux';
import './App.css';
import Body from './components/Body';
import appStore from './utils/appStore';
import Header from './components/Header';
import { Outlet, createBrowserRouter } from 'react-router-dom';
import Favorite from './components/Favorite';

function App() {
  return (
    // <Provider store={appStore}>
    <div >
      <Header/>
     <Outlet/>



     
    </div>
    // </Provider>




  );
 
}

export default App;
