import React, { useState, useEffect } from "react";
import CoinCounter from "./Mario";
import StateandEvents from "./StateandEvents";

export default function App() {
  // const [show, setShow] = useState(true);

  return (
    <> <CoinCounter/></>
    // <> <StateandEvents/></>
    // <div style={{ padding: 20, fontFamily: "sans-serif" }}>
    //   <h2>useEffect Lifecycle Demo</h2>

    //   <button onClick={() => setShow(!show)}>
    //     {show ? "Unmount Component" : "Mount Component"}
    //   </button>

    //   <hr />

    //   {show && <Demo />}
    // </div>
  );
}

// =======================
// CHILD COMPONENT
// =======================
function Demo() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [seconds, setSeconds] = useState(0);

  // 2.1 MOUNT
  useEffect(() => {
    console.log("Mounted");

    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(() => console.log("Initial data fetched"));

  }, []);

  // 2.2 DEPENDENCY CHANGE
  useEffect(() => {
    if (!query) return;

    console.log("Searching:", query);

    const timeout = setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users?name_like=${query}`)
        .then(res => res.json())
        .then(data => setResults(data));
    }, 500); //debouncing-> deliberate delay added pf 0.5s

    return () => {
      console.log("Cleanup previous search");
      clearTimeout(timeout);
    };

  }, [query]);

  // 2.3 CLEANUP (INTERVAL)
  useEffect(() => {
    const id = setInterval(() => {
      setSeconds(s => s + 1);
    }, 1000);

    return () => {
      console.log("Component Unmounted → clearing interval");
      clearInterval(id);
    };
  }, []);

  return (
    <div>
      {/* SEARCH */}
      <div>
        <h3>Search Users</h3>
        <input
          placeholder="Type name..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <ul>
          {results.map(r => (
            <li key={r.id}>{r.name}</li>
          ))}
        </ul>
      </div>

      <hr />

      {/* TIMER */}
      <div>
        <h3>Timer: {seconds}s</h3>
        <p>Watch console when unmounting 👇</p>
      </div>
    </div>
  );
}