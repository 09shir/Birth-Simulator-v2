# Birth Simulator

![FOTP](./public/img/doge.ico)

If you were to reborn, which country would you be born at?

The project calculates chances of giving birth at each country using countries' total population and birthrate. It includes a world map from Mapbox API and functions like a real map, for instance allowing users to zoom in for close map details.

The v2 update comes in with a facial image generator, so that when the user is born in country A, it can simulate what the user would look like if he/she were born in country A.

## To Run

Make sure Node.js is install on your computer, otherwise please visit https://nodejs.org/en/download/ for download. 

Download the entire repository as a zip file and unzip, then open up Terminal and locate the downloaded folder.

### Set up
```bash
npm init
npm i axios
npm i cheerio
npm i express
npm i ws
```

### Run by using 
```bash
node server.js
```

Then the server is up. Open up a browser and enter localhost:8000 to visit the program. 

Have fun!
