/*
检测指标管理
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

export default class RulesManage extends Component {
    state = {
        data: [
            {
                key: '1',
                number: 1,
                name: '清洗',
                threshold: '95%',
                details: '检测指标说明',

            },
            {
                key: '2',
                number: 2,
                name: '农药残留',
                threshold: '95%',
                details: '检测指标说明',
            },
        ],
        showStatus: false,   //标识当前弹出框是否显示，0代表不显示
    }
    initColumns = () => {
        this.columns = [
            {
                title: '序号',
                dataIndex: 'number',
                key: 'number'
            },
            {

                title: '检测指标',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '检测指标阙值',
                dataIndex: 'threshold',
                key: 'threshold',
            },
            {
                title: '检测指标说明',
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
        ];
    }
    //为第一次render（）准备数据
    componentWillMount() {
        this.initColumns()
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
    render() {

        const { data, showStatus } = this.state

        // card的左右
        const title = ''
        const extra = (
            <Button onClick={this.showModal}>
                <PlusOutlined />
                添加检测指标
            </Button>
        )



        return (
            <div>
                <Card title={title} extra={extra}>
                    <Table columns={this.columns} dataSource={data} />
                    <Modal title="添加检测指标" visible={showStatus === true} onOk={this.handleOk} onCancel={this.handleCancel}>
                    <Form.Item
                            label="检测指标"
                            name="rules"
                            rules={[{ required: true, message: '请输入餐馆名称' }]}
                        >
                            <Input />
                        </Form.Item>
                        <Form.Item
                            label="&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;阙值"
                            name="quezhi"
                            rules={[{ required: true, message: '请输入餐馆负责人' }]}
                        >
                            <Input />
                        </Form.Item>
                        检测指标说明：<textarea  style={{height:"90px"}}/>
                    </Modal>
                </Card>
            </div>
        )
    }
}
