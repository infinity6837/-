/**
 * 角色管理
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

export default class RoleManege extends Component {
    state = {
        showStatus: false,   //标识当前弹出框是否显示，0代表不显示 
        data: [
            {
                key: '1',
                number: 1,
                name: '老师',
                details: '老师消费CCCZXXX123456789123456789'
            },
            {
                key: '2',
                number: 2,
                name: '学生',
                details: '学生消费CCCZXXX'

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

                title: '角色名',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '角色详情',
                dataIndex: 'details',
                key: 'details',
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
                添加角色
            </Button>
        )

        return (
            <div>
                <Card title={title} extra={extra}>
                    <Table columns={this.columns} dataSource={data} />
                    <Modal title="添加角色" visible={showStatus === true} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <Form.Item
                            label="角色名称"
                            name="username"
                            rules={[{ required: true, message: '请输入角色名' }]}
                        >
                            <Input />
                        </Form.Item>
                        角色详情：<textarea style={{height:"90px"}}/>
                        <Form.Item label="权限列表">
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
