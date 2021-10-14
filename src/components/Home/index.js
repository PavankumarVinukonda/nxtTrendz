// Write your JS code here
import Header from '../Header'

import './index.css'

const Home = () => (
  <div>
    <Header />
    <div className="home-bg-lg">
      <div className="box-1">
        <h1 className="fashion">Clothes That Get YOU Noticed</h1>
        <img
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
          className="clothes-1"
        />
        <p className="fashionQuate">
          Fashion is part of the daily air Fashion is a part of the daily and it
          does not quite help that it chages <br />
          all the time. Clothes have allway been marker of the era and we are in
          <br />
          a revolution Your Fashion makes you benn seen and heard that way
          <br /> you are. So, celebrate the seasons new exciting fashion in you
          own way
        </p>
        <button type="button" className="shopnowbtn">
          Shop Now
        </button>
      </div>
      <img
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
        className="clothes"
      />
    </div>
  </div>
)

export default Home
