# [Mindfully](https://mindfully.up.railway.app/)

> A full-stack app that encourages users to improve their mental health through mindfulness and journaling. 

<img src="/public/imgs/mindfully.gif" width="100%" />

## Features

### Welcome page
- User authentication supported using Passport.js and password encryption using Bcrypt password-hashing

### About page
- Includes information on the extra special features of Mindfully designed to enhance the user experience 

### Profile page
- Write journal entries every day either by using a blank slate or by using prompts
- The calendar provides monthly overviews for users to be able to view past journal entries 
- Randomly generated affirmations and reminders help redirect thoughts and attitudes into positive directions 

### Settings
- View all past entries. Click on a specific entry to access its full view. 
- View prompts that were created for you or by you. Create custom prompts to help guide your journaling process. 

## Built With

- MongoDB, Mongoose.js
- Node.js, Express.js
- Passport.js
- EJS, HTML5/CSS3 
- Javascript ES6
- ESlint, Stylelint
- VSCode

## Get your own copy running!

1. Navigate to the folder you would like to store the project
2. Clone the repo
   ```sh
   git clone https://github.com/alexisintech/mindfully.git
   ```
3. Switch into the directory that was just created
    ```sh
    cd mindfully
    ```
4. Install NPM packages
   ```sh
   npm install
   ```
5. Navigate to the config folder
6. Create a .env file there called `.env`
7. Enter your MongoURI string in `.env` with the key `DB_STRING`
   ```sh
   DB_STRING="<Replace everything in quotes with MongoDB Connection String>"
   ```
8. To run the application, use `npm run start` to run the app in a development environment

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

## Roadmap

- [X] Responsiveness with a mobile-first approach
- [X] Remove redundant bootstrap by using vanilla CSS classes
- [ ] "Choose year and month" prompt before displaying corresponding calendar
- [ ] Refactor calendar
- [ ] Organize all of a user's entries by month and year

See the [open issues](https://github.com/alexisintech/mindfully/issues) for a full list of proposed features (and known issues).
