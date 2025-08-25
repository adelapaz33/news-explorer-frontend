## News Search App

A responsive, modular React application that allows users to search for news articles, simulate authentication, and save favorite articles. Designed with scalability, accessibility, and clean architecture in mind.

## Features

- Search for articles using keyword input
- Simulated login and registration flows
- Save and view articles in authenticated layout
- Responsive design
- Modular components for cards, modals, forms, and layout


## Technologies Used

| Technology       | Purpose                                        |
| ---------------- | ---------------------------------------------- |
| React            | Component-based UI architecture                |
| React Context    | State management for layout and authentication |
| CSS Grid/Flexbox | Responsive layout and alignment                |
| JavaScript       | Logic, event handling, and API simulation      |
| SVG              | Custom icons for UI polish                     |

## Simulated Backend

Authentication and saved articles are handled using Promises and local state. This allows for testing UI flows without a live backend.

## What I Learned

One of the biggest takeaways from this project was learning how to use React Context effectively. I had previously relied on prop drilling or lifting state for component communication, but this project helped me understand how Context can simplify state management across deeply nested components.

I used Context to manage layout state, authentication flows, and conditional rendering logic. It allowed me to centralize shared state in a clean, scalable way without cluttering component hierarchies. I also explored provider patterns and custom hooks to keep the architecture modular and maintainable; however this is something I want to continue working on in future projects so I can gain more comfortability with this concept. 

This experience gave me a deeper appreciation for architectural consistency and helped me think more critically about when and how to use Context versus other state management strategies.

