/**
 * 用户管理
 */
import React, { Component } from 'react'
import {
    Card,
    Table,
    Button,
    Modal,
    Form,
    Input,
    Select,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'
import './index.css'

export default class RoleManege extends Component {
    state = {
        showStatus: false,   //标识当前弹出框是否显示，0代表不显示 
        data: [
            {
                key: '1',
                number: 1,
                name: '老师',
                realName: '张三',
                email: '123456@qq.com',
                telphone: '123456123',
                role: '学生'
            },
            {
                key: '2',
                number: 2,
                name: '学生',
                realName: '李四',
                email: '456789.123.com',
                telphone: '123123123',
                role: '老师'
            },
        ]
    }
    
    showModal = () => {
        this.setState({
            showStatus: true
        })
    };

    handleOk = () => {
        this.setState({
            showStatus: false
        })
    };

    handleCancel = () => {
        this.setState({
            showStatus: false
        })
    };
    showDetails = () => {
        // alert(this.state.data[i].name);
    }
    /**
  * 初始化Table所有列的数组
  */
    initColumns = () => {
        this.columns = [
            {
                title: '序号',
                dataIndex: 'number',
                key: 'number'
            },
            {

                title: '用户名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '真实姓名',
                dataIndex: 'realName',
                key: 'realName',
            },
            {
                title: '邮箱',
                dataIndex: 'email',
                key: 'email',
            },
            {
                title: '电话',
                dataIndex: 'telphone',
                key: 'telphone',
            },
            {
                title: '角色',
                dataIndex: 'role',
                key: 'role',
            },
            {
                title: '操作',
                key: 'action',
                render: () => (
                    <div>
                       <Button type="primary" onClick={this.showDetails}>详情</Button>&nbsp;&nbsp;
                       <Button type="primary" onClick={this.handleDelete}>删除</Button>
                    </div>
                ),
            },
        ]
    }
    //为第一次render（）准备数据
    componentWillMount() {
        this.initColumns()
    }
    render() {

        const { Option } = Select;

        const prefixSelector = (
            <Form.Item name="prefix" noStyle>
                <Select style={{ width: 70 }}>
                    <Option value="86">+86</Option>
                </Select>
            </Form.Item>
        );


        const { data, showStatus } = this.state
        // card的左右
        const title = ''
        const extra = (
            <Button onClick={this.showModal}>
                <PlusOutlined />
                添加用户
            </Button>
        )

        return (
            <div>
                <Card title={title} extra={extra}>
                    <Table columns={this.columns} dataSource={data} />
                    <Modal title="添加用户" visible={showStatus === true} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <Form
                            scrollToFirstError
                        >
                            <Form.Item
                                label="真实姓名"
                                name="realName"
                                rules={[{ required: true, message: 'Please input your username!' }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="virtualName"
                                label="&nbsp;&nbsp;&nbsp;用户名"
                                tooltip="What do you want others to call you?"
                                rules={[{ required: true, message: 'Please input your nickname!', whitespace: true }]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item
                                name="password"
                                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;密码"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
                                hasFeedback
                            >
                                <Input.Password />
                            </Form.Item>
                            <Form.Item
                                name="email"
                                label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;邮箱"
                                rules={[
                                    {
                                        type: 'email',
                                        message: 'The input is not valid E-mail!',
                                    },
                                    {
                                        required: true,
                                        message: 'Please input your E-mail!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>
                            <Form.Item label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;电话">
                                <Input />
                            </Form.Item>
                            <Form.Item label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;角色">
                                <Select style={{ width: '100px' }}>
                                    <Select.Option value="teacher">老师</Select.Option>
                                    <Select.Option value="student">学生</Select.Option>
                                </Select>
                            </Form.Item>
                        </Form>
                    </Modal>
                </Card>
            </div>
        )
    }
}
