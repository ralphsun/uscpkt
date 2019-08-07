import React from 'react';
import './styles/index.scss';
import App from './App';
import ReactGA from 'react-ga';
import { hydrate, render } from "react-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

ReactGA.initialize('UA-135637925-4');
ReactGA.pageview(window.location.pathname + window.location.search);

const rootElement = document.getElementById("root");
if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement);
} else {
  render(<App />, rootElement);
}