# GitHub Explorer App

Link to live preview: https://apex-github.netlify.app

##  GitHub Explorer App Description

This app was developed using React + TypeScript, that allows users to search for repos, as well as issues and pull requests, and filter through the results based on certain properties.

##  Installation

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes. 

### System Requirements
#### Browser
- Google chrome


### Installation Instructions

1. Clone the Repository with `git clone https://github.com/dev-newton/apex-test.git` and run

```
cd apex-test
yarn
```

### Running the project
Ensure you are in the root of the project and run
```
yarn dev
```

### Testing
No tests were included at this time.


### A few 3rd Party Dependencies
- Axios
  - Automatic Transformations Of JSON Data
  - Better Error Handling
  - Wider Range Of Supported Browsers
 
- Redux/Redux Persist
  - Manage and persist state
  
- SASS
  - Fewer codes so you can write CSS quicker
  - Compatible with all versions of CSS
  - Facilitates you to write clean, easy and less CSS in a programming construct


### Best Practices Followed
-  Absolute Imports: I made use of Absolute Imports as it makes the code cleaner and easier to write, makes it easy to locate a file or component imported due to absolute positioning, and removes the unneccessary need for `../../../`.
-  Clean app folder structure/architecture
-  Seperation of concerns: separated UI from logic to make code cleaner, reusable, easier to track bugs
-  Hooks: made use of both react hooks and custom built hooks to enable re-usability of stateful logic
-  Functional programming: followed functional programming principles.
-  Regarding comments: I have a belief that if you have to add a comment, then maybe that code should be refractored in a way that is easier to understand. So basically, code in a way that's easier to understand so you dont have to add comments, unless of course its really necessary.


### Issues i faced
- I had issues with writing enough tests because I really didn't want to spend so much time on the challenge and i got stuck for some time, so I had to ignore it
- I tried to implement SWR, but for some reason, I wasn't able to due to loads of errors (really confusing), so I had to fallback to redux and redux persist for state management.


### Possible Improvements
This was a reall lovely project to work on, and if given the opportunity, i would add a few things such as:
- Manage app state using SWR/React Query
- Ability to sort repos/issues in asc/desc order
- Infinite Scrolling for repos/issues
- Loading skeleton
- Responsiveness
- Writing tests with Jest/Cypress
- UI/UX improvements



