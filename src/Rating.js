import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa'

function Rating() {

    const [rating, setRating] = useState();
    const [hover, setHover] = useState();

    return (
        <div>
            {[...Array(5)].map((star, i) => {
                const ratingVal = i + 1;

                return (
                    <label>
                        <input type='radio' name='rating' value={ratingVal} onClick={() => setRating(ratingVal)} />
                        <FaStar 
                        className='star' 
                        color={ratingVal <= (hover || rating) ? '#ffc107' : '#e4e5e9' }
                        onMouseEnter={() => setHover(ratingVal)}
                        onMouseLeave={() => setHover()}
                        />
                    </label>
                );
            })}
        </div>
    )
}

export default Rating