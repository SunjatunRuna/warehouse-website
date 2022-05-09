import React from 'react';

const Blogs = () => {
    return (
        <div className='w-75 mx-auto text-start text-secondary p-4 my-3'>
            <h5>Difference between javascript and node js.</h5>
            <p>JavaScript is a simple programming language that runs in any browser 
                JavaScript Engine. Whereas Node JS is an interpreter or running environment 
                for a JavaScript programming language that holds many excesses, 
                it requires libraries that can easily be accessed from JavaScript programming 
                for better use.</p>
            <h5>When should use node.js and when should use mongodb?</h5>
            <p>Node. js is primarily used for non-blocking, event-driven servers, 
                due to its single-threaded nature. It's used for traditional web sites and 
                back-end API services, but was designed with real-time, push-based architectures 
                in mind. SQL. NoSQL databases like MongoDB are a good choice 
                when your data is document-centric and doesn't fit well into 
                the schema of a relational database, when you need to accommodate massive scale, 
                when you are rapidly prototyping, and a few other use cases.</p>
            <h5>Differences between sql and nosql databases.</h5>
            <p>SQL databases are vertically scalable, while NoSQL databases are horizontally 
                scalable. SQL databases are table-based, while NoSQL databases are document, 
                key-value, graph, or wide-column stores. SQL databases are better for multi-row 
                transactions, while NoSQL is better for unstructured data like documents or 
                JSON.</p>
            <h5>What is the purpose of jwt and how does it work?</h5>
            <p>JSON Web Token (JWT) is an open standard that defines a compact and self-contained 
                way for securely transmitting information between parties as a JSON object. 
                This information can be verified and trusted because it is digitally signed.</p>
        </div>
    );
};

export default Blogs;