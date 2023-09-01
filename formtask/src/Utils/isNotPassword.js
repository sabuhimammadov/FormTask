export function isPasswordValid(password) {
    // Regular expression for password validation
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/;
    if(passwordRegex.test(password) && password.length >8) return true
    return false

  }
  