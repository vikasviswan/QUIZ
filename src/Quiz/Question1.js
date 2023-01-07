import React from "react";
 
//export default function Questions({ header, id, qnsList,parentQuestion }) {
export default function Questions1({ questionList, question, index }) {
  return (
    <div key={question.id} className="row-hidden-control">
      <div className="col-25">
        <br></br>
        {index ? (
          <span className="question-header question-header-pink-color">
            {index}. {question.header}
          </span>
        ) : (
          <span className="question-header"> {question.header}</span>
        )}
      </div>
    </div>
  );
}