/**
 *  自助卡配置后台首页
 * @author huangjiheong
 * @param date 2018-07-13
 */

import React from 'react';
import { Route } from "react-router-dom";
import Home from "./home";
import Personal from "./personal";

export default class Containers extends React.Component {
    render() {
        return (
            <React.Fragment>
                <Route exact path={`/home`} render={props => { return (<Home {...props} />) }} />
                <Route exact path={`/`} render={props => { return (<Home {...props} />) }} />
                <Route path={`/personal`} render={props => { return (<Personal {...props} />) }} />
            </React.Fragment >

        )
    }
}