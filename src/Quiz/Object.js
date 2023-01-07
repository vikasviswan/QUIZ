export const qnList =[
    {
  
      id: 220,
  
      parentQuestion: 0,
  
      parentQuestionValue: 0,
  
      sortingSequence: 4,
  
      isActive: true,
  
      header: "Är du fullt arbetsför?",
  
      controlType: 2,
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 221,
  
      parentQuestion: 0,
  
      parentQuestionValue: 0,
  
      sortingSequence: 1,
  
      isActive: true,
  
      header:
  
        "Har du varit sjukskriven helt eller delvis mer än 14 dagar i följd de senaste tre åren? \ncheckThis is next line",
  
      controlType: 2,
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 222,
  
      parentQuestion: 221,
  
      parentQuestionValue: 1,
  
      sortingSequence: 3,
  
      isActive: true,
  
      header: "Ange orsak till sjukskrivningen?",
  
      controlType: 1,
  
      isMandatory: true,
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 223,
  
      parentQuestion: 222,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "test1",
  
      controlType: 4,
  
      
  
      parentNodeValue: 1,
  
     
  
      isMandatory: true,
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 224,
  
      parentQuestion: 221,
  
      parentQuestionValue: 1,
  
      sortingSequence: 2,
  
      isActive: true,
  
      header: "Under vilka tidsperioder har du varit sjukskriven?",
  
      controlType: 3,
  
      
  
      
  
     
  
      isMandatory: true,
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 225,
  
      parentQuestion: 221,
  
      parentQuestionValue: 1,
  
      sortingSequence: 1,
  
      isActive: true,
  
      header: "Är du fortfarande sjukskriven?",
  
      controlType: 2,
  
      
  
      
  
     
  
      isMandatory: true,
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 226,
  
      parentQuestion: 225,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "sedan när är du fullt återställd? ",
  
      controlType: 7,
  
      
  
      
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 227,
  
      parentQuestion: 226,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      isActive: false,
  
      header: "test1",
  
      controlType: 2,
  
      
  
      
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 228,
  
      parentQuestion: 226,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      isActive: false,
  
      header: "test2",
  
      controlType: 1,
  
      
  
      
  
      updDateTime: "2019-05-07T13:03:29.847",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 229,
  
      parentQuestion: 226,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      isActive: false,
  
      header: "test3",
  
      controlType: 5,
  
      
  
      
  
      updDateTime: "2019-05-07T13:03:29.85",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 230,
  
      parentQuestion: 0,
  
      parentQuestionValue: 0,
  
      sortingSequence: 1,
  
      isActive: true,
  
      header:
  
        "Sköldkörtelbesvär, struma och/eller annan ämnesomsättningsrubbning?",
  
      controlType: 0,
  
      parentNode: 221,
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.85",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 231,
  
      parentQuestion: 230,
  
      parentQuestionValue: 0,
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "Har/har du tidigare haft?",
  
      controlType: 2,
  
      
  
      
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 232,
  
      parentQuestion: 231,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "förhöjd ämnesomsättning ?",
  
      controlType: 2,
  
      
  
      
  
     
  
      isMandatory: true,
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 233,
  
      parentQuestion: 232,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "När?",
  
      controlType: 1,
  
      
  
      
  
     
  
      isMandatory: true,
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 234,
  
      parentQuestion: 231,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "för låg ämnesomsättning?",
  
      controlType: 2,
  
      
  
      
  
     
  
      isMandatory: true,
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 235,
  
      parentQuestion: 234,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "När?",
  
      controlType: 1,
  
      
  
      
  
     
  
      isMandatory: true,
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 236,
  
      parentQuestion: 231,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "struma (förstoring av sköldkörteln)?",
  
      controlType: 2,
  
      
  
      
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 237,
  
      parentQuestion: 236,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "När?",
  
      controlType: 1,
  
      
  
      
  
      updDateTime: "2019-05-07T13:03:29.86",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 238,
  
      parentQuestion: 230,
  
      parentQuestionValue: 0,
  
      sortingSequence: 0,
  
      isActive: false,
  
      header: "test 12 ",
  
      controlType: 2,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.86",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 239,
  
      parentQuestion: 238,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      isActive: false,
  
      header: "test22",
  
      controlType: 2,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.86",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 240,
  
      parentQuestion: 239,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      isActive: false,
  
      header: "test23",
  
      controlType: 2,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.863",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 241,
  
      parentQuestion: 230,
  
      parentQuestionValue: 0,
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "Date control question",
  
      controlType: 6,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.863",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 242,
  
      parentQuestion: 0,
  
      parentQuestionValue: 0,
  
      sortingSequence: 2,
  
      isActive: true,
  
      header: "Ange längd och vikt",
  
      controlType: 0,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.867",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 243,
  
      parentQuestion: 242,
  
      parentQuestionValue: 0,
  
      sortingSequence: 2,
  
      isActive: true,
  
      header: "Vikt",
  
      controlType: 7,
  
      
  
      
  
      updDateTime: "2019-05-07T13:03:29.867",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 244,
  
      parentQuestion: 242,
  
      parentQuestionValue: 0,
  
      cancelQuestionnaire: false,
  
      cancelQuestionnaireValue: 2,
  
      cancelQuestionnaireReason: "",
  
      sortingSequence: 1,
  
      isActive: true,
  
      header: "Längd",
  
      controlType: 2,
  
      
  
      
  
      updDateTime: "2019-05-07T13:03:29.867",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 245,
  
      parentQuestion: 0,
  
      parentQuestionValue: 0,
  
      cancelQuestionnaire: false,
  
      cancelQuestionnaireValue: 2,
  
      cancelQuestionnaireReason: "",
  
      sortingSequence: 3,
  
      isActive: false,
  
      header:
  
        "This is a standard health declaration. Vi på Euro Accident vill bidra till en trygg och frisk värld. Vi tror på att människor ska kunna arbeta, få ihop sin tillvaro och kunna vara friska medan de gör det.",
  
      controlType: 2,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.867",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 246,
  
      parentQuestion: 0,
  
      parentQuestionValue: 0,
  
      cancelQuestionnaire: false,
  
      cancelQuestionnaireValue: 2,
  
      cancelQuestionnaireReason: "",
  
      sortingSequence: 2,
  
      isActive: true,
  
      header: "Allergi, astma och/eller annan lungsjukdom? ",
  
      controlType: 2,
  
      parentNode: 221,
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.87",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 247,
  
      parentQuestion: 246,
  
      parentQuestionValue: 1,
  
   
  
    sortingSequence: 0,
  
      isActive: true,
  
      header: "Vilken sjukdom, vilka besvär har du?",
  
      controlType: 1,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.87",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 248,
  
      parentQuestion: 246,
  
      parentQuestionValue: 1,
  
   sortingSequence: 0,
  
      isActive: true,
  
      header: "När insjuknade du, när började besvären? ",
  
      controlType: 1,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.873",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 249,
  
      parentQuestion: 246,
  
      parentQuestionValue: 1,
  
  sortingSequence: 0,
  
      isActive: true,
  
      header: "När hade du besvär/symptom första gången?",
  
      controlType: 1,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.873",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 250,
  
      parentQuestion: 246,
  
      parentQuestionValue: 1,
  
      cancelQuestionnaire: false,
  
      cancelQuestionnaireValue: 2,
  
      cancelQuestionnaireReason: "",
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "När hade du besvär/symptom senast?",
  
      controlType: 1,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.873",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 251,
  
      parentQuestion: 246,
  
      parentQuestionValue: 1,
  
      cancelQuestionnaire: false,
  
      cancelQuestionnaireValue: 2,
  
      cancelQuestionnaireReason: "",
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "Hur långa har besvärsperioderna varit?",
  
      controlType: 1,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.873",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 252,
  
      parentQuestion: 246,
  
      parentQuestionValue: 1,
  
      cancelQuestionnaire: false,
  
      cancelQuestionnaireValue: 2,
  
      cancelQuestionnaireReason: "",
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "Har du/har du tidigare haft allergi? ",
  
      controlType: 2,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.877",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 253,
  
      parentQuestion: 252,
  
      parentQuestionValue: 1,
  
      cancelQuestionnaire: false,
  
      cancelQuestionnaireValue: 2,
  
      cancelQuestionnaireReason: "",
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "Vad är du allergisk mot?",
  
      controlType: 1,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.877",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 254,
  
      parentQuestion: 252,
  
      parentQuestionValue: 1,
  
      cancelQuestionnaire: false,
  
      cancelQuestionnaireValue: 2,
  
      cancelQuestionnaireReason: "",
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "Hur yttrar sig din allergi?",
  
      controlType: 1,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.88",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 255,
  
      parentQuestion: 246,
  
      parentQuestionValue: 1,
  
      cancelQuestionnaire: false,
  
      cancelQuestionnaireValue: 2,
  
      cancelQuestionnaireReason: "",
  
      sortingSequence: 0,
  
      isActive: true,
  
      header:
  
        "Använder du eller har du tidigare använt någon medicin mot allergi, astma eller annan ?",
  
      controlType: 2,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.88",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 256,
  
      parentQuestion: 246,
  
      parentQuestionValue: 1,
  
      cancelQuestionnaire: false,
  
      cancelQuestionnaireValue: 2,
  
      cancelQuestionnaireReason: "",
  
      sortingSequence: 0,
  
      isActive: true,
  
      header:
  
        "Har du genomgått någon allergiutredning eller undersökning för dina besvär? ",
  
      controlType: 2,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.883",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 257,
  
      parentQuestion: 256,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      header: "Vilken?",
  
      controlType: 1,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.883",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 258,
  
      parentQuestion: 256,
  
      parentQuestionValue: 1,
  
      sortingSequence: 0,
  
      isActive: true,
  
      header: "Vad blev resultatet?",
  
      controlType: 1,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.92",
  
     
  
      isMandatory: true,
  
      
  
      renderAsRow: false,
  
      description: null,
  
    },
  
    {
  
      id: 259,
  
      parentQuestion: 0,
  
      parentQuestionValue: 0,
  
      sortingSequence: 5,
  
      isActive: true,
  
      header:
  
        "In these sections I've added some content; titles and some placeholder text. This is a pretty normal plain page structure, but we have everything we need to create the folded paper effect by moving on to the CSS.",
  
      controlType: 2,
  
      
  
      parentNodeValue: 1,
  
      updDateTime: "2019-05-07T13:03:29.927",
  
     
  
      isMandatory: true,
      renderAsRow: false,
  
      description: null,
  
    },
  
  ];