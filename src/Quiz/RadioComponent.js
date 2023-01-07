import React, { useState } from "react";
// import SubQuestion from "../Questions/SubQuestion";
 
export default function RadioComponent({
  questionId,
  questionList,
 // setQuestionList,
}) {
  const [radiovalue, setradiovalue] = useState(0);
  const [nextQuestion, setnextQuestion] = useState({});
 
  let radioYesId = "radioYes" + questionId;
  let radioNoId = "radioNo" + questionId;
  let radioName = "radioName" + questionId;
  let divYesId = "divYes" + questionId;
  let divNoId = "divNo" + questionId;
  const handleChange = e => {
    let subQuestion = questionList?.filter(
      x =>
        x.parentQuestion == questionId &&
        x.parentQuestionValue == e.target.value
    );
    // console.log("before");
    // console.log(questionList);
    // questionList.forEach(item => {
    //   if (
    //     item.parentQuestion == questionId &&
    //     item.parentQuestionValue == e.target.value
    //   ) {
    //     item.ShowOnUI = true;
    //   }
    // });
    // console.log("after");
    // console.log(questionList);
    // setQuestionList(questionList);
    if (subQuestion != null && subQuestion.length > 0) {
      setradiovalue(e.target.value);
      setnextQuestion(subQuestion);
    }
  };
 
  return (
    <div className="col-75">
      <div id={divYesId} className="radio">
        <input
          id={radioYesId}
          name={radioName}
          type="radio"
          value="1"
          onChange={e => {
            handleChange(e);
          }}
        />
        <label htmlFor={radioYesId} className="radio-label">
          Ja
        </label>
      </div>
 
      <div id={divNoId} className="radio">
        <input
          id={radioNoId}
          name={radioName}
          type="radio"
          value="2"
          onChange={e => {
            handleChange(e);
          }}
        />
        <label htmlFor={radioNoId} className="radio-label">
          Nej
        </label>
      </div>
      {/* {radiovalue > 0 ? (
        <SubQuestion
          subQuestion={nextQuestion}
          questionList={questionList}
          fromRadio={true}
        />
      ) : null} */}
    </div>
  );
}