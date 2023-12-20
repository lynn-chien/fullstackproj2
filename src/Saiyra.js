import React from 'react';
import './Saiyra.css';

export default function FavoriteRestaurant2() {
    return (
        <div class="all">
            <div class="background-container">
            <div class = "header-container"> 
                <h1>Saiyra's Reviews</h1>
            </div>
            <div class = "restaurants">
                <div class = 'ImmThai'>
                    <h2>Imm Thai</h2>
                    <p> I'm a regular here, and every visit leaves me craving more. The Thai Iced Tea is pure bliss, and the Pad See Ew Noodles are my absolute favorite. This place is a flavorful journey that keeps me coming back for more.</p>
                    <a href="https://www.immthaistreetfood.com/"><img src = 'https://images.squarespace-cdn.com/content/v1/5e9491b8bb182a1caddcb6bf/1588824726387-AQ04Q6U8IS9JSHEC2XH6/immthai-06013.jpg?format=1500w' width = "200" height = "200"/></a>
                </div>
                <div class = 'PlenTea'>
                    <h2> PlenTea</h2>
                    <p> While it may be a tad on the expensive side, this boba place in Berkeley is undoubtedly my go-to spot. I can't resist their Brown Sugar Smoothie, and the Mango Smoothie is a fantastic alternative. If you're looking for your favorite boba fix, this place won't disappoint!</p>
                    <a href="https://plentea.net/"><img src = 'https://tb-static.uber.com/prod/image-proc/processed_images/494f7405f15be73e5a838735898e3b3b/c73ecc27d2a9eaa735b1ee95304ba588.jpeg' width = "200" height = "200"/></a>
                </div>
                <div class = 'Mezzos'>
                    <h2>Mezzos</h2>
                    <p> The sandwiches here are absolutely delicious! The atmosphere is just perfect for some relaxed studying, and the best part is you can enjoy a fresh, satisfying meal while you're at it. Highly recommend this place! </p>
                    <a href="https://www.mezzo-berkeley.com/"><img src = 'https://images.squarespace-cdn.com/content/v1/5ad518d3f2e6b1e9b8e8487d/1532567598333-DM5UN0DLT8RKAJ0N87QK/Cafe_Mezzo-0015.jpg?format=1500w' width = "200" height = "200"/></a>
                </div>
            </div>
            </div>
            {/* You can add more content, images, or any additional information */}
        </div>
    );
}