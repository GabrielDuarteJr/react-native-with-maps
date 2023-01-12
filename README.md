# react-native-with-maps

An example of using the google maps api in a react native application.

## Setup

## Prerequisites

### Installation Google Maps Api

- Create the `.env` file in the root of the project and insert your Android SDK api key in the `GOOGLE_MAPS_APIKEY` variable, as in the `.env.example` file.

- Setup the `react-native-maps` in native projects.

[https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md](https://github.com/react-native-maps/react-native-maps/blob/master/docs/installation.md)

### Installation

- run `yarn install` and for ios: `cd ios` and `pod install`.

### Run on Device

- run `yarn android` or `yarn ios` to run on device or emulator.

### Run unit tests

- run `yarn jest`.

#### Project Structure

```
    /android                - android native project source code

    /ios                    - ios native project source code

    /src
        /assets             - all icons and images
        /components         - react native components
        /contexts           - global state contexts
        /routes             - all screen routes
        /screen             - all screens
        /types              - global type settings
        /utils              - project utilities

    /App                    - project root file

```
