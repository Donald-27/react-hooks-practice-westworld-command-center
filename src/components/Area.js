import React from "react";
import { Segment, Image } from "semantic-ui-react";
import "../stylesheets/Area.css";

function formatAreaName(name) {
  if (typeof name !== "string") return "";
  return name
    .split("_")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

function Area({ area, hosts }) {
  if (!area) return null;

  const filteredHosts = hosts.filter((host) => host.area === area.name);

  return (
    <Segment className="area" id={area.name}>
      <h3 className="labels">
        {formatAreaName(area.name)} | {filteredHosts.length}{" "}
        {filteredHosts.length === 1 ? "host" : "hosts"}
      </h3>
      {filteredHosts.map((host) => (
        <Image
          key={host.id}
          src={host.imageUrl}
          className="host"
          alt={host.firstName}
        />
      ))}
    </Segment>
  );
}

export default Area;
