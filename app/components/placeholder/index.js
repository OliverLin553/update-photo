import React, { Component } from "react"
import cssModules from "react-css-modules"
import style from "./style.css"

export class Placeholder extends Component {
  render() {
    return (
      <div className={style["couples-photo-placeholder-container"]}>
        <div className={style["couples-photo-placeholder-hover"]}>
          <div className={style["upload-photo-text"]}>
            Upload Photo
          </div>
          <div className={style["camera-icon"]} />
          <div className={style["couples-photo-placeholder"]}>
            minimum size is 350 x 350
          </div>
        </div>
      </div>
    )
  }
}

export default cssModules(Placeholder, style)