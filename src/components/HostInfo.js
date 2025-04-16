import React from "react";
import {
  Radio,
  Icon,
  Card,
  Grid,
  Image,
  Dropdown,
  Divider,
} from "semantic-ui-react";
import "../stylesheets/HostInfo.css";

function HostInfo({ host, areas, hosts, setHosts, setLogs }) {
  if (!host) return <p>Select a host to see info</p>;

  const genderIcon = host.gender === "Male" ? "man" : "woman";

  function handleOptionChange(e, { value }) {
    const updatedHosts = hosts.map((h) =>
      h.id === host.id ? { ...h, area: value } : h
    );
    setHosts(updatedHosts);
    setLogs((prevLogs) => [
      { type: "notify", msg: `${host.firstName} set in area ${value}` },
      ...prevLogs,
    ]);
  }

  function handleRadioChange() {
    const updatedHosts = hosts.map((h) =>
      h.id === host.id ? { ...h, active: !h.active } : h
    );
    setHosts(updatedHosts);
    const action = host.active ? "Decommissioned" : "Activated";
    setLogs((prevLogs) => [
      { type: host.active ? "warn" : "notify", msg: `${action} ${host.firstName}` },
      ...prevLogs,
    ]);
  }

  const options = areas.map((area) => ({
    key: area.name,
    text: area.name,
    value: area.name,
  }));

  return (
    <Grid>
      <Grid.Column width={6}>
        <Image src={host.imageUrl} floated="left" size="small" className="hostImg" />
      </Grid.Column>
      <Grid.Column width={10}>
        <Card>
          <Card.Content>
            <Card.Header>
              {host.firstName} | <Icon name={genderIcon} />
            </Card.Header>
            <Card.Meta>
              <Radio
                onChange={handleRadioChange}
                label={host.active ? "Active" : "Decommissioned"}
                checked={host.active}
                slider
              />
            </Card.Meta>
            <Divider />
            Current Area:
            <Dropdown
              onChange={handleOptionChange}
              value={host.area}
              options={options}
              selection
            />
          </Card.Content>
        </Card>
      </Grid.Column>
    </Grid>
  );
}

export default HostInfo;
