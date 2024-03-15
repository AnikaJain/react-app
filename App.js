const heading = React.createElement("h1", {id: "heading"}, "Hello World");
const heading2 = React.createElement("h2", {id: "heading2"}, "Hello World2");
const div = React.createElement("div", {}, [heading, heading2]);
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(div);