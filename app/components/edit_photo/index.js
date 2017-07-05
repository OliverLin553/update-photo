import React, { Component } from "react"
import cssModules from "react-css-modules"
import style from "./style.css"

import { default as CropperPhoto } from "../cropper_photo"

export class EditPhoto extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      files: this.props.files
    })
  }

  hasFiles() {
    return this.state.files.length !== 0
  }

  renderCropperPhoto() {
    if (this.hasFiles()) {
      return (
        <CropperPhoto
          className="cropper"
          ref={(cropper) => { this.cropper = cropper }}
          src={this.state.files[0].preview}
        />
      )
    }

    return false
  }

  render() {
    return (
      <div>
        <div className={`modal fade in" ${style["modal-block"]}`} id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-hidden="true" onClick={this.props.onCancel}>&times;</button>
                <h4 className="modal-title" id="myModalLabel">Edit Photo</h4>
              </div>
              <div className={`modal-body ${style["modal-body"]}`}>
                {this.renderCropperPhoto()}
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-default" data-dismiss="modal" onClick={this.props.onCancel} >关闭</button>
                <button type="button" className="btn btn-primary">提交更改</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default cssModules(EditPhoto, style)