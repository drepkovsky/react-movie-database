# React movie database (RMD)

React movie database is a single page application build with **create react app**.

Movies are fetched from OMDb API.

RMD uses **Material UI** as its main component library

Search results are stored in **redux** and also **cached** by their search query.

**Redux Saga** is responsible for all side effects like fetching movies by search or id.

Although **react-router-dom** is used as an routing option for this project, project structure was build with **MULTIPLE FRAMEWORK COMPATIBILTY IN MIND**.
Therefore pages are separated by directories in the pages folder. Thanks to this approach moving the project to framework like Next or Gatsby should be easier.

For project simplicity any design system patterns like atomic or module design are not used.

1.All reusable components are stored in *components* folder and are used as main building blocks of this project.

2.Every page serves route and data-layer purpose. (data is being selected from store, and actions dispatched only on this level) and is stored in *pages* folder.

3.Templates receive data from pages and orchestrate them between components. Template holds the whole page together and represents its shape. Event callbacks are passed from templates back to the page layer where they are accordingly handled. Templates are stored in *templates* folder.


## HOW TO RUN

1. Fork this project
2. ```cd react-movie-database```
3. ```yarn install``` or ```npm install```
4. ```yarn start``` or ```npm start```


## Deployment

App is also deployed to Vercel and is being continuously integrated on and deployed to Vercel on each push to ```main``` branch.

LINK: [React Movie Database](https://react-movie-database.vercel.app/)
