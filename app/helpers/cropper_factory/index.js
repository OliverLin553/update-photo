import Cropper from "cropperjs"
import Promise from "bluebird"
import { getDimensions } from "../../helpers/image"

const CONTAINER_WIDTH = 940
const CONTAINER_HEIGHT = 516
const CONTAINER_RATIO = CONTAINER_WIDTH / CONTAINER_HEIGHT

function srcRatio(width, height) {
  return width / height
}

function getMinCropperDimenions(srcWidth, srcHeight) {
  if (srcRatio(srcWidth, srcHeight) > CONTAINER_RATIO) {
    return Math.ceil(350 * (CONTAINER_WIDTH / srcWidth))
  }

  return Math.ceil(350 * (516 / srcHeight))
}

const FALLBACK_PROMISE = Promise.reject(new Error("Unable to create cropper"))
FALLBACK_PROMISE.suppressUnhandledRejections()

export default {
  create(imageNode, Constructor = Cropper) {
    if (imageNode == null) {
      return FALLBACK_PROMISE
    }

    return getDimensions(imageNode.src)
      .then(({ width, height }) => {
        const minCropperDimension = getMinCropperDimenions(width, height)
        const options = {
          background: false,
          viewMode: 1,
          modal: true,
          zoomable: false,
          restore: false,
          guides: false,
          center: false,
          aspectRatio: 1,
          minCropBoxWidth: minCropperDimension,
          minCropBoxHeight: minCropperDimension
        }

        return new Constructor(imageNode, options)
      })
  }
}
