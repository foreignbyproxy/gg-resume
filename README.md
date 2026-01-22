# GG-Resume

A project to generate a generic resume for job searching. To create a PDF version, run the development process, click the "PRINT" button, and save as the page as a PDF.

## Installation
If you're interested in using the template:
1. Clone the repository
1. Run `npm install`
1. Add a `.env.local` file and your information.
1. Run `npm run dev`


## Personal Information
All personal information is implemented using ENV variables. To add your personal information to the resume sidebar, add the following into a .env.local file:

```
VITE_NAME=""
VITE_EMAIL=""
VITE_PHONE=""
VITE_ADDRESS_1=""
VITE_ADDRESS_2=""
VITE_LINKEDIN_URL=""
VITE_ENS_URL=""
VITE_ENS_LABEL=""
```

*** You will need to restart the development process to update the information
