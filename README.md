# Ng2 WebWorker Starter Pack
This is a starter pack for building Angular 2 applications with WebWorker support.
It provides a jumping off point from which you can base your project.

# Getting Started
To start clone the repo, and run `npm install`.
Then run `npm run tsc`. 
This will compile the TypeScript files, and watch for changes.
In a seperate terminal window run `npm start`. This will start up a local webserver and open your browser to the demo page.

# Modifying the app
The app runs on a WebWorker but it doesn't do anything interesting.
To make it your own start editing the component controller: `src/app/component.ts`. Here you can add your own code without fear of blocking and start playing around with WebWorkers!

# Overview
For reference, this image shows you which files runs on the WebWorker vs. the UI.
![Design Overview](http://stanford.edu/~jteplitz/angular/Starter%20Pack%20Overview.jpg)
