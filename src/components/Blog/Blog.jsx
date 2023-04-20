import React from 'react';
import "./Blog.css";

const Blog = () => {
    return (
        <div>
            <div>
                <h2>1.When we use Context API?</h2>
                <p>you can use the Context API when you have data or state that needs to be shared across multiple components</p>

            </div>
            <div>
                <h2>2.What is coustom hook </h2>
                <p>you can use the Context API when you have data or state that needs to be shared across mult</p>

            </div>
            <div>
                <h2>3.What is useReff and its work</h2>
                <p>useRef is a built-in React hook that provides a way to create a mutable reference to a value that persists across re-renders of a component. It returns a plain JavaScript object with a single property called current, which can be used to store and access a value.</p>
            </div>
            <div>
                <h2>4.What is useMemo and its work?</h2>
                <p>useMemo is a React Hook that allows you to optimize the performance of your React application by memoizing the result of a function.The useMemo hook takes a function as its first argument, which is the function that will be memoized. The second argument is an array of dependencies that the function depends on. If any of the dependencies change, the function will be re-executed and the memoized value will be updated. </p>
            </div>
        </div>
    );
};

export default Blog;