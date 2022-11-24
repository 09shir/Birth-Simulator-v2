const PORT = 8000

const axios = require("axios")
const cheerio = require("cheerio")
const express = require("express")

const app = express()

var WebSocket = require('ws')
var http = require('http');
var url = require('url');
var server = http.createServer(app);
var ws = new WebSocket.Server({server:server, path:"/"})

var URL;

// static files
app.use(express.static('public'))
app.use('/css', express.static(__dirname + 'public/css'))
app.use('/js', express.static(__dirname + 'public/js'))
app.use('/img', express.static(__dirname + 'public/img'))

app.get('/', function(req,res) {
  res.sendFile(__dirname + '/views/index.html')
});

ws.on('connection', socket => {
  socket.on('message', message => {
     getImage(message, 'male');
     socket.send(`${URL}`);
  })
})

server.listen(PORT, () => console.log('server running on PORT ' + PORT))

function getImage(country, gender){

  var myUrl = url = 'https://cn.bing.com/images/search?q=' + country + '+' + gender + 
                    '+headshot+photo&qs=n&form=BESBTB&sp=-1&pq=' + country + '+' + gender + 
                    '+headshot+photo&sc=0-33&cvid=7B550D6D62A54074978C3A3732CA78C7&ghsh=0&ghacc=0&first=1&tsc=ImageHoverTitle&ensearch=1&cw=1177&ch=622';

  axios(myUrl)
    .then(response => {
        const html = response.data 
        const $ = cheerio.load(html)
        var images = []
        var totalNum = 0

        $('.img_cont', html).each(function(){
            const img = $(this).find('img').attr('src')
            if (img != undefined){
              images.push({
                img
              })
            }
        })
        
        // get images length
        images.forEach(image => {
          totalNum++;
        })

        URL = images[Math.floor(Math.random()*totalNum)].img;

    }).catch(err => console.log(err))
}
