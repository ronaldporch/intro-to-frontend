// HTML, CSS and Javascript on the front end

// What is HTML?

HTML is the foundation of your page. Think of it like structure/walls of a house

<p>Hello!</p> // would show Hello! on the screen as a paragraph

<h1>My App</h1> // would show My App as a large header

// Basic app

<!DOCTYPE html>
<html>
<head>
<title>Page Title</title>
</head>
<body>

<h1>This is a Heading</h1>
<p>This is a paragraph.</p>

</body>
</html>

// the div tag
// used for division of apps

<div>
    <p>Navigation</p>
</div>
<div>
    <p>Your Posts</p>
</div>

// the a tag
// used for links

<a href="https://google.com">Google</a> // notice the href attribute

// li/ul/ol tags
// used for lists with bullets or numbers

<li>
  <ul>Red</ul>
  <ul>Blue</ul>
  <ul>Green</ul>
</li> # this would show a bulleted list of colors

<li>
    <ol>Red</ol>
    <ol>Green</ol>
    <ol>Blue</ol>
</li> # same list, but with numbers incrementing from 1 to 3

// emphasizing content

<i>Italics</i>
<em>Italics</em> // both will show italic text

<b>Bold</b>
<strong>Bold</strong> // both with show bold text

// images
<img src="pic_trulli.jpg" alt="Italian Trulli">

// classes and ids
// special attributes used for styling with css

<h1 class="page-header">My Page</h1>
<h1 class="page-header">Your Page</h1>

```css
.page-header {
  color: blue;
}
```

// class names work a little differently in react. Will cover later

<h1 id="specific-title">Title</h1>

```css
#specific-title {
  font-size: 100px;
}
```

More reading on HTML: https://www.w3schools.com/html/default.asp

// What is CSS

CSS is used for styling your app. Think of it as paint on your walls for your house.

// CSS can look different in react, but we'll start here
// basic example

p {
font-size: 10px
}

.class {
color: blue;
background-color: black
}

#id {
padding: 10
}

// some important properties

// font-size
Does what it says

// margin vs padding
Thinking of a rectangle, padding is spacing INSIDE the rectangle from the edge in, margin is spacing OUTSIDE from the edge out

.box {
margin: 10px;
padding: 20px;
}

// can also do it just on one side

.box2 {
margin-top: 10px;
padding-right: 20px;
}

// height and width
sets and absolute height and width for a tag

<div class="navigation">
    Navigation
</div>
.navigation {
height: 100px;
width: 500px;
}

// max-height and max-width
sets maximum size for a tag

.box {
max-height: 200px;
max-width: 700px;
}

// min-height and min width
Same, except minimum

.box {
min-height: 50px;
max-height: 100px;
}

// More reading on css: https://www.w3schools.com/css/default.asp

// React
Javascript Library for making reactive Single Page Applications
Only going over the basics for right now. Will go into more detail later

React allows you to create HTML and CSS from Javascript.

const Home = () => {
return <div>Home</div>
}

// using components
const App = () => {
return <div>
<Home/> // self-closing

</div>
}

The flavor of HTML we're using here is called JSX. Not super important. Just know you get HTML out at the end.

React apps are made of what we call Components.
Components can use variables.

const Greeting = () => {
const name = 'Ronald'
return <p>Hello {name}</p> // this uses a special syntax for using variables in JSX
}

Components can also use state

import { useState } from 'React' // different way to import generally used in react apps

const Greeting = () => {
const [name, setName] = useState('Ronald') // we are creating state, and a function to update state, while also giving it a default state of 'Ronald'
return <p>Hello {name}</p>
}

Components can also use properties passed to them

const Greeting = ({ name, lastName }) => {
console.log(lastName)
return <div>Hello {name}</div>
}

const App = () => {
return <Greeting name="Ronald" lastName="Porch" />
}

// props vs state
State is just data used directly in a component. Props is data or state that is passed to other components.

// updating state
import { useState } from 'React'
const Greeting = () => {
const [name, setName] = useState('Ronald')
const updateName = (e) => setName(e.target.value)
return <div>

  <p>Hello {name}!</p>
  <input value={name} onChange={updateName} />
  </div>
}
