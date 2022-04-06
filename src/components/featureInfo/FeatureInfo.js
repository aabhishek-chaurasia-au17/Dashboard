import React from 'react'
import './featureInfo.css'
import { BiDownArrowAlt, BiUpArrowAlt } from "react-icons/bi";

const FeatureInfo = () => {
  return (
    <div className="featured">
        <div className="featuredItem">
            <span className="featuredTitle">
                Revanue
            </span>
            <div className="featuredMoneyContiner">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-11.4 <BiDownArrowAlt className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">
                Compared to last month
            </span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Sales
            </span>
            <div className="featuredMoneyContiner">
                <span className="featuredMoney">$2,415</span>
                <span className="featuredMoneyRate">-11.4 <BiDownArrowAlt className="featuredIcon negative"/></span>
            </div>
            <span className="featuredSub">
                Compared to last month
            </span>
        </div>
        <div className="featuredItem">
            <span className="featuredTitle">
                Cost
            </span>
            <div className="featuredMoneyContiner">
                <span className="featuredMoney">$2,225</span>
                <span className="featuredMoneyRate">+11.4 <BiUpArrowAlt className="featuredIcon"/></span>
            </div>
            <span className="featuredSub">
                Compared to last month
            </span>
        </div>
    </div>
  )
}

export default FeatureInfo