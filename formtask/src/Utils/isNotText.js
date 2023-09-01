 export function isTextValid(text) {
    const textRegex = /^[a-zA-Z]+$/;
    if(textRegex.test(text.trim()) && text.length >4) return true
    return false
  }