import React, { useState, useEffect } from "react";
import "./spells.css";

const Spells = () => {
  // I use state to store the input value (hooks)
  const [spells, setSpells] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredSpells, setFilteredSpells] = useState([]);

  useEffect(() => {
    const fetchSpells = async () => {
      //fetch spells api
      try {
        const response = await fetch("https://hp-api.herokuapp.com/api/spells");
        if (!response.ok) {
          throw new Error("Failed to fetch spells");
        }
        const data = await response.json();
        setSpells(data);
      } catch (error) {
        console.error("Error fetching spells:", error);
      }
    };

    fetchSpells();
  }, []);

  const handleSearch = (e) => {
    //I add handling events
    e.preventDefault();
    const query = searchQuery.toLowerCase().trim();

    if (query === "") {
      alert("Sorry, no spells found."); // it will show alert message if you search a wrong syntax.
      return;
    }

    const filteredResults = spells.filter(
      (spell) =>
        spell.name.toLowerCase().includes(query) ||
        spell.description.toLowerCase().includes(query)
    );

    if (filteredResults.length === 0) {
      alert("No spells found. Search again...");
    } else {
      setFilteredSpells(filteredResults);
    }
  };

  return (
    <div className="spell-sec">
      <div className="container text-center">
        <div className="title-spell">
          <h2>Spells</h2>
          <form onSubmit={handleSearch} className="search-form">
            <input
              className="input-search"
              type="text"
              placeholder="Search spell..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              required
            />
            <button className="search-b" type="submit">
              Search
            </button>
          </form>
        </div>
        <div className="desc-b">
          {filteredSpells.length > 0 ? (
            filteredSpells.map((spell) => (
              <div key={spell.id} className="spell-i">
                <strong className="name-s">{spell.name}</strong>
                <span className="desc-s">{spell.description}</span>
              </div>
            ))
          ) : (
            <p className="def-m">Search Spell!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default Spells;
