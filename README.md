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

The email script is run daily using **GitHub Actions** with a scheduled cron job at 14:00 AM UTC.
