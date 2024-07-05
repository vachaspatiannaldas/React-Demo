{/* <div id="parent">
    <div id="child">
        <h1>This is h1 tag</h1>
        <h2>This is h2 tag</h2>
    </div>
    <div id="child2">
        <h1>This is h1 tag</h1>
        <h2>This is h2 tag</h2>
    </div>
</div> */}

// React.createElement(Object) => HTML(Browser Understands)

const parent = React.createElement("div", {id: "parent"}, [
    React.createElement("div", {id: "child"}, [
        React.createElement("h1", {}, "This is h1 tag"),
        React.createElement("h2", {}, "This is h2 tag")
    ]),
    React.createElement("div", {id: "child2"}, [
        React.createElement("h1", {}, "This is h1 tag"),
        React.createElement("h2", {}, "This is h2 tag")
    ])
]);

// const heading = React.createElement("h1", {id: "heading", xyz: "abc"} , "Hello World from React.js!");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent);