import React from 'react';
const Blogs = () => {
    return (
        <div>
            <div className="card bg-accent w-5/6 mx-auto text-white">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">What are the different ways to manage a state in a React application?</h2>
                    <p>1. URL - Keeping such data in the URL allows users to share deep links with others.It is recommended to avoid storing such information in the app’s state to avoid the URL in our app getting out of sync. The URL should be used as the system of record, Read from it as needed for information related to sorting, pagination, etc. Update the URL as required when the settings change<br>
                    </br>2. The second option is to store the state in the browser via web storage. This is useful when we want to persist state between reloads and reboots. Examples include cookies, local storage, and IndexedDB. These are native browser technologies. <br></br>3. The third option is to use store state locally. It is useful when one component needs the state. Examples include a toggle button, a form, etc. <br></br> 4. The Fourth option is to define the state in the parent component. Often, the same state is used across multiple components. In those cases, it is useful to lift the state to a common parent. The lifting state is a two‑step process. First, we declare the state in a common parent component, and then we pass the state down to child components via props. This pattern should be considered any time a few related components need to use the same state. The lifting state avoids duplicating states in multiple components. It helps to assure that our components all consistently reflect the same state. 5. The fifth option is to compute the new state based on the available state and we do not need to declare a state at all. If there are existing values that can be composed to give us the information we need, then we can calculate that information on each render instead of storing it. Some examples include calling .length on an array to determine the number of records instead of storing a separate numItems variable in the state or deriving an errorsExist boolean by checking if the errors array is empty.</p>
                </div>
            </div>

            <div className="card bg-accent w-5/6 mx-auto mt-10 text-white">
                <div className="card-body items-center text-center">
                    <h2 className="card-title"> How does prototypical inheritance work?</h2>
                    <p>Every object with its methods and properties contains an internal and hidden property known as [[Prototype]]. The Prototypal Inheritance is a feature in javascript used to add methods and properties in objects. It is a method by which an object can inherit the properties and methods of another object. Traditionally, in order to get and set the [[Prototype]] of an object, we use Object.getPrototypeOf and Object.setPrototypeOf. Nowadays, in modern language, it is being set using __proto__.</p>
                </div>
            </div>
            <div className="card bg-accent w-5/6 mx-auto mt-10 text-white">
                <div className="card-body items-center text-center">
                    <h2 className="card-title"></h2>
                    <p>A unit test is a way of testing a unit - the smallest piece of code that can be logically isolated in a system. In most programming languages, that is a function, a subroutine, a method or property. The isolated part of the definition is important.Well-written unit tests act as documentation for your code. Any developer can quickly look at your tests and know the purpose of your functions.It simplifies the debugging process.
                        Unit testing is an integral part of extreme programming. Extreme programming is basically a “test-everything-that-can-possibly-break” programming strategy.
                        Unit tests make code reuse easier. If you want to reuse existing code in a new project, you can simply migrate both the code and tests to your new project, then run your tests to make sure you have the desired results.Unit testing improves code coverage. A debatable topic is to have 100% code coverage across your application.Unit tests save time and money. Usually, we tend to test the happy path more than the unhappy path. If you release such an app without thorough testing, you would have to keep fixing issues raised by your potential users. The time to fix these issues could’ve been used to build new features or optimize the existing system. Bear in mind that fixing bugs without running tests could also introduce new bugs into the system.</p>
                </div>
            </div>

            <div className="card bg-accent  w-5/6 mx-auto mt-10 text-white">
                <div className="card-body items-center text-center">
                    <h2 className="card-title">React vs. Angular vs. Vue?</h2>
                    <p> Angular vs React: If the choice you’re making is based on Angular vs React alone, then you'll simply need to consider the pros and cons discussed for those libraries in this post. But overall, keep in mind that both libraries can be used for mobile and web apps, while Angular is generally better for more complex apps that are enterprise-ready.

                        React often requires extra modules and components, which keeps the core library small, but means there's extra work involved when incorporating outside tools. Angular, on the other hand, is more of a full-fledged solution that doesn't require extras like React often does, though it does have a steeper learning curve for its core compared to React.

                        React is more suitable for intermediate to advanced JavaScript developers who are familiar with concepts from ES6 and up, while Angular favors those same developers who are also familiar with TypeScript. <br></br> React vs Vue:
                        The choice between React vs Vue is often debated and it’s not an easy one. Vue has a vibrant and ever-growing community and has taken over popularity vs. React in many respects. React developers are still churning out lots of new components and extras, so there's no sign that React is on the decline either.

                        Vue is generally more suited to smaller, less complex apps and is easier to learn from scratch compared to React. Vue can be easier to integrate into new or existing projects and many feel its use of HTML templates along with JSX is an advantage.

                        Overall, Vue might be the best choice if you’re a newer developer and not as familiar with advanced JavaScript concepts, while React is quite well suited for experienced programmers and developers who have worked with object-oriented JavaScript, functional JavaScript, and similar concepts. <br></br> Angular vs vue:
                        In most cases, you probably wouldn’t be deciding between only Angular and Vue. They are vastly different libraries with very different feature sets and learning curves. Vue is the clear choice for less experienced developers, and Angular would be preferred for those working on larger apps.

                        A large library like Angular would require more diligence in keeping up with what’s new, while Vue would be less demanding in this regard and the fact that the two most recent major releases of Vue are in separate repositories helps.

                        It should also be noted that Vue was created by a developer who formerly worked on Angular for Google, so that’s another thing to keep in mind, though that wouldn’t have a huge impact on your decision.</p>
                </div>
            </div>



        </div>
    );
};

export default Blogs;