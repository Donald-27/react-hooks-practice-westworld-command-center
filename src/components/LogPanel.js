import React, { useState } from "react";
import { Segment, Button } from "semantic-ui-react";
import "../stylesheets/Headquarters.css";

function LogPanel({ logs }) {
  return (
    <Segment className="HQComps" id="logPanel">
      <pre>
        {logs.map((log, i) => (
          <p key={i} className={log.type}>
            {log.msg}
          </p>
        ))}
      </pre>

      {/* The button below can be hooked to a real function later */}
      <Button fluid color="red" content="ACTIVATE ALL" />
    </Segment>
  );
}

export default LogPanel;
