import React from "react";
import { Card, Image } from "semantic-ui-react";
import "../stylesheets/Host.css";

function Host({ host, setSelectedHost, selectedHost }) {
  return (
    <Card
      className={selectedHost?.id === host.id ? "selected" : ""}
      onClick={() => setSelectedHost(host)}
    >
      <Image src={host.imageUrl} wrapped ui={false} />
      <Card.Content>
        <Card.Header>{host.firstName}</Card.Header>
      </Card.Content>
    </Card>
  );
}

export default Host;
