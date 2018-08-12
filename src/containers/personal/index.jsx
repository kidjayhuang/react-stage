import React from 'react';
import './index.scss'
import Tabs from "components/bottom-tabs";

export default class Personal extends React.Component {
  render() {

    return (<React.Fragment>
      <div className="home-page">
        PERSONAL
      </div>
      <Tabs />
    </React.Fragment>
    );
  }
}
