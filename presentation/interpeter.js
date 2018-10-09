import React, { Component } from "react";
import {
  Layout,
  CodePane,
  Fill
} from "spectacle";

import "./interpeter.css";

class Interpeter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      command: "",
      output: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.evalSlide = this.evalSlide.bind(this);
  }

  handleChange({ target: { value } }) {
    this.evalSlide(value);
    this.setState({ command: value });
  }

  evalSlide(command) {
    try {
      const lines = [];
      const outputs = command.split("\n").map((line) => {
        lines.push(line);
        try {
          return eval(line);
        } catch (e) {
          //console.warn("Can't eval single, line trying multiple");
          try {
            return JSON.stringify(eval(lines.join(" ")));
          } catch (err) {
            //console.error(err);
            return err.toString();
          }
        }
      });
      const outs = outputs.join("\n");
      this.setState({ output: outs });
      return outs;
    } catch (err) {
      return err.toString();
    }
  }

  initSlide(text) {
    this.setState({ command: text, output: "" });
  }

  render() {
    const { command, output } = this.state;
    const { initCode, extraText = "" } = this.props;
    return (
      <div>
        {`${extraText} `}
        <div className="init" onClick={(e) => this.initSlide(e.target.textContent)}>
          {initCode}
        </div>
        <Layout align="flex-start center">
          <Fill>
            <textarea style={{ width: "100%", height: "100%" }} rows={5} type="textfield" value={command} onChange={(e) => this.handleChange(e)}/>
          </Fill>
          {output && (
            <Fill>
              <CodePane className="codepane" textSize={24} lang="javascript" source={output} />
            </Fill>
          )}
        </Layout>
      </div>
    );
  }
}

export default Interpeter;
