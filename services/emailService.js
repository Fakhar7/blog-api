const SibApiV3Sdk = require("@sendinblue/client");
const { EMAIL_API_KEY, MY_EMAIL } = require("../config/config");

const apiKey = EMAIL_API_KEY;

const apiInstance = new SibApiV3Sdk.TransactionalEmailsApi();
apiInstance.setApiKey(SibApiV3Sdk.TransactionalEmailsApiApiKeys.apiKey, apiKey);

const sendEmail = async (user, link) => {
    try {
        const sendSmtpEmail = {
            to: [
                {
                    email: user.email,
                    name: user.username,
                },
            ],
            sender: { email: MY_EMAIL, name: "/.MFS" },
            subject: "Password Forget",
            htmlContent: generateHTML(link, user),
            params: {
                NAME: user.username,
            },
            headers: {
                "X-Mailin-custom": "custom-header",
            },
        };

        const response = await apiInstance.sendTransacEmail(sendSmtpEmail);
        return response;
    } catch (ex) {
        return ex;
    }
};

function generateHTML(link, user) {
    return `
    <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Password Email Template</title>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    background-color: #f4f4f4;
                    color: #333;
                    padding: 20px;
                }
                .main {
                    background-color: #ffffff;
                    padding: 20px;
                    border-radius: 8px;
                    max-width: 600px;
                    margin: auto;
                    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
                }
                .header {
                    text-align: center;
                    padding-bottom: 20px;
                }
                .button {
                    display: inline-block;
                    padding: 10px 20px;
                    background-color: #007bff;
                    color: #fff;
                    text-decoration: none;
                    border-radius: 5px;
                    margin-top: 20px;
                }
                .footer {
                    text-align: center;
                    font-size: 12px;
                    color: #888;
                    padding-top: 20px;
                }

                p {
                    color: #222;
                }
            </style>
        </head>
        <body>
            <div class="main">
                <div class="header">
                    <h2 style="color: #222;">Reset Password</h2>
                </div>

                <p>Hi ${user.username},</p>
                <p>We received a request to reset your password. Please click the button below to reset your password:</p>
                <a href="${link}" style="color: #fff;" class="button">Reset Password</a>

                <p>If you didn’t request a password reset, you can safely ignore this email.</p>

                <p>If you have any questions or need further assistance, please feel free to contact me at:</p>
                <p><strong>Email:</strong> umerfakhar5@gmail.com</p>
                <p><strong>Whatsapp:</strong> (+92) 3258661922</p>

                <div class="footer" style="color: #222;">
                    <p>Thank you for using our service!</p>
                </div>
            </div>
        </body>
    </html>

    `;
}

module.exports = sendEmail;
