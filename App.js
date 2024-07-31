import React from "react";
import ReactDOM from "react-dom/client";


const parent = React.createElement('div', { id: 'parent' },
     [React.createElement('div', { id: 'child1' }, 
          [React.createElement('h1', { id: 'heading' }, 'Heading1 from nested react'),
               React.createElement('p', { id: 'para1' }, 'Paragraph1 from nested react')
          ]),
          React.createElement('div', { id: 'child2' }, 
               [React.createElement('h1', { id: 'headin2' }, 'Heading2 from nested react'),
                    React.createElement('p', { id: 'para2' }, 'Paragraph2 from nested react')
               ]),
     ]
)

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);