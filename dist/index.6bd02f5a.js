const parent = React.createElement("div", {
    id: "parent"
}, React.createElement("div", {
    id: "child"
}, [
    React.createElement("h1", {}, "Hello This is nested Tag!!"),
    React.createElement("h2", {}, "Hello This is nested  2 Tag!!")
]));
// const heading =React.createElement("h1",{id:'heading'},"HELLO WORLD!!")
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);

//# sourceMappingURL=index.6bd02f5a.js.map
