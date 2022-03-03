import React from "react"
// import Data from "../Data"

export default function Card(props){
    return(
        <div className="card container-fluid">
            <div className="row">
                <div className="col-3 img">
                    <img src={props.img} className="card-img" alt="swop" />
                </div>
                <div className="col-9 text">
                    <p className="location"><i class="fa fa-map-marker"></i> {props.location}<a href={props.maps} className="maps">View on Google Maps</a></p>
                    <h2>{props.title}</h2>
                    <p className="dates">{props.startDate} - {props.endDate}</p>
                    <p className="description">{props.desc}</p>
                </div>
            </div>
        </div>
    );
}