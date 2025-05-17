# Todoist Email Bot

A simple Node.js script that uses the [Todoist Javascript SDK](https://developer.todoist.com/rest/v2/?javascript#javascript-sdk) to send daily task summaries via email.

This is automated using a cron job configured through **GitHub Actions**.

---

## Features

- Fetches all active Todoist projects and tasks
- Sends a daily email summary of your tasks
- HTML-formatted email with project names and task lists

---

## Packages Used

- Todoist API
- Nodemailer (for sending emails)
- GitHub Actions (for automation)
- dotenv (for managing environment variables)

---

## Automation

The email script is run daily using **GitHub Actions** with a scheduled cron job at 14:00 AM UTC

---

## Setup
### Local Machine (Not Automated)

- Clone the repository
- Install the dependencies by running the command `npm install`
- At the root of the repository create a `.env` file:
```
 MAIL_USER_EMAIL      # This is the email address from which mails will be sent
 MAIL_USER_PASSWORD   # For gmail create an from https://myaccount.google.com/apppasswords
 MAIL_FROM            # The email address of the sender (same as MAIL_USER_EMAIL)
 MAIL_TO              # The email address of the receiver
 TODOIST_API_KEY      # Get the todoist API key from Settings -> Integrations -> Developer
```
---

### Automate Through Github Actions

- Fork the repository
- Update the cron to your preferred time under `.github/workflows/node.js.yml` (currently set to run at 14:00 AM UTC)
- In your repository, go to `Settings -> Secrets and variables -> Actions` and add the following secrets:
```
 MAIL_USER_EMAIL      # This is the email address from which mails will be sent
 MAIL_USER_PASSWORD   # For gmail create an from https://myaccount.google.com/apppasswords
 MAIL_FROM            # The email address of the sender (same as MAIL_USER_EMAIL)
 MAIL_TO              # The email address of the receiver
 TODOIST_API_KEY      # Get the todoist API key from Settings -> Integrations -> Developer
```
