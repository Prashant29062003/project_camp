import Mailgen from "mailgen";

const emailVerificationMailgenContent = (username, verficationUrl) => {
    return {
        body: {
            name: username,
            intro: "Welcome to our App! we are excited to have you on board.",
            action: {
                instruction: "To verify your email please click on the following button",
                button: {
                    color:  "#1aae5aff",
                    text: "Verify your email",
                    link: verficationUrl
                }
            },
            outro: "Need help, or have questions? Just reply to this emial, we'd love to help."
        }
    }
}

const forgotPasswordMailgenContent = (username, passwordResetUrl) => {
    return {
        body: {
            name: "Forgot Password",
            intro: "We got a request to reset the password of you account.",
            action: {
                instruction: "To reset your password please click on the following button or link",
                button: {
                    color:  "#89e2b0ff",
                    text: "Reset password",
                    link: passwordResetUrl
                }
            },
            outro: "Need help, or have questions? Just reply to this emial, we'd love to help. | Sign in"
        }
    }
}

export {emailVerificationMailgenContent, forgotPasswordMailgenContent}