var securityQuestions = ["a", "b", "c", "d"];
securityQuestions[0] = {
    question: "What is your mother's maiden name?",
    expectedAnswer: "Johnson"
}
securityQuestions[1] = {
    question: "What is your favorite color?",
    expectedAnswer: "Purple"
}
securityQuestions[2] = {
    question: "What city were you born in?",
    expectedAnswer: "Oakland"
}
securityQuestions[3] = {
    question: "What was your first job?",
    expectedAnswer: "Gardener"
}

for (i=0; i < securityQuestions.length;) {
    var responses = prompt(securityQuestions[i].question)
    if (responses === securityQuestions[i].expectedAnswer) {
        i++;
    }
    else {
        alert("Incorrect answer")
        break;
    }
}