/**
 *  自助卡配置后台首页
 * @author huangjiheong
 * @param date 2018-07-13
 */

import React from 'react';
import { Route } from "react-router-dom";
import Home from "./home";
import Personal from "./personal";
import PropTypes from 'prop-types'

export default class Containers extends React.Component {
    getChildContext() {
        return { color: 'aaa' };
    }
    static childContextTypes = {
        color: PropTypes.string
    };
    render() {
        return (
            <React.Fragment>
                <Route exact path={`/`} render={props => { return (<Home {...props} />) }} />
                <Route exact path={`/home`} render={props => { return (<Home {...props} />) }} />
                <Route path={`/personal`} render={props => { return (<Personal {...props} />) }} />
            </React.Fragment >
        )

        // Route 渲染组件的三种方式
        // component 最常用，只有匹配 location 才会加载 component 对应的 React组件
        // render 路由匹配函数就会调用
        // children 不管路由是否匹配都会渲染对应组件
    }
}