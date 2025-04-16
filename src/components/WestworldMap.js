import React from "react";
import { Segment } from "semantic-ui-react";
import Area from "./Area";

function WestworldMap({ areas, hosts, selectedHost, setSelectedHost }) {
  return (
    <Segment id="map">
      {areas.map((area) => (
        <Area
          key={area.id}
          area={area}
          hosts={hosts.filter(
            (host) => host.area === area.name && host.active
          )}
          selectedHost={selectedHost}
          setSelectedHost={setSelectedHost}
        />
      ))}
    </Segment>
  );
}

export default WestworldMap;
