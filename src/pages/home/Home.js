import React from 'react'
import FeatureInfo from '../../components/featureInfo/FeatureInfo'
import Chart from '../../components/chart/Chart'
import './home.css';
import {userData} from "../../dummyData"


const Home = () => {
  return (
    <div className="home">
      <FeatureInfo/>
      <Chart title="User Analytics" data={userData} dataKey="Active User" grid/>
      <div className="homeWidgets"></div>
    </div>
  )
}

export default Home