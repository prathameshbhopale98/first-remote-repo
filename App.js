


const parent = React.createElement("div", {id: "parent"}, 
    [React.createElement("div", {id: "child"}, [React.createElement("h1", {}, "This is a heading"), React.createElement("h2", {}, "This is a heading") ]),
    React.createElement("div", {id: "child2"}, [React.createElement("h1", {}, "This is a heading"), React.createElement("h2", {}, "This is a heading") ])
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);