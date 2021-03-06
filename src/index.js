// How to get some contents to appear on screen using react?

//there are three step process to show contents on screen using react.

// 1) Import React and ReactDOM libraries

import React from 'react'; 
// import statement is used to import either dependencies or packages that we install to our project such as react and react dom or files that you and I author.

// The second word is going to the name of variable that we want to take all the code from that dependency(react or react-dom dependencies .available in node modules) or file that assign to. The name of the variable doesnot have to be exactly same as React.It could be MyReact etc.but in general we follow a convention.Our library name is react so we gave a variable name as React.

//the from keyword says we want to pull code from a file or a dependency and then finally we list either the dependency that we want to import from or a path to the the file that we want to import

//if we list of dependency react after from keyword then javascript is going to see in node modules directory and try to find a folder called react.

// so overall "import React from 'react'; this statemnets means go and find react folder in node modules directory and get all the code from inside there. and the same thing with react-dom as well.

//Note we are following ES2015 import statement i.e ES2015 Modules. Earlier syntax was followed as commonJS import statement i.e commonJS Modules.

//Example const React = require('react');

//these two types of import modules has difffernt set of rules to share code bewtween different files.Basically its a two diff module system.

import ReactDOM from 'react-dom';

//2) create react component

//React component is class or function that produces HTML to show the user(using jsx) and handles feedback from the user(using Event handlers)

// const App = function(){   // this is functional based component. we have used function keyword.but in ES2015 , we will be using arrow syntax
//   return <div>Hi there!</div>
// };

// function getButtonText() {
//   return 'Click on me!';
// }
const App = () => {
  const buttonText = {text: 'Click Me!'}; //this javascript object. cant refer inside jsx as buttonText.Need to use buttonText.text
  const style = {backgroundColor: 'blue', color: 'white' }
  const labelText = 'Enter the name:';
  return (       //if we wont give anything here then it will see after return no open tagbis there.for jsx                for return open tag should be there. so if we want to give multilple line, we can give open
                // brace
  <div>
<label className="label" htmlFor="name">{labelText}</label>
  <input id="name" type="text"/>
  {/* <button style="background-color:blue;color:white">Submit</button>   */}
  {/* this is html  so to convert html into jsx we have to give two curly braces like {{ }} first curly brace represent javascript refernce and second curly braces shows javascript object*/}
  {/* <button style={{backgroundColor: 'blue', color: 'white' }}>{buttonText.text}</button>   */}
  <button style={style}>{buttonText.text}</button>  
  
</div> 
) ;// we are returning jsx here.
};


//3) Take the react component and show it on the screen using ReactDOM library.

ReactDOM.render(
  <App />,
  document.querySelector('#root')
    // second element is a reference of dom element that already exists inside of index.html file. when we do localhost://3000 then they send index.html file.inside this we have root id and we will render our app component inside of that div which has id root.so thats why we need the refernce of this id root.Thats why we are going to pass this as the second argument in the reactDom render call back over here inside index.js file.

    //querySelector is a built in native function that is available in all the browsers.So we dont have to import anhything or do anything like that in order to use it.
);

