import React, { Component } from "react"
import cssModules from "react-css-modules"
import Dropzone from "react-dropzone"

import { Placeholder } from "../placeholder"
import style from "./style.css"

export class App extends Component {
  render() {
    return (
      <Dropzone className={style["couples-photo-container"]} onDrop={this.onDrop}>
        <Placeholder />
      </Dropzone>
    )
  }
}

export default (cssModules(App, style))