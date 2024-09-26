# Job Application Form

This is a simple web-based job application form built using HTML, CSS, and JavaScript. It allows applicants to input their details, check if their skills match the job requirements, and automatically generate an email to the HR team.

## Features

- Collects applicant information such as name, skills, job type, application type (Job/Internship), expected salary/stipend, and resume link.
- Matches the entered skills with the required skills for the selected job type.
- Alerts the user if their skills do not match the required skills for the job role.
- Automatically generates a pre-filled email with all the details to be sent to the HR team.
  
## Technologies Used

- HTML
- CSS
- JavaScript

## How it Works

1. The user fills out the application form, including their name, skills (comma-separated), the type of job they are applying for, the expected duration, expected salary/stipend, and a link to their resume.
2. The form checks whether the skills entered by the user match the required skills for the chosen job type.
3. If the skills do not match, the user is alerted, and they cannot proceed.
4. If all fields are valid, the form generates an email using the `mailto` protocol, pre-filling the subject and body of the email with the user’s information.
5. The email includes all relevant details, such as the user's name, job type, skills, expected duration, and resume link.

## Job Types and Required Skills

The application form currently supports the following job types and their corresponding required skills:

- **Software Development**: Java, Python, C++, Secure Coding
- **Website Development**: HTML, CSS, JavaScript, Secure Web Development
- **Cyber Security**: Penetration Testing, Network Security, Firewall
- **Application Developer**: Java, Swift, Kotlin
- **Frontend Developer**: React, JavaScript, HTML, CSS

## How to Use

1. Clone the repository or download the files.
2. Open `index.html` in your web browser.
3. Fill out all the fields in the form.
4. Click on the "Apply" button.
5. If your skills match the required skills for the job type, an email window will open, ready for you to send the application.
6. Review the pre-filled email and click "Send" in your email client.

## Example

If you are applying for a **Frontend Developer** role, and you have skills like `react`, `html`, and `javascript`, the form will match your skills to the required skills for the role and generate an application email.

## Installation

1. Clone this repository:
   ```bash
   git clone https://github.com/your-username/job-application-form.git
