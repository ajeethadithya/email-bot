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

## Local Setup

- Clone the repository
- Install the dependencies by running the command `npm install`
- At the root of the repository create a `.env` file

## Automate Through Github Actions

- Fork the repository
- Go to repository Settings -> `Secrets and variables -> Actions`
- Add the following secrets:
  ```
  MAIL_USER_EMAIL
  MAIL_USER_PASSWORD
  MAIL_FROM
  MAIL_TO
  TODOIST_API_KEY
  ```

---

## Automation

The email script is run daily using **GitHub Actions** with a scheduled cron job at 14:00 AM UTC.
