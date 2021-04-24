/**
 * 后台管理的路由组件
 */
import React, { Component } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import { Layout } from 'antd'

import LeftNav from '../../components/leftNav'
import Header from '../../components/header'

import RoleManage from '../person_manage/role_manage'
import AuthorityManage from '../person_manage/authority_manage'
import PasswordManage from '../person_manage/password_change'
import UserManage from '../person_manage/user_manage'
import Catering from '../canteen_manage/catering_manage'
import Meterial from '../canteen_manage/material_manage'
import Purchase from '../canteen_manage/purchase_manage'
import FoodManager from '../testing_manage/food_manage'
import RulesManage from '../testing_manage/rules_manage'
import TestListManage from '../testing_manage/testList_manage'

// import NotFound from '../not-found/not-found'



const { Footer, Sider, Content } = Layout;

export default class Admin extends Component {
    render() {
        // const user = memoryUtils.user
        // 如果内存没有存储user ==> 当前没有登陆
        // if(!user || !user._id) {
        //   // 自动跳转到登陆(在render()中)
        //   return <Redirect to='/login'/>
        // }
        return (
            <Layout style={{ height: '100%' }}>
                <Sider style={{ backgroundColor: "rgba(0 21 41 0.5)" }}>
                    <LeftNav />
                </Sider>
                <Layout>
                    <Header>Header</Header>
                    <Content style={{ height:'480px',margin: 20, backgroundColor: '#c3dde8' }}>
                         <Switch>
                            <Redirect from='/admin' exact to='/admin/person_manage/user_manage' />
                            <Route path='/admin/person_manage/user_manage' component={UserManage} />
                            <Route path='/admin/person_manage/role_manage' component={RoleManage} />
                            <Route path='/admin/person_manage/authority_manage' component={AuthorityManage} />
                            <Route path='/admin/person_manage/password_change' component={PasswordManage} />
                            <Route path='/admin/canteen_manage/catering_manage' component={Catering} />
                            <Route path="/admin/canteen_manage/material_manage" component={Meterial} />
                            <Route path="/admin/canteen_manage/purchase_manage" component={Purchase} />
                            <Route path="/admin/testing_manage/food_manage" component={FoodManager} />
                            <Route path="/admin/testing_manage/rules_manage" component={RulesManage} />
                            <Route path="/admin/testing_manage/testList_manage" component={TestListManage} />


                            {/* <Route path="/order" component={Order} /> */}
                            {/* <Route component={NotFound} /> */}
                         </Switch> 
                    </Content>
                    <Footer style={{ textAlign: 'center', color: '#cccccc' }}>推荐使用谷歌浏览器，可以获得更佳页面操作体验</Footer>
                </Layout>
            </Layout>
        )
    }
}
