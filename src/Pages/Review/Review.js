import React from 'react';
import img1 from '../../assets/images/review1.jpg'
import img2 from '../../assets/images/review2.jpg'
import img3 from '../../assets/images/review3.jpg'
import img4 from '../../assets/images/review4.jpg'
import img5 from '../../assets/images/review5.jpg'
import ReviewDetails from './ReviewDetails';

const Review = () => {

    const bannerData = [
        {
            image: img1,
            prev: 5,
            id: 1,
            next: 2
        },
        {
            image: img2,
            prev: 1,
            id: 2,
            next: 3
        },
        {
            image: img3,
            prev: 2,
            id: 3,
            next: 4
        },
        {
            image: img4,
            prev: 3,
            id: 4,
            next: 5
        },
        {
            image: img5,
            prev: 4,
            id: 5,
            next: 1
        },
    ]

    return (
        <div className="carousel w-full py-10">

            {
                bannerData.map(slide => <ReviewDetails
                    key={slide.id}
                    slide={slide}
                ></ReviewDetails>)
            }
        </div>
    );
};

export default Review;