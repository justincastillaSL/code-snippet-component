import React, { Component } from 'react';
import Clipboard from 'react-clipboard.js';
import { IconClipboard } from '@saucelabs/sl-component-icons';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { monokai } from 'react-syntax-highlighter/styles/hljs';
import { javaCode } from './InstantSauceTest.js'
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      collapsed: true
    }
  }

  toggleCollapse = () => {
    this.setState({
      collapsed: !this.state.collapsed 
    })
  }

  render() {

    let codeBoxState = this.state.collapsed ? "collapsed" : "expanded";
    return (
      <div className="codeBox">
          <button onClick={ this.toggleCollapse }>View Full</button>
          <Clipboard  data-clipboard-text={javaCode}>
            {/* <IconClipboard
              height="18"
              width="18"
            /> */}
            Copy
          </Clipboard>
          <div className={codeBoxState}>
            <SyntaxHighlighter language='java' showLineNumbers={true} style={ monokai}>{javaCode}</SyntaxHighlighter>
          </div>
      </div>
    );
  }
}

export default App;
