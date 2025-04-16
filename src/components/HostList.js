import React from "react";
import { Card } from "semantic-ui-react";
import Host from "./Host";
import "../stylesheets/Host.css";

function HostList({ hosts, setSelectedHost, selectedHost }) {
  return (
    <Card.Group itemsPerRow={6}>
      {hosts.map((host) => (
        <Host
          key={host.id}
          host={host}
          setSelectedHost={setSelectedHost}
          selectedHost={selectedHost}
        />
      ))}
    </Card.Group>
  );
}

export default HostList;
