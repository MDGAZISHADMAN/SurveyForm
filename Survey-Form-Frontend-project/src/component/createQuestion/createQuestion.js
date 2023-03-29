import "./createQuestion.css"
import logo1 from '../assets/logo.svg';
import logo2 from '../assets/community.svg';
import hamburger from '../assets/hamburger.svg';
import person from '../assets/person.svg';
import leftArrow from '../assets/left-arrow.svg';
// import rectangleBox from '../assets/rectangle-box.svg';
import gear from '../assets/gear.svg';
import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';




const QuestionPage = () => {
    var n=0;
    const [question, setQuestion] = useState([""]);
    const [option, setoption] = useState([""]);
    const [shift , setshift] = useState(true);
    const [title, settitle] = useState("Create Questions");
    const [preview , setpreview] = useState("Preview");
    const [selectedOption, setSelectedOption] = useState('');

    
    function Newquestion(){
        //  console.log(question)
        setQuestion([...question,""])
    }
    function previewpage(){
        if(shift===true){
        setshift(false)
        settitle("Preview")
        setpreview("Close Preview")}
        else{
            setshift(true)
            settitle("Create Questions")
            setpreview("Preview")
        }
    }
    function savedata(value,index){
        console.log(question);
        const Newquestion=question.map((que,queindex)=>{
            return queindex === index ? value : que 
        })
        setQuestion(Newquestion)
    }

    function saveoption(value, index){
        const optionsave=option.map((opt,optionindex)=>{
            return optionindex === index ? value : opt
        })
        setoption(optionsave)
    }

    function handleSelect(event) {
        setSelectedOption(event.target.value);
        console.log(setSelectedOption(event.target.value));
        if (event.target.value == 'logout') {
          handleLogout();
        }
      }
      
      const navigate = useNavigate();
      function handleLogout() {
        // redirect to first page
        navigate('/');
    
      }
        

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
                        <select  value={selectedOption} onChange={handleSelect}
                              className="select">
                                 <option value="select">Select</option>
                                <option value="logout">Logout</option>
                            </select> </span>
                    </span>
                    <div className="picture-nav">
                        <img className="sort-image-person" src={person} alt="Person" />
                    </div>
                </div>
                <div className="box">
                    <img className="left-arrow" src={leftArrow} alt="leftArrow" />
                    <div id="text">{title}</div>
                    <button className="btns" id="btn-cancel" onClick={previewpage}>Preview</button>
                    <button
                        type="submit"
                        // onClick={handleSubmit}
                        className="btns"
                        id="btn-next"
                        onClick={()=>alert("Questions saved Successfully")}
                    >Save </button>
                </div>
   {shift && <div>  {question.map((que,index)=>{
                    n=n+1;
                return <div className="question-section">
                    <div className="question-title">
                        <span >Q{n}</span> <span className="question" >Question </span>
                        <img className="gear" src={gear} alt="gear" />
                    </div>
                    <div>
                        <input onChange={(e)=>savedata(e.target.value,index)}
                            className="question-input"
                            type={'text'}
                            placeholder={"Enter Question"} />
                    </div>
                    <div className="radio-btns" >
                             <input type={"radio"} name="k" value={"Value"} /> 
                            <input className="radio-input" type={'text'} placeholder={"Value"} />
                             <br />
                            <input type={"radio"} name="k" value={"Value"} /> 
                            <input className="radio-input" type={'text'} placeholder={"Value"} />
                             <br />
                             <input type={"radio"} name="k" value={"Value"} /> 
                             <input className="radio-input" type={'text'} placeholder={"Value"} />
                             <br />
                           
                    </div>
                </div>
        }) }

                <div className="btn-section">
                    <button  className="add-question-btn" 
                    onClick={()=>Newquestion()}>Add question</button>
                </div>
                </div>}
                {!shift && <div>    
                    {
                        question.map((que ,index )=>{
                            return <div className="preview">
                                <div className="que">Question {index+1}</div>
                                <div className="allques">{que}</div>
                                <div className="val">Values</div>
                                </div>
                        })
                    }
                    
                    </div>}
            </div>
        </div>
    )
}

export default QuestionPage ;



