/**
 * 检测清单管理
 */
import React, { Component } from 'react'
import { Input, DatePicker, Button,Table} from 'antd'
import { SearchOutlined } from '@ant-design/icons'
import './index.css'

export default class TestListManage extends Component {
    render() {
        const dataSource = [
            {
                key: '1',
                number:1,  //序号
                name: '餐厅1',  //餐厅
                food:'西红柿',   //检测食材
                date: '2021-4-20',  //检测日期
                standard:'清洗',   //检测指标
                threshold:'95%',   //阙值
                results:'98%',   //检测结果
                qualified:'否'   //是否合格
            },
            {
              key: '2',
              number:2,
              name: '餐厅2',
              food:'黄瓜',
              date: '2021-4-20',
              standard:'清洗',
              threshold:'98%',
              results:'100%',
              qualified:'是'
            },
            
          ];
          
          const columns = [
            {
              title: '序号',
              dataIndex: 'number',
              key: 'number',
            },
            {
              title: '餐厅',
              dataIndex: 'name',
              key: 'name',
            },
            {
              title: '检测食材',
              dataIndex: 'food',
              key: 'food',
            },
            {
                title: '检测日期',
                dataIndex: 'date',
                key: 'date',
              },
              {
                title: '检测指标',
                dataIndex: 'standard',
                key: 'standard',
              },
              {
                title: '阙值',
                dataIndex: 'threshold',
                key: 'threshold',
              },
              {
                title: '检测结果',
                dataIndex: 'results',
                key: 'results',
              },
              {
                title: '是否合格',
                dataIndex: 'qualified',
                key: 'qualified',
              },
          ];
          
        return (
            <div className="testList">
                <Input.Group compact className="testList_top_cen">
                    <Input style={{ width: '20%' }} defaultValue="选择日期" />
                    <DatePicker />
                </Input.Group>
                <div className="testList_top_left">
                    选择餐厅：
                    <select style={{ width: '30%' }} >
                        <option>餐厅1</option>
                        <option>餐厅2</option>
                    </select>
                </div>
                <Button type="primary" shape="round" className="testList_top_right">
                    <SearchOutlined />搜索
                </Button>
                <Table dataSource={dataSource} columns={columns} className="testList_bottom"/>
            </div>
        )
    }
}
