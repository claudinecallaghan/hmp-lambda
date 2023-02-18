const { SES } = require("aws-sdk");

const ses = new SES({ region: "us-east-1" });

exports.handler = async function (event) {
  const { name, email, message } = JSON.parse(event.body);

  const emailParams = {
    Destination: { ToAddresses: ["your-email@gmail.com"] },
    Message: {
      Body: {
        Text: { Data: `Name: ${name}\nEmail: ${email}\nMessage: ${message}` },
      },
      Subject: { Data: "New form submission" },
    },
    Source: "your-email@gmail.com",
  };

  try {
    await ses.sendEmail(emailParams).promise();
    console.log("Email sent successfully!");
    return {
      statusCode: 200,
      body: "Email sent successfully",
    };
  } catch (err) {
    console.log("Error:", err);
    return {
      statusCode: 500,
      body: "Error sending email",
    };
  }
};
