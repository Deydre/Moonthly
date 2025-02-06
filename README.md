<!-- <p align="center">
  <img src="https://cdn.iconscout.com/icon/free/png-512/free-moon-icon-download-in-svg-png-gif-file-formats--half-night-star-weather-pack-icons-15583.png?f=webp&w=256" alt="Moonthly Logo" width="50"/>
</p> -->

# Moonthly (Work in Progress)

## About Moonthly

Moonthly is a web application that allows you to track your leisure activities and get a comprehensive monthly overview of your hobbies. The goal is **not** to mark exactly when you finish a movie, videogame, book, or any other activity, but rather to capture a holistic view of what you've been doing throughout the year and over the months.


#### ❌ **Not a completion tracker**
- It doesn't track when you finish a movie, game, or book.

#### ✅ **A global overview of your monthly activities**
- It helps you get a comprehensive view of the activities you've engaged in during each month.

## Overview and examples

Moonthly focuses on representing your engagement over time. For example:

> You spent the entire month of January playing *The Curse of Monkey Island* and only finished it on February 1, January will still be primarily associated with *The Curse of Monkey Island*. This approach helps you see the broader picture of your year, rather than just the exact moment you completed an activity.

## Features
- ✏️ **Activity Management:** Easily create, edit, and delete activities to keep your records up-to-date.
- 🌞 **Holistic Activity Tracking:** Record a wide range of activities—from movies and games to books and more—without focusing on specific completion dates.
- 📅 **Monthly Activity Overview:** Visualize and reflect on the leisure activities you engaged in throughout each month.
- 😎 **Insightful Yearly Summary:** Understand how your interests evolve over the year and which activities define each period.

## Tools Used

<div style="display: flex; gap: 4px;">
  <img src="https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB" alt="React">
  <img src="https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white" alt="SASS">
  <img src="https://img.shields.io/badge/firebase%20auth-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34" alt="Firebase Auth">
  <img src="https://img.shields.io/badge/cloud%20firestore-a08021?style=for-the-badge&logo=firebase&logoColor=ffcd34" alt="Cloud Firestore">
</div>

## Roadmap

- 🔒 **User authentication**
    - [x] Firebase Auth (Email + Password) 
    - [x] Firebase Auth (Google)
    - [x] Sign up, login and logout from Moonthly
    - [x] Active session management

- 🔑 **User validation**
    - [ ] Strengthen the validation
    - [ ] Make the Firebase validation match web validation

- 🛠️ **User own management**
    - [ ]  Study the feasibility of allowing users to have a profile image and edit their name and image
    - [ ] Allow users to delete their own account and data

- 📂 **Activity database**
    - [x] Connect user account with database by unique ids
    - [x] Create structure for database in order to fit the frontend idea

- ✏️ **Activity management**
    - [x] When a user creates a new account, a record is created in Firestore with their UID, and some example items are associated with their account
    - [x] Allow users to delete items one by one
    - [ ] Allow users to create items one by one*
    - [ ] Allow users to edit items one by one*

    *Currently, items are created and edited manually from Firestore

- 📅 **Activity visuals**
    - [x] Allow users to see their own items (name, image, tag)
    - [x] Structure items by months 
    - [ ] Structure items by years*

    *Currently, only 2025 is visible.

- 🎨 **UX/UI**
    - [x] Create a solid UI base
    - [x] Choose fonts and color palette
    - [ ] Welcome the user when is logged
    - [ ] Pulish UI once structure is finished

- 📱 **Responsive design**
    - [ ] Responsive design for tablets
    - [ ] Responsive design for mobiles

- 🚀 **In the future**
    - [ ] Month and anual statictics
    - [ ] Allow users to share their activity statistics


## Structure
```
MOONTHLY
├── 📁 firebase
│   └── 📄 firebaseConfig.js
│
├── 📁 src
│   ├── 📁 components
│   │   ├── 📁 commons
│   │   ├── 📁 Footer
│   │   ├── 📁 Header
│   │   └── 📁 Main
│   │
│   ├── 📁 context
│   ├── 📁 styles
│   ├── 📄 App.jsx
│   └── 📄 main.jsx
│
├── 📄 .gitignore
├── 📄 eslint.config.js
├── 📄 index.html
├── 📄 package-lock.json
├── 📄 package.json
├── 📄 README.md
└── 📄 vite.config.js