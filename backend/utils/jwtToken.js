export const sendToken = (user, statuscode, res, Message) => {
    const token = user.getJWTToken();

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production'
};

res.status(statusCode).cookie("token", token, options).json({
    success: true,
    user,
    Message,
    token,
});
};