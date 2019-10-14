import React, { Component } from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
import Pusher from 'pusher-js';
import pushid from 'pushid';
import axios from 'axios'

import './Editor.css';

import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

import 'codemirror/mode/htmlmixed/htmlmixed';
import 'codemirror/mode/css/css';
import 'codemirror/mode/javascript/javascript';

export default class Editor extends Component {
    constructor() {
        super();
        this.state = {
          id: '',
          html: '',
        };
      }

      componentDidUpdate() {
        this.runCode();
      }

      componentDidMount() {
        this.setState({
          id: pushid(),
        });
      }

      runCode = () => {
        /*const { html, js } = this.state;

        const iframe = this.refs.iframe;
        const document = iframe.contentDocument;
        const documentContents = `
          <!DOCTYPE html>
          <html lang="en">
          <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <meta http-equiv="X-UA-Compatible" content="ie=edge">
            <title>Document</title>
          </head>
          <body>
            ${html}
            <script type="text/javascript">
              ${js}
            </script>
          </body>
          </html>
        `;
        document.open();
        document.write(documentContents);
        document.close();*/
      };

      render() {
        const { html } = this.state;
        const codeMirrorOptions = {
          theme: 'material',
          lineNumbers: true,
          scrollbarStyle: null,
          lineWrapping: true,
        };

        return (
          <div className="App">
            <section className="playground">
              <div className="code-editor html-code">
                <div className="editor-header">HTML</div>
                <CodeMirror
                  value={html}
                  options={{
                    mode: 'htmlmixed',
                    ...codeMirrorOptions,
                  }}
                  onBeforeChange={(editor, data, html) => {
                    this.setState({ html });
                  }}
                />
              </div>
            </section>
            /*{
            <section className="result">
              <iframe title="result" className="iframe" ref="iframe" />
            </section>
        }*/
          </div>
        );
      }
    }