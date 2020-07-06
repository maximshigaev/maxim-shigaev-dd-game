# Digital Design frontend developer school 2020
This repository contains a training task that was fulfilled within the Frontend developer school 2020 organized by the [Digital Design company](https://digdes.ru/it-university/courses/shkola-frontend-razrabotki-saratov).

## First task

### Requirements specification
This project is the app that is sort of an analog of the Tamagotchi game. Features listed below should be implemented within it:

#### Usage of libraries and technologies:
- React
- Create-react-app
- Es6+
- Scss
- PropTypes library

#### The state of 4 parameters:
- Health(hp)
- Fatigue
- Hunger
- Thirst

#### Controls:
- Drink(-10 Thirst, -1 or 1 hp - randomly)
- Eat(- 10 Hunger, -2 or 2 hp - randomly)
- Work(-30-40 Thirst - randomly, -10-20 Hunger - randomly, +10 Fatigue)
- Rest(+1-10 hp - randomly, -1-100 Thirst - randomly, -1-100 Hunger - randomly, -10 Fatigue)

#### Extended requirements:
- User's(via Textarea field) commands in order to effect on the state with the possibility to execute several actions
- List(for each action) and the output of actions in response on click on the controls(i.e. user clicks on the "Eat" control - the output should be "You have eaten an apple")
- The separate page for the filling out the history of actions

#### Limitations:
- Components for the display of the parameters and controls should be split into the separate components

### Personal goals
- To implement the component for the user's notification in the response to actions for the interaction improvement
- To train the skill of building responsive components via React and Scss from scratch
- To use the prop-types library for the props checking 

### Usage
First of all, clone or download this repository on the local machine. After that, open the terminal and run `npm i` in order to install all necessary dependencies via NPM. Then run `npm run build` to create an optimized production build or `npm start` to open this project in the browser.
