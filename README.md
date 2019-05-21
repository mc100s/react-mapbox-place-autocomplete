# React Mapbox Place Autocomplete

This project is to show an example on how to create an input to auto complete places with Mapbox. 

You have an demo here: WIP

## How to reuse autocomplete in my project?

### Go to Mapbox to retrieve an API key

First, you need to make sure you have an account on Mapbox and you need to retrieve your API key [here](https://account.mapbox.com).

### Add the API key to `.env`

Then, in the React folder, you need to create a file `.env` like this:
```
REACT_APP_MAPBOX_API_KEY=YourApiKey
```

### Install `axios`

Then, make sure that axios is installed in your project. If not, you can simply type:
```
$ npm i axios
```

### Copy/paste the code of `Autocomplete`

Then, you can copy/paste the two files `src/Autocomplete.jsx` and `src/Autocomplete.css`. 

Feel free to change the code. For example, you can change the timeout of 1000ms is `Autocomplete.jsx` or you can change the CSS.

### Use the component `Autocomplete`

Finally, wherever you want in your React application, you can use the component `Autocomplete`, for example like this:

```js
<Autocomplete onSelect={place => console.log(place)} />
```

