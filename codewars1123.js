// Description: String Templates - Bug Fixing #5

// Instructions
// Output
// Oh no! Timmy hasn't followed instructions very carefully and forgot how to use the
//  new String Template feature, Help Timmy with his string template so it works as he expects!

//  My Solution=>

buildString =(...template)=> `I like ${template.join(', ')}!`;