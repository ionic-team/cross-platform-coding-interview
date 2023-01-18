# Cross Platform Coding Interview

## Setup

1. `export NODE_OPTIONS=--openssl-legacy-provider`
1. `npm install`
1. `npm run build`
1. `npx cap sync [ios|android]`
1. `npx cap open [ios|android]`

## Background

We're going to be implementing a `ToDo` Capacitor plugin in iOS using Swift. This project is a Capacitor app built with Ionic React, don't worry if you aren't familiar with React there shouldn't be a need to modify the React app although you can add `console.log` statements or make modifications for debugging purposes.

The relevant areas of the code base are the `src` directory where the React app code resides.

### For iOS

The `ios` directory is where the iOS application resides. We'll work specifically in the `ios/App/App/ToDoPlugin.swift` file to implement the plugin on iOS.

### For Android

The `android` directory is where the Android application resides. We'll work specifically in the `android/app/src/main/java/io/ionic/crossplatform/interview/TodoPlugin.java` file to implement the plugin on Android.
