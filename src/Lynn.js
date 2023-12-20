import React from 'react';
import './Lynn.css';
import DarkModeButton from './DarkModeButton'; // Import the DarkModeButton component

export default function FavoriteRestaurant1() {
  return (
    <div>
      <div className="header-container">
        <h1>Lynn's Reviews</h1>
      </div>
      <div className="restaurants">
        <div>
          <h2>Dumpling Kitchen</h2>
          <p>
            This is the best place to go for family-style dinners with your friends!
            Soup dumplings, pan-fried pork buns, wonton soup, and garlic bok choy are a few of the delectable
            options and my go-to's. Make a stop by Asian Ghetto and try it out!
          </p>
          <a href="https://dumplingkitchenca.com">
            <img src="https://d1ralsognjng37.cloudfront.net/88b258bb-676a-4e26-9e8f-9a646151a5a3.webp" alt="" />
          </a>
        </div>
        <div>
          <h2>Bagel Street Cafe</h2>
          <p>
            When I'm trying to grab a quick brunch before class, I always get the BSC club and a thai tea! This is an
            amazing option for bagel lovers in Berkeley: there's a variety of different bagels to choose from with various
            toppings, sweet or savory!
          </p>
          <a href="https://www.bagelstreetcafe.net/">
            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/VSIU_Yo6h8MJE_yX_PT5Qw/348s.jpg" alt="" />
          </a>
        </div>
        <div>
          <h2>TPTEA</h2>
          <p>
            After finishing a hefty midterm, this is my go-to boba place to both treat myself and cope with the aftermath. I'm
            obsessed with their thai tea brulee. There's no SnackPass for this place, though, so make sure to get your
            order ready!
          </p>
          <a href="https://www.yelp.com/biz/tp-tea-berkeley-3">
            <img src="https://s3-media0.fl.yelpcdn.com/bphoto/ZYtCzQ9g42S8vdNYCilUEA/348s.jpg" alt="" />
          </a>
        </div>
      </div>
    </div>
  );
}
