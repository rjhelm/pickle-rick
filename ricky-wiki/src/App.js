import logo from './logo.svg';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useState, useEffect } from 'react';
import './App.css';
import Card from "./components/Card/Card";
import Filter from "./components/Filter/Filter";
import Navbar from "./components/Navbar/Navbar";
import Pagination from "./components/Pagination/Pagination";
import Search from "./components/Search/Search";



function App() {
  let api = `https://rickandmortyapi.com/api/character/?page=1`
  let [fetchedData, updateFetchedData] = useState([]);
  let { info, results } = fetchedData;

  useEffect(() => {
    (async function () {
      let data = await fetch(api).then((res) => res.json());
      updateFetchedData(data);
    })();
  }, [api]);

  return (
    <div className="App">
      <div className="text-center mb-3">
        <div className="container">
          <div className="row">
            Filter Component will be placed here
            <div className="col-log-8 col-md-12">
              <div className="row">
                <Card results={results} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
