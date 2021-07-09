class User {
 #passwd = null
 /**
  * 
  * @param {string} username 
  * @param {string} password 
  */
 constructor(username, password) {
  this.username = username
  this.#passwd = password
 }
 /**
  * 
  * @param {string} password 
  * @returns If the password is correct
  */
 check_password(password) {
  return this.#passwd === password
 }
 /**
  * 
  * @param {string} old_password 
  * @param {string} new_password 
  * @returns this
  */
 change_password(old_password, new_password) {
  if (this.check_password(old_password)) { this.#passwd = new_password; } else { throw new Error("password check: not ok") }
  return this
 }

 set password(_v) {
  throw new SyntaxError("please use the change_password() func")
 }
 get password() {
  var t = confirm("do you want script read the password?")
  if (t) {
   return this.#passwd;
  } else {
   throw Error("the user rejection read the password property")
  }
 }
}
