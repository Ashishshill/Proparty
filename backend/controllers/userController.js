// @decs     Auth user/set token
// route     Post api/user
// Access    Public
const authUser = (req, res) => {
    res.status(200).json({message: "Auth user"})
}

export {
    authUser
}