const password = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
const email = /^[A-Za-z0-9._]*@[A-Za-z0-9._]*[.]{1}[A-Za-z0-9._]*$/
module.exports = {
    password,
    email,
}