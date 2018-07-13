/**
 *  自助卡配置后台首页
 * @author huangjiheong
 * @param date 2018-07-13
 */
import React from 'react';
import './index.scss';
import { Link } from "react-router-dom";

export default class Tabs extends React.Component {

    render() {
        let tabs = [
            { title: '首页' },
            { title: '个人中心' },
        ]
        return (
            <div className="bottom-tabs">
                <ul>
                    {
                        tabs.map((item) => {
                            return <li key={item}>{item.title}
                                <Link to="/today"/> 
                            </li>
                        })
                    }
                </ul>

            </div>
        )
    }
}