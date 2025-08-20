// const heading = React.createElement('h1',{id:"heading"},"Jai baba ki ");

// Nesting 
const parent = React.createElement('div',{id:"Parent"},
    React.createElement('div',{id:"Child"},[
        React.createElement('h1',{},"Ke haal hai mittr"),      // use array to make them siblings 
        React.createElement('h2',{},"Im h2 tag")
    ]
        )
    )
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);