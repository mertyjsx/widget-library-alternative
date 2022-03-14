import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import Home from "./app";
import Layout from "./components/Layout/Layout";
import { Provider, useDispatch } from "react-redux";
import {setConfigAction} from "./redux/configReducer"

import { store } from "./redux/store";



const App = ({ config }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setConfigAction(config));
  }, [config]);

  return <Layout />;
};

export default App;
