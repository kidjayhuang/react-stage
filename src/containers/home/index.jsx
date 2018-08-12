import React from "react";
import "./index.scss";
import Tabs from "components/bottom-tabs";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import oneAction from "src/actions/oneAction";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    console.log(111, this.props.actions);
    this.props.actions.updOneTypeCode();
    this.props.actions.updOneInfo();


 
  }
  aa = ()=>{
    console.log(11**7)
  }
  render() {
    let {props} = this
    console.log(111,props)
    return (
      <React.Fragment>
        <div className="home-page">
          <span onClick={this.aa}>HOME</span>
        </div>
        <Tabs />
      </React.Fragment>
    );
  }
}

let mapStateToProps = state => {
  const { one } = state;
  return { one };
};

let mapDispatchToProps = dispatch => {
  return {
    actions: bindActionCreators(oneAction, dispatch) //经过bindActionCreators包装的action，react都认为是异步action
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
