import React, { Component } from "react"
import cssModules from "react-css-modules"
import style from "./style.css"

export class EditPhoto extends Component {
  constructor(props) {
    super(props)
    this.state = ({
      files: this.props.files
    })
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
              <div className="modal-body">
                <img src={this.state.files[0].preview} />
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