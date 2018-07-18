import React from 'react';
import './index.scss'
import Tabs from "components/bottom-tabs";
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import oneAction from 'src/actions/oneAction'

class Home extends React.Component {
  constructor() {
    super()
    this.state = {}
  }

  componentWillMount() {
    console.log(111, this.props.actions)
    this.props.actions.updOneTypeCode()
    this.props.actions.updOneInfo()
  }
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

let mapStateToProps = state => {
  const { one } = state
  return { one };
};

let mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(oneAction, dispatch) //经过bindActionCreators包装的action，react都认为是异步action
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home)