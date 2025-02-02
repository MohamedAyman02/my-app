import React from "react";
import { FaRegStar } from "react-icons/fa6";
import { FaStar } from "react-icons/fa6";
import { FaStarHalfAlt } from "react-icons/fa";
const Rating = ({ rating,review }) => {
    return (
        <div className="rating" style={{color:"orange",fontSize:"25px"}}>
            {
                rating >= 1 ? <FaStar />
                    : rating >= 0.5 ? <FaStarHalfAlt />
                        : <FaRegStar />
            }
            {
                rating >= 2 ? <FaStar />
                    : rating >= 1.5 ? <FaStarHalfAlt />
                        : <FaRegStar />
            }
            {
                rating >= 3 ? <FaStar />
                    : rating >= 2.5 ? <FaStarHalfAlt />
                        : <FaRegStar />
            }
            {
                rating >= 4 ? <FaStar />
                    : rating >= 3.5 ? <FaStarHalfAlt />
                        : <FaRegStar />
            }
            {
                rating >= 5 ? <FaStar />
                    : rating >= 4.5 ? <FaStarHalfAlt />
                        : <FaRegStar />
            }
            <span style={{color:"gray",fontWeight:"bold", margin:"0 12px", fontSize:"20px"}}>{review}</span>
        </div>
        
    );
}
export default Rating;