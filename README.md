# Cross Platform Coding Interview

## Setup

1. `npm install`
1. `npm run build`
1. `npx cap sync [ios|android]`
1. `npx cap open [ios|android]`

## Background

We're going to be implementing a `ToDo` Capacitor plugin. 
This project is a Capacitor app built with Ionic React, don't worry if you aren't familiar with React there shouldn't be a need to modify the React app although you can add `console.log` statements or make modifications for debugging purposes.

The relevant areas of the code base are the `src` directory where the React app code resides, and in the `plugins` directory where you can find the `ToDo` plugin.

### App Developement

#### For iOS

The `ios` directory is where the iOS application resides. You can run the `npx cap open ios` command to open the project in Xcode.

#### For Android

The `android` directory is where the Android application resides. You can run the `npx cap open android` command to open the project in Android Studio.

### Plugin Development

The plugin is available under the `plugins` directory. To ensure you have everything in place to create the plugin, you can run the `npm install` inside the `plugins/ToDoPlugin` directory.

#### For iOS

The `ios` directory is where the iOS implementation resides. We'll work specifically in the `ios/Sources/ToDoPlugin.swift` file to implement the plugin on iOS.

#### For Android

The `android` directory is where the Android implementation resides. We'll work specifically in the `android/app/src/main/java/io/ionic/crossplatform/plugins/todo/ToDoPlugin.java` file to implement the plugin on Android.

#### For Web

The `src` directory is where the Web implementation resides. We'll work specifically in the `src/web.ts` file to implement the plugin for Web.

### Testing

To test your changes in the plugin in the context of the app, you will have to run the `npm run build` command in the plugin directory before rebuilding the app. This will ensure the app will use your most recent changes.

## Goal

Successfully implement and deliver a well-structured mobile application using the Ionic Framework and Capacitor, reflecting a high standard of development.