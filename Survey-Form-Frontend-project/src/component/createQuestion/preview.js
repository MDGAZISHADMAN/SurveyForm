import "./createQuestion.css"
import logo1 from '../assets/logo.svg';
import logo2 from '../assets/community.svg';
import hamburger from '../assets/hamburger.svg';
import person from '../assets/person.svg';
import leftArrow from '../assets/left-arrow.svg';
// import {useLocation} from 'react-router-dom';
import React from "react";

function Preview(prop) {
    const que = prop.question
    return (
        <div className="main">
            <div className="left-nav">
                <span>
                    <img src={logo1} alt="logo1" />
                </span>
                <span className="icon2">
                    <img src={logo2} alt="logo2" />
                </span>
                <span className="three-line">
                    <img className="three" src={hamburger} alt="hamburger" />
                </span>
            </div>
            <div className="right-side">
                <div className="top-nav">
                    <span>Logo</span>
                    <span className="right">
                        <span>
                            <select className="select">
                                <option ></option>
                            </select> </span>
                    </span>
                    <div className="picture-nav">
                        <img className="sort-image-person" src={person} alt="Person" />
                    </div>
                </div>
                <div className="box">
                    <img className="left-arrow" src={leftArrow} alt="leftArrow" />
                    <div id="text">Close Preview</div>
                    <button className="btns" id="btn-cancel">Preview</button>
                    <button
                        type="submit"
                        // onClick={handleSubmit}
                        className="btns"
                        id="btn-next"
                    >Save </button>
                </div>
               
            </div>
        </div>
    )
}

export default Preview;