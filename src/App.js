import React,{useEffect} from "react";
import { BrowserRouter as Router} from "react-router-dom";
import createSagaMiddleWare from "redux-saga";
import { applyMiddleware, createStore } from "redux";
import { Provider } from "react-redux";
import reducers from "./store/reducers";
import rootSaga from "./store/sagas";
import { composeWithDevTools } from "redux-devtools-extension";
import "./assets/css/style.css";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Cookies from 'js-cookie';
import setAuthToken from './utils/apiHelpers';
import All_PAGES from "./pages/allpages";
import axios from "axios";
function App() {
  // axios.defaults.withCredentials=true;
  const sagaMiddleware = createSagaMiddleWare();
  const store = createStore(
    reducers,
    composeWithDevTools(applyMiddleware(sagaMiddleware))
  );
  sagaMiddleware.run(rootSaga);
  const token=Cookies.get('token');
  console.log(token,"token");
  axios.interceptors.request.use(
    config=>{
      config.headers.authorization=`Token ${token}`;
      return config;
    },
    error=>{
       return Promise.reject(error);

    }
  );
  
  return (
    <Provider store={store}>
      <ToastContainer />
      <Router>
        <div className="App">
        <All_PAGES />
        

        </div>
      </Router>
    </Provider>
  );
}

export default App;
