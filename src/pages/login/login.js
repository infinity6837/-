/**
 * 登陆的路由组件
 */
import React, { Component } from 'react'
import {Redirect} from 'react-router-dom' 
import './login.css'
import logo from '../../assets/images/logo.jpeg'
import { Form, Input, Button, message } from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';
// import { reqLogin } from '../../api'
// import memoryUtils from '../../utils/memoryUtils'
// import storageUtils from '../../utils/storageUtils'

const Item = Form.Item

class Login extends Component {
    
    handleSubmit = (event) => {
        //阻止事件的默认行为
        event.preventDefault();
        this.props.form.validateFields(async (err, values) => {
            // if (!err) {
                // console.log('提交登陆的ajax请求', values)
                // 请求登陆
                // const { username, password } = values
                // const result = await reqLogin(username, password) // {status: 0, data: user}  {status: 1, msg: 'xxx'}
                // console.log('请求成功', result)
                // if (result.status === 0) { // 登陆成功
                    // 提示登陆成功
                    // message.success('登陆成功')

                    // 保存user
                    // const user = result.data
                    // memoryUtils.user = user // 保存在内存中
                    // storageUtils.saveUser(user) // 保存到local中

                    // 跳转到管理界面 (不需要再回退回到登陆)
                    //  this.props.history.replace('/')

                // } else { // 登陆失败
                //     // 提示错误信息
                //     message.error(result.msg)
                // }

            // } else {
            //     console.log('检验失败!')
            // }
        })
    
    
        //得到form对象
        const form = this.props.form
        // 获取表单项的输入数据
        const values = form.getFieldsValue();
        console.log(values);
    }
    /**
     * 对密码进行验证
     */
    validatePwd = (rule, value, callback) => {
        const length = value && value.length
        const pwdReg = /^[a-zA-Z0-9_]+$/
        if (!value) {
            callback('密码必须输入');
        } else if (length < 4) {
            callback('密码必须大于 4 位')
        } else if (length > 12) {
            callback('密码必须小于 12 位')
        } else if (!pwdReg.test(value)) {
            callback('密码必须是英文、数组或下划线组成')
        } else {
            callback() // 必须调用 callback 
        }
    }
    render() {
        // 如果用户已经登陆, 自动跳转到管理界面
        
        // const user = memoryUtils.user
        // if (user && user._id) {
        //     return <Redirect to='/' />
        // }
        
        

        //得到具有强大功能的form对象
        const form = this.props.form
        const { getFieldDecorator } = form
        return (
            <div className="login">
                <header className="login-header">
                    <img src={logo} alt="logo" />
                    <h1>食品安全后台管理系统</h1>
                </header>
                <section className="login-content">
                    <h2>用户登陆</h2>
                    <Form onSubmit={this.handleSubmit} className="login-form">
                        <Item className="login-item-wid" key="username">
                            {/*用户名/密码的的合法性要求 
                        1). 必须输入 
                        2). 必须大于等于 4 位 
                        3). 必须小于等于 12 位 
                        4). 必须是英文、数字或下划线组成 */}
                            {getFieldDecorator('username', {
                                //声明式验证：直接使用定义好的规则进行验证
                                rules: [
                                    { required: true, message: '用户名不能为空' },
                                    { min: 4, message: '用户名至少四位' },
                                    { max: 12, message: '用户名最多12位' },
                                    { pattern: /^[a-zA-Z0-9_]+$/, message: '用户名必需英文数字下划线组成' }
                                ],
                            })(
                                <Input prefix={<UserOutlined className="site-form-item-icon" />}
                                    placeholder="用户名" className="login-wid" />
                            )}
                        </Item>
                        <Form.Item className="login-item-wid">

                            {getFieldDecorator('password', {

                                rules: [
                                    { validator: this.validator }
                                ],
                            })(
                                <Input
                                    prefix={<LockOutlined className="site-form-item-icon" />}
                                    type="password"
                                    placeholder="请输入密码"
                                    className="login-wid"
                                />
                            )}

                        </Form.Item>
                        <Form.Item>
                            <Button type="primary" htmlType="submit" className="login-but">
                                登陆
                            </Button>
                        </Form.Item>
                    </Form>
                </section>
            </div>
        )
    }
}
/*
高阶函数
    1.接收函数类型的参数
    2.函数的返回值是函数
    3.常见高阶函数
        1）定时器setTimeOut/setInterval
        2)Promise:Promise(()=>{}).then(value=>{},reason=>{})
        3)数组方法forEach,map/find/filter
        4)函数对象的bind
        5）Form.create()/getFieldDectorator
    高阶函数更新动态更具有扩展性
高阶组件
    1.接收一个组件（被包装组件），返回一个新组件（包装组件），包装组件会向被包装组件传入特定属性
    2.扩展组件的功能
    3.高阶组件也是高阶函数，接收一个组件函数，返回一个新的组件函数
*/

// 包装Form组件生成一个新的组件Form(Login)
// 新组件会向Form组件传递一个强大的对象属性：form
const WrapLogin = Form.create()(Login)
export default WrapLogin
/**
 * 前后台表单验证
 * 收集表单输入数据
 */
