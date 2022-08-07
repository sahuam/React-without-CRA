# Create a React project without using create-react-app!

### Pre-requisite

#### a. Node JS installed

#### b. NPM installed

#### c. VSCode installed

### 1. npm init

Use `npm init` to create package.json file.

### 2. Install packages using npm.

#### 2.a Install Webpack packages

`npm i --save-dev webpack webpack-cli webpack-dev-server`

#### 2.b Install babel packages

`npm i --save-dev babel-loader @babel/preset-env @babel/core @babel/plugin-syntax-dynamic-import @babel/plugin-transform-runtime @babel/preset-react babel-eslint @babel/runtime`

#### 2.c Install React packages

`npm i react react-dom`

#### 2.d Install Html Webpack plugin

`npm i --save-dev html-webpack-plugin@4`

#### 2.e [OPTIONAL] Install Eslint package

`npm i --save-dev eslint eslint-config-airbnb-base eslint-plugin-jest eslint-config-prettier`

### 3. Create Files and Folders in the project root.

#### 3.a public folder under root folder

#### 3.b index.html under public/ folder

#### 3.c index.js under root folder

#### 3.d .babelrc under root folder

#### 3.e webpack.config.js under root folder

### 4. Configure `webpack.config.js` and `.babelrc`

### 5. Add content in `public/index.html` and `/index.js`

### 6. Update scripts in `package.json`

### 7. Run the below command to start the application.
1. npm run build
2. npm run dev

url - [`http://localhost:3000/`](http://localhost:3000)

### References
