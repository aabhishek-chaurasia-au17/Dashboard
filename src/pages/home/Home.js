import React from 'react'
import FeatureInfo from '../../components/featureInfo/FeatureInfo'
import Chart from '../../components/chart/Chart'
import './home.css';


const Home = () => {
  return (
    <div className="home">
      <FeatureInfo/>
      <Chart/>
    </div>
  )
}

export default Home