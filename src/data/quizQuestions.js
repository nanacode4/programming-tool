export const quizQuestions = [
  {
    category: "variable",
    kind: "multiple",
    question: "Which of the following is a valid variable name in Python?",
    options: ["2value", "value_2", "value-2", "value 2"],
    answer: "value_2",
  },
  {
    category: "variable",
    kind: "multiple",
    question: "What is a correct way to declare a Python variable?",
    options: ["var name = Mary", "#name = Mary", "$name = Mary", "name = Mary"],
    answer: "name = Mary",
  },
  {
    category: "variable",
    kind: "fill",
    question: "Create a variable named x and assign the value 50 to it.",
    codeParts: ["", " = ", ""],
    answer: ["x", "50"],
  },
  {
    category: "datatype",
    kind: "multiple",
    question: "What is the data type of x?\n\nx = 5.0",
    options: ["int", "str", "float", "bool"],
    answer: "float",
  },
  {
    category: "datatype",
    kind: "drag",
    question:
      "Select the correct functions to print the data type of a variable:",
    codeParts: ["", "("," ","(x))"],
    answer: ["print","type"],
    options: ["typ", "var", "echo"],
  },
  {
    category: "operator",
    kind: "multiple",
    question: "What does the '%' operator do in Python?",
    options: ["Addition", "Division", "Modulo", "Exponentiation"],
    answer: "Modulo",
  },
];
