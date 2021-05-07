/*
原材料管理
 */
import React, { Component } from 'react'
import {
    Card,
    Table,
    Button,
    Modal,
    Form,
    Input,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export default class Meterial extends Component {
    state = {
        data: [
            {
                key: '1',
                number: 1,
                name: '西红柿',
                details: '营养健康好吃'
            },
            {
                key: '2',
                number: 2,
                name: '黄瓜',
                details: '菜市场购入'

            },
        ],
        showStatus: false   //判断添加框隐藏还是显示
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
    initColumns = () => {
        this.columns = [
            {
                title: '序号',
                dataIndex: 'number',
                key: 'number'
            },
            {

                title: '食品原材料名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '食品原材料描述',
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
    componentWillMount() {
        this.initColumns()
    }
    render() {
        const {data,showStatus} = this.state
        // card的左右
        const title = ''
        const extra = (
            <Button onClick={this.showModal}>
                <PlusOutlined />
                添加原材料
            </Button>
        )

        return (
            <div>
                <Card title={title} extra={extra}>
                    <Table columns={this.columns} dataSource={data} />
                    <Modal title="添加原材料" visible={showStatus === true} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Form.Item
                            label="食品原材料名称"
                            name="carteringHost"
                            rules={[{ required: true, message: '请输入食品原材料名称' }]}
                        >
                            <Input />
                        </Form.Item>
                        食品原材料描述：<textarea style={{height:'90px'}}/>
                    </Modal>
                </Card>
            </div>
        )
    }
}