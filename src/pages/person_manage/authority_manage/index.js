/**
 * 权限管理
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

export default class UserManage extends Component {
    state={
        showStatus:false,   //标识当前弹出框是否显示，0代表不显示 
        data : [
            {
                key: '1',
                number: 1,
                name: '餐馆查询',
                parent: '/',
                self: '/'
            },
            {
                key: '2',
                number: 2,
                name: '餐馆修改',
                parent: '/',
                self: '/'
            },
        ]
    }
    showModal = () => {
        this.setState({
            showStatus:true
        })
    };

    handleOk = () => {
        this.setState({
            showStatus:false
        })
    };

    handleCancel = () => {
        this.setState({
            showStatus:false
        })
    };
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

                title: '权限名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '父权限',
                dataIndex: 'parent',
                key: 'parent',
            },
            {
                title: '权限',
                dataIndex: 'self',
                key: 'self',
            },
            {
                title: '操作',
                key: 'action',
                render: () => (
                    <div>
                        <a>详情</a>&nbsp;&nbsp;
                        <a>删除</a>
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
        const { data, showStatus } = this.state
        // card的左右
        const title = ''
        const extra = (
            <Button onClick={this.showModal}>
                <PlusOutlined />
                添加权限
            </Button>
        )
             
        return (
            <div>
                <Card title={title} extra={extra}>
                    <Table columns={this.columns} dataSource={data} />
                    <Modal title="添加权限" visible={showStatus === true} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Form.Item
                            label="权限名"
                            name="authorityName"
                            rules={[{ required: true, message: '请输入角色名' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="&nbsp;&nbsp;&nbsp;权限"
                            name="authority"
                            rules={[{ required: true, message: '请输入角色名' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item label="父权限">
                            <Select style={{ width: '100px' }}>
                                <Select.Option value="/">/</Select.Option>
                                <Select.Option value="/">/</Select.Option>
                            </Select>
                        </Form.Item>
                    </Modal>
                </Card>
            </div>
        )
    }
}
