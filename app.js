import React from "react";
import ReactDOM from "react-dom/client";
// const heading = React.createElement('h1',{id:"heading"},"Jai baba ki ");

// Nesting 

// const parent = React.createElement('div',{id:"Parent"},
//     React.createElement('div',{id:"Child"},[
//         React.createElement('h1',{},"Ke haal hai mittr"),      // use array to make them siblings 
//         React.createElement('h2',{},"Im h2 tag")
//     ]
//         )
//     )

//    JSX 
//    const jsxheading = (<h1 className="name"> Jai baba ki  </h1>);

// react element :- 
const heading = (
    <h1> hey!! this is an react element </h1>
)

// react functional component :-
const Fheading = ()=>(
    <div className="main"> 
    <h1> example of react functional component </h1>
    </div>
)
// or another way of writing react functional component :- 
const frheading = ()=>{
   return <div class="main"> 
    <h1> example of react functional component </h1>
    </div>
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Fheading/>);