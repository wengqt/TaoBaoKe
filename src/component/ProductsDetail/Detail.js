import React from 'react';

export default class Detail extends React.Component{
    constructor(){
        super();
        this.state={
            pic:{ //商品图片信息
                picSrc:'',
                picName:'',
            },
            textIntroduction:"",//商品介绍
            originalPrice:"",//原价
            coupon:"",//优惠券
            sales:'',//商品销量
        }
    }
    initialState(){//根据得到的数据初始化商品

        // this.setState(this.props.goodsDetail)
        this.setState({  //测试数据
            pic:{picSrc:"/images/test1.png",picName:"某某商品"},
            textIntroduction:"Redux 是 JavaScript 状态容器，提供可预测化的状态管理",
            originalPrice:58.00,
            coupon:30,
            sales:1108,
        })
    }
    render() {
        return (
            <div className="detail">
                {this.initialState()}
                <div className="pic" >
                    <img src={this.state.pic.picSrc}/>
                </div>
                <div className="text">{this.state.textIntroduction}</div>
                <div className="preferentialPrice">券后价格:{this.state.originalPrice-this.state.coupon}</div>
                <div className="intro"><span>在售价:{this.state.originalPrice}</span><span>券:{this.state.coupon}</span><span>销量:{this.state.sales}</span></div>
            </div>
        )
    }
}