var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
       botRegex = /^\/cool guy/;  botRegexDL = /^\/DEP/i;botRegexSalt = /^\/salt/;botRegexYub = /^\/yubnub/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SCH/i; botODB = /^\odb/i; botDuck = /^\/duck/;
      botRegexP = /^\/find/i;  botRegexTw = /^\/twitch/i; botRegexYt = /^\/YT/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/;
      botRegexSS = /^\/who is stu/; botRegexKK = /^\/kerm/; botRegexCC = /^\/cool/; botRegexGL = /^\/LG schedule/; botRegexPN = /^\/will antoine make playoffs/;
      botRegexBG = /^\/bubblegum/; botRegexSTP = /^\/stats/;botRegexSTT = /^\/tstats/;botRegexRL = /^\/rule/;
      botRegexSTD = /^\/standings/;botRegexRK = /^\/rank/;botRegexCMD = /^\/command/; botRegexFA = /^\/free agents/;botRegexMRK = /^\/rookies/;
      botRegexTD = /^\/trade/; botRegexSG = /^\/sign/; botRegexRLP = /^\/release/;botRegexSLR = /^\/salary/;
      botRegexRLS = /^\/rules/; botRegexBRK = /^\/breakdown/; botRegexSwerve = /^\/swerve/; botRegexJC = /^\/geezus/;
      botRegexDN = /^\/Deez Nuts/;  botRegexBBQ = /^\/BBQ/; botRegexSTOP = /^\/STOP/; botRegexMIX = /^\/MIXTAPE/;
      botRegexYUP = /^\/yup/; botRegexTRASH = /^\/trash/; botRegexLOL = /^\/lol/;botRegexLMAO = /^\/lmao/; botRegexWMIT = /^\/whose mans is this/;
       botRegexADMIN = /^\/admin/; botRegexStreamRule = /^\/stream/; botRegexMP = /^\/mp/; botRegexSRS = /^\/safety/; botRegexSP = /^\/statpad/;
      botRegexQS = /^\/quicksnap/; botRegexNH = /^\/nohuddle/; botRegexFDR = /^\/fourth/; botRegexSRS = /^\/safety/;
  var teamAb = ["NE","NO","ARI","PHI","CLE","TEN","OAK","DAL","IND","SEA","CIN","PIT","JAC"
                ,"BAL","SD","DEN","MIN","ATL","KC","NYG","GB","DET","HOU","STL","CHI","CAR",
                "MIA","BUF","SF","WAS","NYJ","TB"]
  if(request.text && botRegex.test(request.text)) {
    this.res.writeHead(200);
    postMessage(cool());
    this.res.end();
  } 
  else if(request.text && botRegexDL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/nt/team/"+request.text.substring(5,8)+"/depthchart");
    this.res.end();
     }
    else if(request.text && botRegexStreamRule.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i1330.photobucket.com/albums/w579/charr29/Mobile%20Uploads/Screenshot_20161002-092105_zpszyepwhmw.jpg");
    this.res.end();
 }
    else if(request.text && botRegexMP.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i1330.photobucket.com/albums/w579/charr29/Mobile%20Uploads/Screenshot_20161002-092829_zpsxm4c5j6p.jpg");
    this.res.end();
 }
    else if(request.text && botRegexSRS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i1330.photobucket.com/albums/w579/charr29/Mobile%20Uploads/Screenshot_20161002-092747_zpsopssc3jk.jpg");
    this.res.end();
      
  }
    else if(request.text && botRegexSP.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i1330.photobucket.com/albums/w579/charr29/Mobile%20Uploads/Screenshot_20161002-092454_zps7wjizipu.jpg");
    this.res.end();
      
      }
    else if(request.text && botRegexQS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i1330.photobucket.com/albums/w579/charr29/Mobile%20Uploads/Screenshot_20161002-092426_zps9ktkqcks.jpg");
    this.res.end();
 } 
  
  else if(request.text && botRegexNH.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i1330.photobucket.com/albums/w579/charr29/Mobile%20Uploads/Screenshot_20161002-092355_zpsoirm95va.jpg");
    this.res.end();
 }
   
   else if(request.text && botRegexFDR.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i1330.photobucket.com/albums/w579/charr29/Mobile%20Uploads/Screenshot_20161002-092310_zpsdb8xf5dj.jpg");
    this.res.end();
 } 
  
  
  else if(request.text && botRegexADMIN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/admin");
    this.res.end();

    
    
  } 
  

  
  else if(request.text && botRegexSTP.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/stats/player");
    this.res.end();  
  }
    else if(request.text && botRegexADMIN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/admin");
    this.res.end();
  }  
  
  else if(request.text && botRegexSTT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/stats/team");
    this.res.end();
  } 
  
    
  else if(request.text && botRegexRL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/rules");
    this.res.end();
  } 
    
  else if(request.text && botRegexRLS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/rules");
    this.res.end();
  } 
    
  else if(request.text && botRegexSTD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/standings");
    this.res.end();
  } 
    
 else if(request.text && botRegexRK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/standing/ranking");
    this.res.end();
  } 
    
    else if(request.text && botRegexCMD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/document/d/1C1xfWRoKYKYI0JqIOPhLE4A3rJ9zylpsFgv8fN924d4/edit");
    this.res.end();
  } 
  else if(request.text && botRegexFA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/players?name=&position=all&team=fa");
    this.res.end();
  } 
    
  else if(request.text && botRegexMRK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/players?name=&position=all&team=all&rookie=1");
    this.res.end();
  } 
    
  else if(request.text && botRegexTD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/frontoffice/trade");
    this.res.end();
  } 
    
  else if(request.text && botRegexSG.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/frontoffice/sign");
    this.res.end();
  } 
    
  else if(request.text && botRegexRLP.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/frontoffice/release");
    this.res.end();
  } 
    
  else if(request.text && botRegexSLR.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/frontoffice/salaries");
    this.res.end();
  } 
    
  else if(request.text && botRegexBRK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/frontoffice/rosterbreakdown");
    this.res.end();
  } 
    
  else if(request.text && botRegexSwerve.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://38.media.tumblr.com/3fe9310d30f7ab474a46499b549b8a55/tumblr_mjt8buEg3r1rvqgomo1_250.gif");
    this.res.end();
    
    
  } 
    
  else if(request.text && botRegexTRASH.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.clipartbest.com/cliparts/eiM/dM8/eiMdM8nin.jpeg");
    this.res.end();
  }
  
    else if(request.text && botRegexDN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://memecrunch.com/meme/7S7AV/got-heem/image.png?w=480&c=1");
    this.res.end();
  } 
  
      else if(request.text && botRegexBBQ.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.groupme.com/500x281.png.2a94e2f011174b7e9f549802f694cfcd.large");
    this.res.end();
  } 
  
   else if(request.text && botRegexJC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://memecrunch.com/meme/6GU2A/jesus-christ-kid/image.png");
    this.res.end();
    
   }

  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
    this.res.end(); 
    
    
  }

  else if(request.text && botRegexYUP.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://cdn2.streamable.com/image/27effa2016ad11e5bdc3950552d45574.jpg");
    this.res.end();
    
  }  else if(request.text && botRegexCC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("As cool as the other side of the pillow.");
    this.res.end();
  } 
  
   else if(request.text && botRegexKK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://rack.1.mshcdn.com/media/ZgkyMDEzLzEwLzAyLzMzL0tlcm1pdHRoZUZyLmMyZWU1LmpwZwpwCXRodW1iCTk1MHg1MzQjCmUJanBn/5b5c23cb/624/Kermit-the-Frog-Thumbnail.jpg");
    this.res.end();
  } 
  
  else if(request.text && botRegexPN.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://img.podbean.com/itunes-logo/399358/PN1_LowRes.jpg");
    this.res.end();
  } 
  
   else if(request.text && botRegexSTOP.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://cdn.meme.am/instances/24013993.jpg");
    this.res.end();
  } 
    else if(request.text && botRegexBG.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://media.giphy.com/media/riV4c1qKzhKi4/giphy.gif");
    this.res.end();
  } 
   else if(request.text && botRegexGL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/schedules");
    this.res.end();
  } 
  else if(request.text && botRegexSS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://cbsmiami.files.wordpress.com/2015/01/452250140.jpg?w=1500");
    this.res.end();
  } 
  else if(request.text && botRegexAd.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.hackcollege.com/wp-content/uploads/2013/02/kno_advance.jpg");
    this.res.end();
  }
  else if(request.text && botRegexYub.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.quickmeme.com/img/9f/9f3720469d1ce6c2d20130ed0750935a394df80ffcddec6d16e091d95efea854.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexGTA.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.groupme.com/220x147.jpeg.a2dd2add32b14fff9e329535186d793c.large");
    this.res.end();
    } 
  else if(request.text && botRegexMIX.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.imgur.com/NcWGxwF.jpg");
    this.res.end();
  } 
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/nt/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(6,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/nt/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
    this.res.end();
    
    }  

  else if(request.text && botRegexYt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.youtube.com/"+request.text.substring(4,request.text.length));
    this.res.end();
  } 
  else if(request.text && botRegexSb.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.reddit.com/r/maddenall32");
    this.res.end();
  } 
  else if(request.text && botRegexSh.test(request.text)) {
    this.res.writeHead(200);
    postMessage("¯\\_(ツ)_/¯");
    this.res.end();
  } 
  else if(request.text && botRegexWk.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://docs.google.com/spreadsheets/d/1kJqQWCq3RKiTrd4f71FFNKr-Y0ppJzjk0fSF0rP6Bto/edit?usp=sharing");
    this.res.end();
  } 
  else if(request.text && botRegexLOL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://replycandy.com/wp-content/uploads/Goodfellas-Ray-Liotta-Laughing-Reaction-Face.jpg");
    this.res.end();
    
  } 
  else if(request.text && botRegexLMAO.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.groupme.com/540x304.gif.b7c73a3a87624ab9bafd6afab0d9a289.large");
    this.res.end();
    
  } 
  else if(request.text && botRegexWMIT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://i.groupme.com/350x184.jpeg.93abed575d4a43cb87631dd2d4558947.large");
    this.res.end();
  } 
  else if(request.text && botODB.test(request.text)) {
    this.res.writeHead(200);
    postMessage("OBJ*");
    this.res.end();
  } 
  else if(request.text && botDuck.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://media3.giphy.com/media/YCseTHF2I6CCA/giphy.gif");
    this.res.end();
  
  
  
  }
  else {
    console.log("don't care");
    this.res.writeHead(200);
    this.res.end();
  }
}

function postMessage(response) {
  var botResponse,options, body, botReq;

  botResponse = response

  options = {
    hostname: 'api.groupme.com',
    path: '/v3/bots/post',
    method: 'POST'
  };

  body = {
    "bot_id" : botID,
    "text" : botResponse
  };

  console.log('sending ' + botResponse + ' to ' + botID);

  botReq = HTTPS.request(options, function(res) {
      if(res.statusCode == 202) {
        //neat
      } else {
        console.log('rejecting bad status code ' + res.statusCode);
      }
  });

  botReq.on('error', function(err) {
    console.log('error posting message '  + JSON.stringify(err));
  });
  botReq.on('timeout', function(err) {
    console.log('timeout posting message '  + JSON.stringify(err));
  });
  botReq.end(JSON.stringify(body));
}

function getRandomInt(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}


exports.respond = respond;
