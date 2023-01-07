import React from "react";
import RadioComponent from "./RadioComponent";

 
var FormText = {
  yes: "Yes",
  no: "No",
  none: "None",
  textarea: "Text unlimited",
  radio: "Yes / No button",
  smalltextbox: "Textbox (6 Char)",
  textbox: "Textbox (100 Char)",
  email: "Email",
  date: "Date",
  fileupload: "File Upload",
  checkboxList: "Checkbox List",
  dropdown: "Dropdown",
  infotext: "Info Text",
  inputrange: "Range Selector",
  imageupload: "Image Upload",
};
 
var FormControl = {
  ingen: 0,
  textarea: 1,
  radio: 2,
  smalltextbox: 3,
  textbox: 4,
  email: 5,
  date: 6,
  fileupload: 7,
  checkboxList: 8,
  dropdown: 9,
  infotext: 10,
  inputrange: 11,
  imageupload: 12,
};
export default function ControlType1({
  question,
  questionList,
 // setQuestionList,
}) {
  // let question = qnsList?.filter(x => x.id == questionId);
 
  let returnHtml = null;
  if (question.controlType != 0) {
    if (question.controlType == 2) {
      returnHtml = (
        <RadioComponent
          questionId={question.id}
          questionList={questionList}
        //  setQuestionList={setQuestionList}
        ></RadioComponent>
      );
    
    } else if (question.controlType == 3) {
      returnHtml = '<input type="text" maxLength="100" />';
    } else if (question.controlType == 1) {
      returnHtml = '<input type="text" maxLength="100" />';
    }
  }
  return <>{returnHtml} </>;
}