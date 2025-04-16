import React from "react";
import { Segment } from "semantic-ui-react";
import HostInfo from "./HostInfo";
import HostList from "./HostList";
import LogPanel from "./LogPanel";
import "../stylesheets/Headquarters.css";

function Headquarters({ hosts, setHosts, selectedHost, setSelectedHost, areas, logs, setLogs }) {
  return (
    <Segment id="headquarters">
      <HostList hosts={hosts} setSelectedHost={setSelectedHost} selectedHost={selectedHost} />
      <HostInfo
        host={selectedHost}
        areas={areas}
        hosts={hosts}
        setHosts={setHosts}
        setLogs={setLogs}
      />
      <LogPanel logs={logs} setLogs={setLogs} hosts={hosts} setHosts={setHosts} />
    </Segment>
  );
}

export default Headquarters;
