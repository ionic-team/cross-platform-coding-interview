# Cross Platform Coding Interview

## Setup

1. `npm install`
1. `npm run build`
1. `npx cap sync ios`
1. `npx cap open ios`
1. `npm install -g @ionic/cli`
1. `ionic serve --no-open`

## Background

We're going to be implementing a `ToDo` Capacitor plugin in iOS using Swift. This project is a Capacitor app built with Ionic React, don't worry if you aren't familiar with React there shouldn't be a need to modify the React app although you can add `console.log` statements or make modifications for debugging purposes.

The relevant areas of the code base are the `src` directory where the React app code resides and the `ios` directory where the iOS application resides. We'll be mostly working in the `ios/App/App/ToDoPlugin.swift` file to implement the plugin.

You're interviewer will prompt you with the rest of the information you need to complete the exercise.
