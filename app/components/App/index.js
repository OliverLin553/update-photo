import React, { Component } from "react"
import cssModules from "react-css-modules"
import Dropzone from "react-dropzone"

import { Placeholder } from "../placeholder"
import { EditPhoto } from "../edit_photo"
import { getDimensions } from "../../helpers/image"
import style from "./style.css"

export const validDimensions = (img) => {
  return img.height >= 350 && img.width >= 350
}

export class App extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      imageToEdit: false
    })
  }

  onCancel() {
    this.setState({ imageToEdit: false });
  };

  onDrop(img) {
    getDimensions(img[0].preview)
      .then((dimensions) => {
        if (validDimensions(dimensions)) {
          this.setState({ imageToEdit: img })
        } else {
         alert("minimum size is 350 x 350")
        }
      })
  }

  renderEditPhoto() {
    if (this.state.imageToEdit) {
      return (
        <EditPhoto
          onCancel={() => { this.onCancel() }}
          files={this.state.imageToEdit}
        />
      );
    }
    return false;
  }

  render() {
    return (
      <div>
        <Dropzone className={style["couples-photo-container"]} onDrop={(img) => {this.onDrop(img)}}>
          <Placeholder />
        </Dropzone>
        {this.renderEditPhoto()}
      </div>

    )
  }
}

export default (cssModules(App, style))