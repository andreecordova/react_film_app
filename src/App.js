//React
import React, { useState } from "react";

//Components
import InputSearch from './components/InputSearch';
import Results from './components/Results';
import Modal from './components/Modal';

//Variables
import api from "./variables/api";

// Own Styles
import "./scss/App.scss";

function App() {
  let [query, setQuery] = useState("");
  let [results, setResults] = useState([]);
  let [selected, setSelected] = useState(null);
  let [show, setShow] = useState(false);

  const change = (e) => {
    const value = e.target.value; 
    setQuery(value);
  };

  const search = (e) => {
    if (e.key === "Enter") {
      fetch(`${api.base}?apikey=${api.key}&s=${query}`)
      .then((response) => response.json())
      .then((response) => {
        let real_data = response.Search;
        
        setResults(real_data);
        setQuery("");
      });
    }
  };

  const open = (id) => {
    fetch(`${api.base}?apikey=${api.key}&i=${id}`)
    .then((response) => response.json())
    .then((response) => {
      setSelected(response);
      setShow(true);
    });

    setShow(true);
  };

  const close = () => {
    setSelected(null)
    setShow(false);
  };

  return (
    <div className="app_container">
      <section className="title_container">
        <h1 className="title">React Films and Series App</h1>
      </section>

      <section className="search_box_container">
        <InputSearch search={search} change={change} />
      </section>

      { results.length > 0 ? <Results results={results} open={open} /> : null }

      { show === true ? <Modal show={show} selected={selected} close={close} /> : null }
    </div>
  );
}

export default App;
