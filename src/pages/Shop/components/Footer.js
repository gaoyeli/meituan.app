import React, { Component } from 'react'
import "./Footer.css"
import radio_nor from "../../../assets/img/radio_nor.png"
import radio_hig from "../../../assets/img/radio_hig.png"
import editor_hig from "../../../assets/img/editor_hig.png"
import editor_nor from "../../../assets/img/editor_nor.png"

export default class Footer extends Component {
    render() {
        const { selectAll, allChecked, allEdit,changeEdit,totalNum } = this.props
        return (
            <div>
                <div className="footer">
                    <div className="footerO1" onClick={() => selectAll()}>
                        {allChecked ? <img src={radio_hig} alt="" /> : <img src={radio_nor} alt="" />}
                        <p>全选</p>
                    </div>
                    <div className="footerO2" onClick={() => changeEdit()}>
                        {allEdit ? <img src={editor_hig} alt="" /> : <img src={editor_nor} alt="" />}
                        <p>编辑</p>
                    </div>
                    <div className="footerThree">
                        <p>合计：{totalNum}</p>
                        <p>(不含运费)</p>
                    </div>
                    <div className="footerFour">
                        去结算
                   </div>
                </div>
            </div>
        )
    }
}
