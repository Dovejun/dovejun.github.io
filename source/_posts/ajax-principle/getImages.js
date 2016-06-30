var express = require('express');
var router = express.Router();
var cheerio = require('cheerio');
var superagent = require('superagent');
var eventproxy = require('eventproxy');
var http = require('http');
var path = require('path');
var fs = require('fs');

var url = require('url');

//http://www.chunmm.com/
var imageUrl = 'http://www.jandan.net';
var start = 2000;
var end = 2032;

router.get('/getimages',function(req, res, next){
  var count = 0;

  superagent.get(imageUrl).end(function(err, imgres){
    if(err) {
      return res.send(err);
    }
    var $ = cheerio.load(imgres.text);
    var imgs = [];
    $('.commentlist li').each(function(idx, element){
      
      var id = $(element).find('.text .righttext a').text();
      //console.log(id);
      var author = $(element).find('.author strong').text();
      var oo = parseInt($(element).find('.text .vote #cos_support-' + id).text());
      var xx = parseInt($(element).find('.text .vote #cos_unsupport-' + id).text());
      var s = imgWeight(oo,xx);
      if(s >= 0.3) {
        var imgObjs = $(element).find('.text img');
        imgObjs.each(function(index, el) {
          imgs.push({
            id: id,
            author: author,
            name: id + '-' + author + '-' + index + $(el).attr('src').slice($(el).attr('src').lastIndexOf('.')),
            url: $(el).attr('src'),
            oo: oo,
            xx: xx 
          })
        });
      }

    })
    res.send(imgs);
    
    imgs.forEach(function(img){
      http.get(img.url,function(urlres){
        var imgData = '';
        urlres.setEncoding('binary');
        urlres.on('data',function(chunk){
          imgData += chunk;
        })
        urlres.on('end',function(){
          fs.writeFile("./public/meizi/" + img.name, imgData, "binary", function(err){
            if(err){
              //console.log(err);
            }
          });
        })
      })
    })
  })
})

function imgWeight(oo,xx) {
  var n = oo + xx;
  var score;
  var z = 1.96;
  if(n == 0) {
    score = 0;
  }else {
    var p = oo / n;
    score = (p + z * z / (2 * n) - z * Math.sqrt((p * (1 - p) + z * z / (4 * n)) / n))/(1 + z * z / n);
  }
  return score;
}

module.exports = router;