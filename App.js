import React from "react";
// import logo from './logo.svg';
import "./App.css";

class App extends React.Component {
  render() {
  
    this.state = [
      {
        heading: "HTML",
        content:
          "The HyperText Markup Language, or HTML is the standard markup language for documents designed to be displayed in a web browser. It can be assisted by technologies such as Cascading Style Sheets and scripting languages such as JavaScript. ",
        button: "CLICK ME",
      },
      {
        heading: "CSS",
        content:
          "Cascading Style Sheets is a style sheet language used for describing the presentation of a document written in a markup language such as HTML. CSS is a cornerstone technology of the World Wide Web, alongside HTML and JavaScript. ",
        button: "CLICK ME",
      },
      {
        heading: "JS",
        content:
          "JavaScript, often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. ",
        button: "CLICK ME",
      },
    ];

    return (
      <div className="card">
        {this.state.map((body) => {
          return (
            <div className="card-ctn">
              <div className="header">
                <h1>{body.heading}</h1>
              </div>
              <div className="body">
                <p>{body.content}</p>
              </div>
              <div className="footer">
                <button>{body.button}</button>
              </div>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
