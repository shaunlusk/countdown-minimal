import * as React from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';

class DemoProps {
  public name!: string;
}

class TestWidget extends React.Component<DemoProps, any> {
  private name: string;

  constructor(props: DemoProps) {
    super(props);
    this.name = props.name;
  }

  render() {
    return <Tabs defaultActiveKey="profile" id="uncontrolled-tab-example">
      <Tab eventKey="home" title="Home">
        Check 1
      </Tab>
      <Tab eventKey="profile" title="Profile">
        Check 2
      </Tab>
    </Tabs>
  }
}

export { TestWidget };
