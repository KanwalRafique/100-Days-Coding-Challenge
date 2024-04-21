"use strict";
// Question 53: Pulling Apart a Nested Object: Imagine you have a list inside another list that shows what a computer programmer knows, like coding languages, tools, and software frameworks. Find a way to get three specific skills from this list and show them.
Object.defineProperty(exports, "__esModule", { value: true });
// Explain & TIP: Breaking down a complex list into simpler parts makes it easier to work with and understand specific pieces of information.
let developerSkills = {
    languages: ["JavaScript", "Python", "Typescript", "Java", "Ruby"],
    frameworks: ["React.js", "Vue .js", "Node.js", "Angular"],
    tools: ["VS Code", "Sublime Text", "Git", "PyCharm"],
};
let { languages, frameworks, tools } = developerSkills;
console.log(`language ${languages[2]},Framework: ${frameworks[2]}, Tool: ${tools[0]}`);
