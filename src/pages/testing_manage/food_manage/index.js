/**
 * 食材检测管理
 */

import React, { Component, useState } from 'react'
import {
    Table,
} from 'antd'

export default class FoodManage extends Component {
    state = {
        data: [
            {
                key: '1',
                number: 1,
                name: '西红柿',
                standard: '水洗农药检测',
                change: '指标关联修改'
            },
            {
                key: '2',
                number: 2,
                name: '黄瓜',
                standard: '水洗农药检测',
                change: '指标关联修改'
            },
        ],

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

                title: '食品名称',
                dataIndex: 'name',
                key: 'name',
            },
            {
                title: '检测指标',
                dataIndex: 'standard',
                key: 'standard',
            },
            {
                title: '操作',
                key: 'action',
                dataIndex: 'change',
            },
        ];
    }
    //为第一次render（）准备数据
    componentWillMount() {
        this.initColumns()
    }

    render() {
        const {data} = this.state

        return (
            <div>
                <Table columns={this.columns} dataSource={data} />
            </div>
        )
    }
}
