import React, { useState } from "react";

import { useHistory } from "react-router-dom";

const SearchBar = () => {
  const history = useHistory();
  const [search, setSearch] = useState("");
  const handleKeyDown = e => {
    if (e.keyCode === 13) {
      const path = search ? `/vehicle?search=${search}` : "/vehicle";
      history.push(path);
    }
  };

  return (
    <div className="searchbar">
      <input
        onChange={e => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="Pesquise por um veículo"
      />
      <button onClick={() => history.push("/vehicle/create")}>Cadastrar</button>
    </div>
  );
};

export default SearchBar;
