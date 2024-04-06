import React, { useState } from 'react';
import './Home.css';
import Header from '../../components/Header/Header';
import ExploMenu from '../../components/ExploreMenu/ExploMenu';
import FoodDisplay from '../../components/FoodDisplay/FoodDisplay';

const Home = () => {
  const [category,setCategory] = useState("All")
  return (
    <div className='home'>
      <Header />
      <ExploMenu category={category} setCategory={setCategory} />
      <FoodDisplay category={category} />
    </div>
  )
}

export default Home