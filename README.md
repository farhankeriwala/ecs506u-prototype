<h1 align='center'>
  ECS506U - Software Engineering Group Project Prototype
</h1>
<h2 align='center'>Group 48</h2>

*Group Members please note, any comments that apply to you will be in italic text*

## Installation

This app has been developed in **React JS** using **Vite** as a build tool for a faster and more efficient development environment. This means that running this app follows a slightly different process than usual. Please note Vite requires Node.js **version 18+ .20+**. 

The styling of this web application has been completed using **Tailwind CSS**.

The back-end development has been implemented using **Google Firebase** (see below).

### Creating your Vite Project

Follow these steps to create a local version of this project:

Open a terminal in your project directory, then run
```
npm create vite@latest
```
if prompted to intall the create@latest package, type "y" and press enter.

Now you should be prompted to give your app a name. Here type "./" to create a project in the current directory.

Now you will need to select the languages for development, use the arrow keys and select just "javascript".

Now you will need to run:

```
npm install
```
That's it, you have now created your development environment using Vite.

---

### Installing Tailwind CSS
To install tailwind follow these steps. Note installing tailwind for a Vite Project is different than for a create-react-app project.

First we need to install tailwind css and its peer dependencies.

```
npm install -D tailwindcss postcss autoprefixer
```

Now we need to generate our tailwind and postcss config files:

```
npx tailwindcss init -p
```

Now, inside the newly generated <code>tailwind.config.js</code> file, delete the boilerplate code and paste the following:

```
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}
```

The last step to configure tailwind is to paste the following three lines of code into the <code>index.css</code> file:
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Great! Now Tailwind CSS should now be installed and configured for your Vite project. To test it run:
```
npm run dev
```
and add some tailwind classes to your code.

---

#### Installing Packages and Dependencies

- axios
- firebase
- formik
- framer-motion
- localforage
- match-sorter
- react-firebase-hooks
- react-icons
- react-router-dom
- react-toastify
- sort-by
- yup

To install the package just run:

```
npm i <package name>
```
---

*This part is only for testing. Members do not run this, we will do this closer to the submission deadline*

Once your development environment is set up, delete the <code>src</code> directory. 

Now copy and paste the src directory from this repository into your local environment.

To get the correct tailwind configuration, delete the original <code>tailwind.config.js</code>, then copy and paste the <code>tailwind.config.js</code> file from this repository into the **root** of your project.

---

### Material UI

A number of components have been made using [Material UI](https://mui.com/material-ui/getting-started/installation/). Follow the steps from this link to install Material UI. Note, if you have installed the packages above, then do not re-install them again.

---

## Technologies Used

### Google Firebase

This project uses **Google Firebase**. Follow these steps to set up and install Firebase locally and access the shared database.

If you haven't used the above package and dependencies then you will need to install Firebase, by running the following command in your terminal:
```
npm i firebase
```

Now you may want to install the Firebase CLI tools, if you do (recomended), run the following command:
```
npm i -g firebase-tools
```

To set up the authentication, we will be first implementing a standard email and password authentication method. Then later on we will implement an SSO using Microsoft. But first, let's setu up our folder structure. 
Inside the src folder you should only have 3 files at the moment. <code>App.jsx</code>, <code>index.jsx</code> and <code>index.css</code>.

Now create the following directories **inside the src directory**:
- components
- pages
- assets
- lib
- config

Great, now we have our folder structure ready. 

All the backend configuration will go inside the config directory. All components inside the components directory, any routed pages in the pages directory, any application specific files, and any static assets such as images and svgs will be placed in the assets folder. *To get the fully implemented config function, let me know, I will send if personally.*

#### Firebase Authentication

First create a new JavaScript file <code>firebase.js</code> file in the config directory. Here we will initialise our Firebase app. The code for this can be found in firebase.js.

---

This should be the only thing you need to do to install Firebase, the rest has been implemented and abstracted within the config files in the <code>src</code> directory of this project.

### Formik

The forms in this project have been created using [Formik](https://formik.org/). This is due to the extensive form validation available with the Formik framework, ensuring efficient and robust from handling and reducing the development time. 

---

### Framer Motion

All animation seen in this project have been implemented using [Framer Motion](https://www.framer.com/motion/). This is a popular library for animations in React JS applications.

---

## Key Features
*TODO*

---

## Usage

This system has 3 primary types of users; Students, Teaching Staff and Admins. There are 4 types of admins with EE, ITL and ITS admins branching from EECS Service admins that handle EECS related services and the 4th type are EC admins that handle student EC claims. 

Each user type has a different dashboard, from where they can perform the actions assigned to them.

---

## Credits
- Farhan Keriwala
- Cristina Bicher
- Saka Samad
- Adekoyejo Adegbite
- Daryna Tsvykh
- Xinyue Hui
- Jack Bary 


<small>*Note this project is a prototype, and does not inlcude all the functionality of the proposed system</small>
