/**
 *  自助卡配置后台首页
 * @author huangjiheong
 * @param date 2018-07-13
 */
import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";
import { Route } from "react-router-dom";

export default class Tabs extends React.Component {
    static displayName = 'aa'
    render() {
        let tabs = [
            { title: '首页', path: '/home' },
            { title: '个人中心', path: '/personal' },
        ]

        return (
            <div className="bottom-tabs">
                <ul>
                    {
                        tabs.map((item, index) => {
                            return <li key={item.title}>
                                <Route exact path={item.path} children={({ match, ...rest }) => {
                                    return <Link to={item.path} className={match&&'active'}>
                                        {item.title}
                                    </Link>
                                }} />

                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
console.log(Tabs.displayName)
