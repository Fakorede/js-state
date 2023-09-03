const parser = require("@babel/parser");
const traverse = require("@babel/traverse").default;
const t = require("@babel/types");

const stateVariables = [];
const code = `
import { useState } from 'react';

export default function Form() {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [fullName, setFullName] = useState('');

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
    setFullName(e.target.value + ' ' + lastName);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
    setFullName(firstName + ' ' + e.target.value);
  }

  return (
    <>
      <h2>Let’s check you in</h2>
      <label>
        First name:{' '}
        <input
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name:{' '}
        <input
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </>
  );
}
`;

const ast = parser.parse(code, {
    sourceType: "module",
    plugins: ["jsx"],
});

traverse(ast, {
  enter(path) {
    if (t.isVariableDeclarator(path.node)) {
        path.node.id.elements.forEach((element, index) => {
            if (index === 0) stateVariables.push(element.name);
        });
    }
  },
});

console.log("State variables found in the code are:")

stateVariables.forEach(variable => {
    console.log(variable)
});