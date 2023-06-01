# JSS Starter For Component Library

This starter Nextjs JSS project is meant to integrate directly with a Sitecore environment in a Sitecore-first development workflow, but also includes Storybook 7 as a way to build components with mock data in addition to using Storybook for its intended documentation purpose. Additionally, it's been configured with Tailwind for styling and Jest and React Testing Library for unit tests, and a baseline approach to extending JSS type definitions, along with other opinionated configuration decisions.

## Getting started

1. `npm install`
2. `npm run storybook`
3. **Future:** `npm run start:connected` (requires XM Cloud or remote Sitecore 10.3 instance).

## Running Tests

1. `npm run test`

## Configuration Requirements

This repository is specifically designed for Horizontal Internal Component Library.
While creating branches kindly make sure you are following the conventions listed in husky.You can see the configuration in this folder (.husky/pre-prepush)

1 . Node version : 16 above (LTS version preferred)

2 . Open Your System Terminal and run the following command

step 1 :
sudo nano /private/etc/hosts

step 2 :
52.149.129.23 sc-basic-learningsc.dev.local  
52.149.129.23 sc-basic-learningidentityserver.dev.local

3. npm run start:connected (You will be able to see the mock data in console)
