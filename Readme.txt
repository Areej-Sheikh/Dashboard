                            REACT BOILERPLATE AND JSX

{create the default react boilerplate}

STEP 1:  clean the default boilerplate
-app.jsx file --> 
    const App = () => {
    return (
        <div>
        <h1>REACT + VITE</h1>
        </div>
        );
    };
    export default App;


-main.jsx file -->   
    import { createRoot } from "react-dom/client";
    import App from "./App.jsx";

    createRoot(document.getElementById("root")).render(<App />);


STEP 2: Delete unnecessary files and code
- delete index.css, app.css
- remove title and svg from index.html
- remove assets from src
- remove vite.svg 


JSX--> Javascript and XML (extensible markup language)
- JSX  me hum javascript bhi use kar sakte hai aur XML  ki vajah se apne khud k tags bhi bana k use kr sakte hai. javascript k andar HTML likhnge.
- JSX is nothing but the consice form of HTML, CS, JS. jisse k hum ko time na lage html css aur js ko load hone me
- javascript k andar HTML likhenge
- return humesha HTML hoga

eg: app.jsx--> 
const App = () => {
    return (
        <div>
        <h1>REACT + VITE</h1>
        </div>
        );
    };

- jab apan kisi function ko call karte h JSX me toh self closing tag lagana hota h </ >
eg:  render(<App />) not render(App()) 

rafce (react arrow function component export)

EJS--> Embedded Javascript
-  HTML k andar javascript ko embedd kaarna. 


--> deploy on render website>static



INSTALLING AND SETUP TAILWIND CSS

--> installing tailwind packages
- npm install -D tailwindcss
- npx tailwindcss init

--> 2 files will be created tailwind.config.js and postcss.config.js
--> follow all the instructions in https://tailwindcss.com/docs/guides/vite

