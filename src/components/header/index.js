import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import './index.css'

// // import LinkButton from '../link-button'
import { formateDate } from '../../utils/dateUtils'
import memoryUtils from '../../utils/memoryUtils'
// import { reqWeather } from '../../api/index'
import menuList from '../../config/menuConfig'
import storageUtils from '../../utils/storageUtils'

class Header extends Component {
    state = {
        currentTime: formateDate(Date.now()),   //当前时间字符串格式
        //应该为index，api传递过来的两个值
        dayPictureUrl: 'http://api.map.baidu.com/images/weather/day/qing.png',  //天气图片
        weather: '晴',  //天气的文本
    }

    //更新天气状态
    // getWeather = async () => {
        //调用接口请求异步获取数据
        // const { dayPictureUrl, weather } = await reqWeather('北京');
        //更新状态
        // this.setState({ dayPictureUrl, weather });
    // }

    //根据显示地址，到menuList中查找对应key，显示对应title
    getTitle = () => {
        //得到当前请求路径
        const path = this.props.location.pathname;
        let title = '';
        menuList.forEach(item => {
            if (item.key === path) {
                title = item.title;
            } else if (item.children) {
                //find返回值是布尔值
                //在所有的子item中查找匹配的
                const cItem = item.children.find(cItem => path.indexOf(cItem.key)===0);
                //如果有值就说明有匹配的，取出他的title
                if (cItem) {
                    title = cItem.title;
                }
            }
        })
        return title;
    }

    componentDidMount() {
        ///获取当前时间
        setInterval(() => {
            const currentTime = formateDate(Date.now())
            this.setState({ currentTime });
        }, 1000)
        //获取当前天气
        // this.getWeather()
    }

    

    render() {

        const { currentTime, dayPictureUrl, weather } = this.state
        //取的是memoryUtils里的user保存的值
        const username = memoryUtils.user.username
        //得到当前需要显示的title
        const title = this.getTitle();

        return (
            <div className="header">
                <div className="header">
                    <div className="header-top">
                        <span>欢迎，{username}</span>
                        <a href="javascript:">退出</a>
                    </div>
                    <div className="header-bottom">
                        <div className="header-bottom-left">{title}</div>
                        <div className="header-bottom-right">
                            <span>{currentTime}</span>
                            <img src={dayPictureUrl} />
                            <span>{weather}</span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
export default withRouter(Header)