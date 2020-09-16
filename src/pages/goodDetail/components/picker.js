import React, { Component } from 'react'
import "./picker.css"
export default class picker extends Component {
     
   //蒙版消失
 hide(e) {
    if (e.target.className === "mask") {
       
        this.setState({
           
        })
             console.log(this.props.data);

    }

}
render() {
 
    return (
        <div>

            <div className="mask" onClick={(e) => this.hide(e)}>
                <div className="picker" >
                    <div className="info">
                        <img />
                        <span></span>
                    </div>
                    <div className="sku">
                        <h3></h3>
                        <div className="attr" >
                            <span

                            ></span>
                        </div>
                    </div>
                    <div className="btn">加入购物车</div>
                </div>
            </div>

        </div>
    )
}
}
