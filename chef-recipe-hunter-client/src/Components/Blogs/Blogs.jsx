import React from 'react'
import './blogs.css'

const Blogs = () => {
  return (
    <div className='blogs_1'>
        <h2 className='blog-title_1'>Blogs</h2>
        <div className='questions'>
            <h3>1. What is the differences between uncontrolled and controlled components.? </h3>
            <p><span className='span'>Uncontrolled</span> components store their own state internally and use refs to access the current value of the form elements. This is similar to traditional HTML forms.Besides Uncontrolled components are simpler and less verbose, but they can lose their reference and be affected by other sources.</p>
            <p><span className='span'>Controlled</span> components take their current value through props and notify changes through callbacks like onChange. A parent component “controls” them by managing their own state and passing the new values as props to the controlled component.Besides Controlled components are more predictable and easier to manage than uncontrolled components, but they require more code and logic</p>
        </div>
        <div className='questions'>
            <h3>2. How to validate React props using PropTypes?</h3>
            <p><span className='span'>React props</span>  are attributes that are passed from a parent component to a child component. They are used to send data and functions between components. PropTypes are a way of validating the props that a component receives to make sure they have the correct type and format. PropTypes can help prevent bugs and errors in your app by catching them early.

                To use PropTypes in React, you need to install the prop-types package using npm or yarn. Then you need to import PropTypes from ‘prop-types’ in your component file. Next, you need to define the propTypes property for your component, which is an object that specifies the type and requirement of each prop.</p>
            
        </div>
        <div className='questions'>
            <h3>3. What is difference between nodejs and express js ?</h3>
            <p><span className='span'>Node.js</span>  is a runtime environment that allows you to run JavaScript code on the server-side, using the V8 engine and various built-in modules.</p>
            <p><span className='span'>Express.js</span>   is a framework that is built on top of Node.js and provides additional features for building web applications, such as routing, middleware, templating, etc.</p>
            <p>Overall we can think of Node.js as the foundation and Express.js as one of the many tools that you can use on top of it. Node.js gives you the flexibility and power to write any kind of server-side application using JavaScript, while Express.js simplifies some common tasks and conventions for web development. You can use Node.js without Express.js, but you cannot use Express.js without Node.js</p>
            
        </div>
        <div className='questions'>
            <h3>4. What is a custom hook, and why will you create a custom hook? </h3>
            <p><span className='span'>A custom</span>  hook is a function that starts with the word “use” and can call other hooks inside it. Custom hooks allow you to reuse stateful logic between different components without changing their structure. You can create your own custom hooks for any specific purpose that you need in your application.</p>
            <p><span className='span'>I will create custom hook</span> when i have some logic that is repeated in multiple components, and i want to avoid duplication and keep my code DRY. For example, i might have a custom hook that fetches data from an API, or a custom hook that subscribes to some events, or a custom hook that manages a form state. By extracting this logic into a custom hook, i can make my components more readable and maintainable.</p>
        </div>
    </div>
  )
}

export default Blogs
