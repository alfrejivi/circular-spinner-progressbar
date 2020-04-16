# Circular Spinner/ProgressBar

Circular Spinner/ProgressBar React Component. [Live Demo](https://alfrejivi-spinner.netlify.app/)

## Description

It's built using `React + Typescript`, `React Hooks` for state management and `Jest + Enzyme` for testing.

The main component `<Spinner />` is located in the `src/components/Spinner` folder.

Please find a basic implementation of the `<Spinner />` component in the `src/views/App.tsx` file. It's simulating a loading time with a simple `setTimeout` in order to display the `<ProgressWidget />` component with the main functionality.

In the `src/components/ProgressWidget/ProgressWidget.tsx` file, you will find another simulated loading time for a progress bar, this time using a `setInterval`. Also, you'll find the `start/pause`, `enable/disable spin`, and a `reset` actions.


## Installation

Clone the repository and run:
```bash
yarn
```

## Usage

```bash
yarn start
```

## Tests

```bash
yarn test
```

## API

#### &lt;Spinner />

The component accepts the following props:

|Name|Type|Deafult|Description
|:--|:-----|:-----|:-----|
|**`fill`**|number|10|Percentage % filled
|**`showPercentage`**|boolean|false|Show percentage label
|**`radio`**|number|45|Radio of the spinner
|**`color`**|string|'#409fff'|Primary color
|**`backgroundColor`**|string|'#e8ebed'|Non-filled color
|**`spin`**|boolean|true|Spin animation
|**`stroke`**|number|5|Line stroke thickness

## Contact

Freddy Jimenez

[alfrejivi@gmail.com](mailto:alfrejivi@gmail.com)

[alfrejivi.com](https://alfrejivi.com)

[Linkedin](https://www.linkedin.com/in/alfrejivi/)


## Other info

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
