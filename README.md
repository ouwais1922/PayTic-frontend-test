# PayTic-frontend-test

![image](https://github.com/ouwais1922/PayTic-frontend-test/assets/72993155/e492584d-d127-4e15-b8d1-03783c5e3459)

This is a web application built using React.js, Tailwind CSS. It allows users to drag and drop items between two drop zones,
preserving input values for each item. Once the user is done making changes, they can save the items, which will be displayed
in a table below the drop zones.

##Technologies and Enablers:

  - React.js: A JavaScript library for building user interfaces. React.js provides a component-based architecture and efficient rendering, allowing for a seamless user experience.
  - Tailwind CSS: A utility-first CSS framework that provides a set of pre-designed classes. Tailwind CSS enables rapid and flexible UI development by promoting a functional approach to styling.
  - I opted not to use react-dnd in this project as I hadn't used it in a while. Instead, I relied on pure React logic, acknowledging that react-dnd abstracts away certain complexities. I chose to work directly with React to maintain a more hands-on approach and better understand the underlying logic involved.

##How to Run:
    
    1-Clone the repository:
    
    git clone https://github.com/ouwais1922/PayTic-frontend-test
    
    2- Install the dependencies using a package manager such as npm or yarn:
    
    npm install
    
    3- Start the development server:
    
    npm start
    
    4- Open your web browser and visit http://localhost:3000 to view the application.
    
## Running Using docker:

    docker build -t PayTic
    
    Then run the image to get your container. Hence, you will be able to start Paytic container
    
## Additional information:


  Redux can be beneficial in this application for managing the application state and enabling communication between different components. Here are a few ways Redux can help:

  1- Centralized State Management: Redux provides a global store where I could store and manage the state of my application. Instead of passing data through multiple layers of components using props, Redux allows to access the state from any component in a more straightforward manner. This centralized approach simplifies state management and makes it easier to understand and debug the application's behavior.

  2- Sharing State Between Components: With Redux,We can define specific slices of state that are relevant to different parts of your application. Components can subscribe to specific parts of the state and receive updates when those parts change. This enables efficient sharing of state between components that may not have a direct parent-child relationship.

  3- Reducing Prop Drilling: Prop drilling refers to the process of passing data down through multiple layers of components. It can become cumbersome and error-prone as the application grows. Redux helps mitigate this issue by providing a clean and efficient way to access shared state without explicitly passing it through intermediate components.

