import React, { useState,useEffect } from "react";
import ControlType1 from "./ControlType1";
import { qnList } from "./Object";
import Questions1 from "./Question1";
 
 
export default function QuestionnaireWizard() {
   
  const [btnNxtValue, setBtnNxtValue] = useState("Next");
  const [questionList, setQuestionList] = useState([]);
  const [parentQuestions, SetParentQuestions] = useState([]);
  const [qnIndex, setqnIndex] = useState(0);



  useEffect(() => {
   console.log(qnList);
        SetChildrenVisible(qnList, 0);
    
  }, []);
  const SetChildrenVisible = (items, index) => {
    let mainItems = items.filter(x => x.parentQuestion == 0);
    SetParentQuestions(mainItems);
 
    items.forEach(item => {
      if (
        item.parentQuestion == mainItems[index].id &&
        item.parentQuestionValue == 0
      ) {
        item.ShowOnUI = true;
      } else {
        item.ShowOnUI = false;
      }
    });
 
    setQuestionList(items);
  };

  const getNextSiblingQuestions = () => {
    setqnIndex(qnIndex + 1);
 
    if (parentQuestions.length - 2 == qnIndex) {
      setBtnNxtValue("Finish");
    }
    SetChildrenVisible(questionList, qnIndex + 1);
  };
 
  return (
    <div className="container">
      <h1>My Questions List</h1>
 
      {parentQuestions[qnIndex] ? (
        <div className="questionnaire-panel">
          <Questions1
            index={qnIndex + 1}
            questionList={questionList}
            question={parentQuestions[qnIndex]}
          />
          { <ControlType1
            question={parentQuestions[qnIndex]}
            questionList={questionList}
            //setQuestionList={setQuestionList}
          /> }
        </div>
      ) : null}
 
      {questionList.map(item =>
        item.ShowOnUI == true ? (
          <div>
            <Questions1
              key={item.id}
              questionList={questionList}
              question={item}
            />
            <ControlType1
              question={item}
              questionList={questionList}
              setQuestionList={setQuestionList}
            />
          </div>
        ) : null
      )} 
 
      <button className="ea-btn" onClick={getNextSiblingQuestions}>
        {btnNxtValue}
      </button>
    </div>
  );
}