import React from 'react';
import './index.scss'
import Tabs from "components/bottom-tabs";
export default class Home extends React.Component {
  render() {
    return (<React.Fragment>
      <div className="home-page">
        HOME
      </div>
      <Tabs />
    </React.Fragment>
    );
  }
}
