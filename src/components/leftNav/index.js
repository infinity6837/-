/**
 * 左侧导航的组件
 */

import React, { Component } from 'react'
import menuList from '../../config/menuConfig'
import { Link, withRouter } from 'react-router-dom'
import './index.css'



import logo from '../../assets/images/logo.gif'
import { Menu, Icon } from 'antd';


const { SubMenu } = Menu;

class LeftNav extends Component {
    /**
     * 
     * 根据menu的数组生成对应的标签数组
     */
    getMenuNodes = (menuList) => {
        // 得到当前请求的路由路径
        const path = this.props.location.pathname

        return menuList.reduce((pre, item) => {

            // 如果当前用户有item对应的权限, 才需要显示对应的菜单项
            // if (this.hasAuth(item)) {
            // 向pre添加<Menu.Item>
            if (!item.children) {
                pre.push((
                    <Menu.Item key={item.key}>
                        <Link to={item.key}>
                            <Icon type={item.icon} />
                            <span>{item.title}</span>
                        </Link>
                    </Menu.Item>
                ))
            } else {

                // 查找一个与当前请求路径匹配的子Item
                const cItem = item.children.find(cItem => path.indexOf(cItem.key) === 0)
                // 如果存在, 说明当前item的子列表需要打开
                if (cItem) {
                    this.openKey = item.key
                }


                // 向pre添加<SubMenu>
                pre.push((
                    <SubMenu
                        key={item.key}
                        title={
                            <span>
                                <Icon type={item.icon} />
                                <span>{item.title}</span>
                            </span>
                        }
                    >
                        {this.getMenuNodes(item.children)}
                    </SubMenu>
                ))
            }
            // }

            return pre
        }, [])
    }
    /*
    在第一次render()之前执行一次
    为第一个render()准备数据(必须同步的)
    */
    componentWillMount() {
        this.menuNodes = this.getMenuNodes(menuList)
    }
    render() {
        // debugger
        // 得到当前请求的路由路径
        let path = this.props.location.pathname
        console.log('render()', path)
        // if (path.indexOf('/product') === 0) { // 当前请求的是商品或其子路由界面
        //     path = '/product'
        // }

        // 得到需要打开菜单项的key
        const openKey = this.openKey

        return (
            <div className="left-nav">
                <Link to='/' className="left-nav-header">
                    <img src={logo} alt="logo" />
                    <h1>后台管理</h1>
                </Link>
                <Menu
                    defaultSelectedKeys={[path]}
                    defaultOpenKeys={[openKey]}
                    mode="inline"
                    theme="dark"
                >
                    {
                        //获取menu所有子节点
                        // this.getMenuNodes(menuList)
                        this.menuNodes
                    }
                </Menu>

            </div>
        )
    }
}
//包装一个已有的组件
/**
 * withRouter:高阶组件
 * 包装非路由组件，返回一个新的组件
 * 新的组件向路由传递三个属性，history/location/match
 */
export default withRouter(LeftNav)