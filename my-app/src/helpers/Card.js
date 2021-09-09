import React, { Fragment } from 'react';
import saumya from "../assests/friends-images/saumya-rastogi.jpeg";
import amit from "../assests/friends-images/amit-pandey.JPG";
import sushil from "../assests/friends-images/sushil-prajapati.JPG";
import poornanand from "../assests/friends-images/poornanand-verma.JPG";
import "./card.css";

function Card() {
    const seeMore = `See more >`;
    return (
        <Fragment>
        <div className="card_outer-wrap">
            <div className="card_wrapper">
                <div className="card_body">
                    <h3 className="card_message">See, what Saumya is saying for you!!</h3>
                    <img className="card_avatar" src= {saumya} alt="Saumya's Avatar" width= "120px" height= "120px"/>
                </div>
            </div>
            <div className="card_bottom">
                <a className="card_bottom-link"href="#">{seeMore}</a>
            </div>
        </div>
        <div className="card_outer-wrap">
            <div className="card_wrapper">
                <div className="card_body">
                    <h3 className="card_message">See, what Amit is saying for you!!</h3>
                    <img className="card_avatar" src= {amit} alt="Saumya's Avatar" width= "120px" height= "120px"/>
                </div>
            </div>
            <div className="card_bottom">
                <a className="card_bottom-link"href="#">{seeMore}</a>
            </div>
        </div>
        <div className="card_outer-wrap">
            <div className="card_wrapper">
                <div className="card_body">
                    <h3 className="card_message">See, what Sushil is saying for you!!</h3>
                    <img className="card_avatar" src= {sushil} alt="Saumya's Avatar" width= "120px" height= "120px"/>
                </div>
            </div>
            <div className="card_bottom">
                <a className="card_bottom-link"href="#">{seeMore}</a>
            </div>
        </div>
        <div className="card_outer-wrap">
            <div className="card_wrapper">
                <div className="card_body">
                    <h3 className="card_message">See, what Punnu is saying for you!!</h3>
                    <img className="card_avatar" src= {poornanand} alt="Saumya's Avatar" width= "120px" height= "120px"/>
                </div>
            </div>
            <div className="card_bottom">
                <a className="card_bottom-link"href="#">{seeMore}</a>
            </div>
        </div>
        </Fragment>
    )
}

export default Card
