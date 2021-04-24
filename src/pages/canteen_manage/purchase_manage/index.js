/**
 * 采购管理
 */
import React, { Component } from 'react'
import {Table} from 'antd'

export default class Purchase extends Component {
    render() {
         const columns = [
             {
                 title: '序号',
                 dataIndex: 'number',
                 key: 'number'
             },
             {
 
                 title: '餐厅名称',
                 dataIndex: 'name',
                 key: 'name',
             },
             {
                 title: '今日采购清单名称',
                 dataIndex: 'listName',
                 key: 'listName',
             },
             {
                 title: '操作',
                 key: 'action',
                 render: () => (
                     <div>
                         <a>今日明细</a>&nbsp;&nbsp;
                         <a>历史记录</a>
                     </div>
                 ),
             },
         ];
 
         const data = [
             {
                 key: '1',
                 number: 1,
                 name: '餐厅1',
                 listName: '20210420-餐厅1-购物清单',
 
             },
             {
                 key: '2',
                 number: 2,
                 name: '餐厅2',
                 listName: '20210520-餐厅1-购物清单',
             },
         ];
         return (
             <div>
                <Table columns={columns} dataSource={data} />;
             </div>
         )
     }
 }
