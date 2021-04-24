/**
 * 原始写法
 * 将所有对象全部写入，不方便扩展，写死
 * 于是使用map或reduce进行遍历，便于扩展
 * 使用的图标写法也不同，一个是直接图标的标签，一个是引用Icon进行type设置图标样式
 */
/* 

 import React, { Component } from 'react'
 import menuList from '../../config/menuConfig'
 import { Link } from 'react-router-dom'
 import './index.css'
 
 import logo from '../../assets/images/logo.gif'
 import { Menu,Icon } from 'antd';
 import {
     AccountBookOutlined,
     MailOutlined,
     HomeOutlined,
     TeamOutlined,
     ContactsOutlined,
     AreaChartOutlined,
     PieChartOutlined,
     BarChartOutlined,
     DeploymentUnitOutlined,
     HeatMapOutlined
 } from '@ant-design/icons';
 
 
 const { SubMenu } = Menu;
 
 export default class LeftNav extends Component {
     render() {
         return (
             <div className="left-nav">
                 <Link to='/' className="left-nav-header">
                     <img src={logo} alt="logo" />
                     <h1>后台管理</h1>
                 </Link>
                 <Menu
                     defaultSelectedKeys={['1']}
                     defaultOpenKeys={['sub1']}
                     mode="inline"
                     theme="light"
                 >
                     <Menu.Item key="1">
                         <Link to='/admin/home'>
                             <HomeOutlined /><span>首页</span>
                         </Link>
                     </Menu.Item>
                     <SubMenu key="sub1" title={<span>
                         <DeploymentUnitOutlined />
                         <span>商品</span>
                     </span>}>
 
                         <Menu.Item key="5">
                             <Link to='/admin/category'>
                                 <AccountBookOutlined />
                                 品类管理
                             </Link>
                         </Menu.Item>
 
                         <Menu.Item key="6" >
                             <Link to='/admin/product'>
                                 <MailOutlined />
                             商品管理
                             </Link>
                         </Menu.Item>
                     </SubMenu>
                      <Menu.Item key="2" >
                         <Link to='/admin/user'>
                             <TeamOutlined />
                             <span>用户管理</span>
                         </Link>
                     </Menu.Item>
                     <Menu.Item key="3">
                         <Link to='/admin/role'>
                             <ContactsOutlined />
                             <span>角色管理</span>
                         </Link>
                     </Menu.Item>
                     <SubMenu key="sub2" title={<span>
                         <HeatMapOutlined />
                         <span>图形图表</span>
                     </span>}>
                         <Menu.Item key="9">
                             <Link to='/admin/charts/bar'>
                                 <BarChartOutlined />
                                 柱状图
                                 </Link>
                         </Menu.Item>
                         <Menu.Item key="10">
                             <Link to='/admin/charts/line'>
                                 <AreaChartOutlined />
                             折线图
                         </Link>
                         </Menu.Item>
                         <Menu.Item key="11">
                             <Link to='/admin/charts/pie'>
                                 <PieChartOutlined />
                             饼图
                         </Link>
                         </Menu.Item>
                     </SubMenu>
                 </Menu> 
                     
             </div>
         )
     }
 }


 --------------使用reduce遍历的方式
 getMenuNodes = (menuList) => {
    // 得到当前请求的路由路径
    const path = this.props.location.pathname

    return menuList.reduce((pre, item) => {

      // 如果当前用户有item对应的权限, 才需要显示对应的菜单项
      if (this.hasAuth(item)) {
        // 向pre添加<Menu.Item>
        if(!item.children) {
          pre.push((
            <Menu.Item key={item.key}>
              <Link to={item.key}>
                <Icon type={item.icon}/>
                <span>{item.title}</span>
              </Link>
            </Menu.Item>
          ))
        } else {

          // 查找一个与当前请求路径匹配的子Item
          const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0)
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
              <Icon type={item.icon}/>
              <span>{item.title}</span>
            </span>
              }
            >
              {this.getMenuNodes(item.children)}
            </SubMenu>
          ))
        }
      }

      return pre
    }, [])
  }



  ---------------map
   // getMenuNodes_map = (menuList) => {
    //     const path = this.props.location.pathname
    //     return menuList.map(item => {
    //         // title,ket,icon,childre
    //         if (!item.children) {
    //             return (
    //                 <Menu.Item key={item.key}>
    //                     <Link to={item.key}>
    //                         <Icon type={item.icon} /> <span>{item.title}</span>
    //                     </Link>
    //                 </Menu.Item>
    //             )
    //         } else {
    //             return (
    //                 <SubMenu key={item.key} title={<span>
    //                     <Icon type={item.icon} />
    //                     <span>{item.title}</span>
    //                 </span>}>
    //                     {
    //                         //获取menu所有子节点
    //                         this.getMenuNodes(item.children)
    //                     }
    //                 </SubMenu>
    //             )
    //         }
    //     })
    // }
 */