import React from "react";
const RecordCard = ({bgcolor,img,title,price,status,statusColor}) => {
    return (
        <div className="cardParent">
            <div className="circle" style={{ backgroundColor: `${bgcolor}` }}>
                <img src={img} alt="not found data" className="circleImage" />
            </div>
            <div className="moreInfo">
                <span className="Earnig">{title}</span>
                <span className="dolor">${price}</span>
                <div className="loseGain">
                    <span className="percentage" style={{color:`${statusColor}`}} >{status}</span> <span className="months">this month</span>
                </div>
            </div>
        </div>
    );
};

export default RecordCard;
