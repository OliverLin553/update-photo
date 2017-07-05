import React, { Component } from "react"
import PropTypes from "prop-types"
import Promise from "bluebird"

import CropperFactory from "../../helpers/cropper_factory"
import style from "./style.css"

const DEFAULT_CROPPER_PROMISE = Promise.reject(new Error("Cropper is not available"))
DEFAULT_CROPPER_PROMISE.suppressUnhandledRejections()

export default class CropperPhoto extends Component {
  constructor(props) {
    super(props)
    this.cropperPromise = DEFAULT_CROPPER_PROMISE
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.src !== this.props.src) {
      this.cropperPromise.then((cropper) => {
        cropper.reset().clear().replace(nextProps.src)
      })
    }
  }

  componentWillUnmount() {
    this.cropperPromise.then(cropper => cropper.destroy())
  }

  getBlob() {
    return this.cropperPromise
      .then(cropper => cropper.getCroppedCanvas())
      .then((canvas) => {
        const promise = new Promise((resolve) => {
          canvas.toBlob(resolve, "image/jpeg")
        })

        return promise
      })
  }

  render() {
    const { src } = this.props

    return (
      <img
        className={style.cropper}
        ref={(image) => { this.cropperPromise = CropperFactory.create(image) }}
        src={src}
        role="presentation" />
    )
  }
}

CropperPhoto.propTypes = {
  src: PropTypes.string.isRequired
}
