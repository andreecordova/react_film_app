//React
import React, { useState } from "react";

//Components
import InputSearch from './components/InputSearch';
import Results from './components/Results';
import Modal from './components/Modal';
import EmptyResults from './components/EmptyResults';

// Own Styles
import "./scss/App.scss";

function App() {
  let [query, setQuery] = useState("");
  let [results, setResults] = useState([]);
  let [selected, setSelected] = useState(null);
  let [show, setShow] = useState(false);

  return (
    <div className="app_container">
      <section className="title_container">
        <h1 className="title">React Films and Series App</h1>
      </section>

      <section className="search_box_container">
        <InputSearch query={query} setQuery={setQuery} setResults={setResults} />
      </section>

      { results.length > 0 ? 
        results.length === 1 && results[0] === 'empty' ?
        <EmptyResults /> : 
        <Results results={results} setSelected={setSelected} setShow={setShow} /> : null
      }

      <Modal show={show} selected={selected} setSelected={setSelected} setShow={setShow} />
    </div>
  );
}

export default App;
