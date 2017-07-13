/* global Image */
import Promise from "bluebird"

export const getDimensions = (url) => {
  return new Promise((resolve, reject) => {
    const image = new Image()
    image.onload = () => {
      const dimensions = { width: image.width, height: image.height }
      resolve(dimensions)
    }
    image.onerror = reject
    image.src = url
  })
}