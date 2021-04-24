/**
 * 餐馆管理
 */
import React, { Component } from 'react'
import {
    Card,
    Table,
    Button,
    Modal,
} from 'antd'
import { PlusOutlined } from '@ant-design/icons'

export default class Catering extends Component {
    state={
        showStatus:false,   //标识当前弹出框是否显示，0代表不显示 
        data : [
            {
                key: '1',
                number: 1,
                name: '餐馆一',
                head:'张三',
                details: '本餐馆主要XXXXX',

            },
            {
                key: '2',
                number: 2,
                name: '餐馆二',
                head:'李四',
                details: '本餐馆主要XXXXX',
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

                title: '餐馆名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '餐馆负责人',
                dataIndex: 'head',
                key: 'head',
            },
            {
                title: '餐馆描述',
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
                 添加餐馆信息
            </Button>
        )
        

        
        return (
            <div>
                <Card title={title} extra={extra}>
                    <Table columns={this.columns} dataSource={data} />
                    <Modal title="添加餐馆信息" visible={showStatus===true} onOk={this.handleOk} onCancel={this.handleCancel}>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                        <p>Some contents...</p>
                    </Modal>
                </Card>
            </div>
        )
    }
}