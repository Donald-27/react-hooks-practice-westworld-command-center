import React, { useEffect, useState } from "react";
import { Segment } from "semantic-ui-react";
import WestworldMap from "./WestworldMap";
import Headquarters from "./Headquarters";
import "../stylesheets/App.css";

function App() {
  const [hosts, setHosts] = useState([]);
  const [areas, setAreas] = useState([]);
  const [selectedHost, setSelectedHost] = useState(null);
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3001/hosts")
      .then((res) => res.json())
      .then(setHosts);

    fetch("http://localhost:3001/areas")
      .then((res) => res.json())
      .then(setAreas);
  }, []);

  function updateHost(updatedHost) {
    setHosts((prevHosts) =>
      prevHosts.map((h) => (h.id === updatedHost.id ? updatedHost : h))
    );
  }

  return (
    <Segment id="app">
      <WestworldMap
        areas={areas}
        hosts={hosts.filter((h) => h.active)}
        selectedHost={selectedHost}
        setSelectedHost={setSelectedHost}
      />
      <Headquarters
        hosts={hosts}
        selectedHost={selectedHost}
        setSelectedHost={setSelectedHost}
        areas={areas}
        updateHost={updateHost}
        logs={logs}
        setLogs={setLogs}
      />
    </Segment>
  );
}

export default App;