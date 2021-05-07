/**
 * 修改密码
 */
import React, { Component } from 'react'
import './index.css'
import {
    Form,
    Input,
} from 'antd';

export default class PasswordManage extends Component {
    render() {
        return (
            <div className="pwd">
                <Form.Item
                    name="old_pwd"
                    label="原&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;码"
                    rules={[
                        {
                            required: true,
                            message: '请输入原始密码',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>
                <Form.Item
                    name="new_ped"
                    label="新&nbsp;&nbsp;&nbsp;密&nbsp;&nbsp;&nbsp;码"
                    rules={[
                        {
                            required: true,
                            message: '请输入新密码',
                        },
                    ]}
                    hasFeedback
                >
                    <Input.Password />
                </Form.Item>

                <Form.Item
                    name="confirm"
                    label="确认新密码"
                    dependencies={['password']}
                    hasFeedback
                    rules={[
                        {
                            required: true,
                            message: '请再次输入新密码',
                        },
                        ({ getFieldValue }) => ({
                            validator(_, value) {
                                if (!value || getFieldValue('password') === value) {
                                    return Promise.resolve();
                                }
                                return Promise.reject(new Error('两次密码输入不同，请重新输入'));
                            },
                        }),
                    ]}
                >
                    <Input.Password />
                </Form.Item>
                    
            </div>
        )
    }
}
