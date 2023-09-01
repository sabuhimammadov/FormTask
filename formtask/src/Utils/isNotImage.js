export function isImageFile(filename) {
    // Regular expression for image file extensions (case-insensitive)
    const imageRegex = /\.(jpg|jpeg|png|gif|bmp|svg)$/i;
    if(imageRegex.test(filename))  return true
    return false

  }