# Project Documentation

This document provides an overview of the CV application's data structures and deployment process.

## Data Structures

The core data models for the application are defined in the `src/app/resume/shared/` directory. These models are used to structure the content of the CV.

### User Information (`user.model.ts`)

The `User` model is the main data structure for the CV. It contains the following properties:

-   `name`: The full name of the user.
-   `title`: The user's professional title (e.g., "Software Developer").
-   `birthDate`: The user's date of birth.
-   `webPages`: An array of web pages, such as a personal website or LinkedIn profile.
-   `phone`: The user's phone number.
-   `email`: The user's email address.
-   `about`: A short bio or summary about the user.
-   `skills`: An array of the user's skills.
-   `educations`: An array of the user's educational background.
-   `experiences`: An array of the user's work experience.
-   `hobbies`: An array of the user's hobbies and interests.
-   `consent`: A consent statement for data processing.
-   `photoUrl`: A URL to the user's photo.
-   `location`: The user's location.
-   `lang`: The language of the CV.
-   `groups`: An array of skill groups.

### Education (`education.model.ts`)

The `Education` model represents a single educational entry in the CV. It has the following properties:

-   `name`: The name of the educational institution.
-   `specialization`: The field of study or specialization.
-   `from`: The start date of the education.
-   `to`: The end date of the education.
-   `title`: The degree or title obtained.
-   `description`: A description of the education.

### Work Experience (`experience.model.ts`)

The `Experience` model represents a single work experience entry in the CV. It includes the following properties:

-   `name`: The name of the company or organization.
-   `from`: The start date of the employment.
-   `to`: The end date of the employment.
-   `position`: The user's job title or position.
-   `description`: A description of the user's responsibilities and achievements.

## Deployment to GitHub Pages

The application is configured for easy deployment to GitHub Pages. The `package.json` file includes a `deploy` script that automates the process.

To deploy the application, run the following command in your terminal:

```bash
npm run deploy
```

This command will:

1.  Build the application for production with the correct base URL for GitHub Pages.
2.  Create a `404.html` file from `index.html` to handle routing for single-page applications on GitHub Pages.
3.  Add the `docs` directory (where the built application is stored) to Git.
4.  Commit the changes with a "deploy" message.
5.  Push the changes to the remote repository.

Once the deployment is complete, the CV will be available at `https://<your-github-username>.github.io/resume/`.