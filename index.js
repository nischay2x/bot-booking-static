const express = require('express');
const path = require('path');
const getHtml = require('./template.js');
const puppeteer = require('puppeteer');
const { uploadPdf } = require('./firebaseControl.js');

const app = express();
const port = process.env.PORT || 8080;

app.use(express.urlencoded({extended : true}));
app.use(express.json());
app.use(express.static('static'))

// sendFile will go here
app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/static/index.html'));
});

const puppeteerPromise = puppeteer.launch({
  args : [
    '--no-sandbox'
  ]
})

app.post("/create-pdf", async (req, res) => {
  const html = getHtml(req.body);
  try {
    const browser = await puppeteerPromise;
    const context = await browser.createIncognitoBrowserContext();
    const page = await context.newPage();

    await page.setContent(html);

    const pdfBuffer = await page.pdf({ path : "test-102.pdf", format: 'a4', printBackground : true });
    // const data = await uploadPdf(pdfBuffer, `${req.body.mobile}-${new Date().toUTCString().replace(/\s/g, "-")}.pdf`);
    // console.log(data);

    await page.close();
    await browser.close();
    return res.status(200).json({
      msg: "PDF Generated Succesfully"
    })
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      msg : error
    })
  }
})

app.listen(port, (err) => {
    if(err) console.log(err)
    else console.log("Server at: http://localhost:"+port)
});