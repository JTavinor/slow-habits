# Slow Habits

## Table of contents

- [Introduction](#introduction)
- [Technologies](#technologies)
- [Project Status](#project-status)
- [Setup](#setup)
- [Usage](#usage)
- [Testing](#testing)

## <a name="introduction"/> Introduction

Slow habits is an app for users to build habits permanently, focussing on long-term incremental changes, rather than a wholesale overhaul of our current habits. The app will draw heavily from the book _Atomic Habits_, using the **Cue => Craving => Response => Reward** loop to create a blueprint for new habits.

Users will be able to create an account, add new habits, track their current habits, as well as viewing a daily to do list.

I am creating this project to further strengthen my skills in **React**, **Redux**, and **SASS**, alongside learning **Typescipt** and **TDD** using **Jest**.

## <a name="technologies"/> Technologies

- React
- Redux
- React-Hook-Forms
- Typescript
- Jest & Enzyme

## <a name="project-status"/> Project Status

This project is currently under development. It will eventually be connected to the API I am creating at https://github.com/JTavinor/slow-habits-api.

## <a name="setup"/> Setup

Clone this repo to your desktop (You will need node and npm installed globally on your machine) and run
`npm install`
to install all the dependencies.

## <a name="usage"/> Usage

After you clone this repo to your desktop, go to its root directory and run `npm install` to install its dependencies.

Once the dependencies are installed, you can run `npm start` to start the application. You will then be able to access it at localhost:3000

## <a name="testing"/> Testing

Part of the motivation for this project was to learn how to code in a TDD style. To this end I have written unit tests **Jest** and **Enzyme**. In order to run these tests simply run `npm test` to run the tests.
