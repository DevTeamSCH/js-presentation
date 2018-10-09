import React from "react";
import {
  Deck,
  Slide,
  Heading,
  Text,
  CodePane
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import Interpeter from "./interpeter";
import "./index.css";
require("normalize.css");

const theme = createTheme({
  primary: "white",
  secondary: "#1F2022",
  tertiary: "#03A9FC",
  quaternary: "#CECECE"
}, {
  primary: "Helvetica",
  secondary: "Helvetica"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={500} theme={theme}>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} caps lineHeight={1} textColor="secondary">
            ES6 attacks
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" bold>
            alias JS for dummies
          </Text>
        </Slide>


        <Slide className="slide" transition={["fade"]} bgColor="tertiary">
          <Heading className="title" lineHeight={1} textColor="secondary">
            Const vs let
          </Heading>
          <Text className="slide-body">
            Just forget vars
          </Text>
          <CodePane className="codeStatic" textSize={18} lang="javascript"
            source={`const a = 0
let b = 1
b = 2`}
          />
          <Interpeter extraText="Try it out" initCode="const a = 0" />
        </Slide>


        <Slide className="slide" transition={["fade"]} bgColor="tertiary">
          <Heading className="title" lineHeight={1} textColor="secondary">
            Spread your ...
          </Heading>
          <Text className="slide-body">
            variables
          </Text>
          <CodePane className="codeStatic" textSize={18} lang="javascript"
            source={`const c = { d: 1 }
const { d } = c

const e = { ...c, f: 2 }
const { d: _d, f } = e`}
          />
          <Interpeter extraText="Try it out" initCode="const c = { d: 1}" />
        </Slide>


        <Slide className="slide" transition={["fade"]} bgColor="tertiary">
          <Heading className="title" lineHeight={1} textColor="secondary">
            Now for arrays
          </Heading>
          <Text className="slide-body">
            I need to keep a list
          </Text>
          <CodePane className="codeStatic" textSize={18} lang="javascript"
            source={`const g = [1, 2, 3]
const h = [...g, 4, 5, 6]

const [h1, h2, ...hRest] = h`}
          />
          <Interpeter extraText="Try it out" initCode="const g = [1, 2, 3]" />
        </Slide>


        <Slide className="slide" transition={["fade"]} bgColor="tertiary">
          <Heading className="title" lineHeight={1} textColor="secondary">
            Lambda
          </Heading>
          <Text className="slide-body">
            () => (!'lampa')
          </Text>
          <CodePane className="codeStatic" textSize={18} lang="javascript"
            source={`const i = () => { }
const j = () => { return 1 }
const k = () => 1`}
          />
          <Interpeter extraText="Try it out" initCode="const i = () => { }" />
        </Slide>


        <Slide className="slide" transition={["fade"]} bgColor="tertiary">
          <Heading className="title" lineHeight={1} textColor="secondary">
            Default
          </Heading>
          <Text className="slide-body">
            I can always run away with your alma
          </Text>
          <CodePane className="codeStatic" textSize={18} lang="javascript"
            source={`const o = a || {}
const p = (a = 'alma') => a`}
          />
          <Interpeter extraText="Try it out" initCode="const o = a || {}" />
        </Slide>


        <Slide className="slide" transition={["fade"]} bgColor="tertiary">
          <Heading className="title" lineHeight={1} textColor="secondary">
            Templates
          </Heading>
          <Text className="slide-body">
            Alias {"`${}${}${}`"}
          </Text>
          <CodePane className="codeStatic" textSize={18} lang="javascript"
            source={
              `const a = 0
const p = (a = 'alma') => a
const q = \`\${a}: \${p()}\``}
          />
          <Interpeter extraText="Try it out" initCode="const a = 0" />
        </Slide>


        <Slide className="slide" transition={["fade"]} bgColor="tertiary">
          <Heading className="title" lineHeight={1} textColor="secondary">
            Promise
          </Heading>
          <Text className="slide-body">
            I will never forget you
          </Text>
          <CodePane className="codeStatic" textSize={18} lang="javascript"
            source={
              `const delay = (time) =>
  new Promise(resolve => {
    setTimeout(resolve, time)
  });

delay(500).then(() => console.log('500'))`}
          />
          <Interpeter extraText="Try it out" initCode="const delay = (time) => new Promise(resolve => { setTimeout(resolve, time) });" />
        </Slide>


        <Slide className="slide" transition={["fade"]} bgColor="tertiary">
          <Heading className="title" lineHeight={1} textColor="secondary">
            Async
          </Heading>
          <Text className="slide-body">
            Lets do it LATER
          </Text>
          <CodePane className="codeStatic" textSize={18} lang="javascript"
            source={
              `const asyncDelay = async time =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve()
    }, time)
  });

(async () => {
  await asyncDelay(1000);
  console.log('1000')
})()`}
          />
          <Interpeter />
        </Slide>


        <Slide className="slide" transition={["fade"]} bgColor="tertiary">
          <Heading className="title" lineHeight={1} textColor="secondary">
            Classes
          </Heading>
          <Text className="slide-body">
            You need class to understand
          </Text>
          <CodePane className="codeStatic" textSize={18} lang="javascript"
            source={
              `class Player {
  constructor(name) {
    this.name = name
  }

  random = () => Math.random()
}`}
          />
          <Interpeter />
        </Slide>


      </Deck>
    );
  }
}
