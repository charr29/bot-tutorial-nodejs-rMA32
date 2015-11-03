var HTTPS = require('https');
var cool = require('cool-ascii-faces');

var botID = process.env.BOT_ID;

function respond() {
  var request = JSON.parse(this.req.chunks[0]),
       botRegex = /^\/cool guy/;  botRegexDL = /^\/DEP/i;botRegexSalt = /^\/salt/;botRegexYub = /^\/yubnub/
      botRegexAd=/^\/advance/;botRegexGTA = /^\/gta/; botRegexSC = /^\/SCH/i; botODB = /^\odb/i; botDuck = /^\/duck/;
      botRegexP = /^\/find/i;  botRegexTw = /^\/twitch/i; botRegexSb = /^\/sub/; botRegexSh = /^\/shrug/; botRegexWk = /^\/users/;
      botRegexSS = /^\/who is stu/; botRegexKK = /^\/kerm/; botRegexCC = /^\/cool/; botRegexGL = /^\/LG schedule/; botRegexPN = /^\/will antoine make playoffs/;
      botRegexBG = /^\/bubblegum/; botRegexSTP = /^\/stats/;botRegexSTT = /^\/tstats/;botRegexRL = /^\/rule/;
      botRegexSTD = /^\/standings/;botRegexRK = /^\/rank/;botRegexCMD = /^\/command/; botRegexFA = /^\/free agents/;botRegexMRK = /^\/rookies/;
      botRegexTD = /^\/trade/; botRegexSG = /^\/sign/; botRegexRLP = /^\/release/;botRegexSLR = /^\/salary/;
      botRegexRLS = /^\/rules/; botRegexBRK = /^\/breakdown/; botRegexSwerve = /^\/swerve/; botRegexJC = /^\/geezus/ 
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
  

  
  else if(request.text && botRegexSTP.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/stats/player");
    this.res.end();
  }  
  
  else if(request.text && botRegexSTT.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/stats/team");
    this.res.end();
  } 
  
    
  else if(request.text && botRegexRL.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/stats/rules");
    this.res.end();
  } 
    
  else if(request.text && botRegexRLS.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/stats/rules");
    this.res.end();
  } 
    
  else if(request.text && botRegexSTD.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/stats/standings");
    this.res.end();
  } 
    
 else if(request.text && botRegexRK.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/NT/stats/standings/rankings");
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
    
  else if(request.text && botRegexSG.test(request.text)) {
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
  
   else if(request.text && botRegexJC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://memecrunch.com/meme/6GU2A/jesus-christ-kid/image.png");
    this.res.end();
    
  }

  else if(request.text && botRegexSalt.test(request.text)) {
    this.res.writeHead(200);
    postMessage("https://i.imgur.com/B5BSVqH.png");
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
  else if(request.text && botRegexSC.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://daddyleagues.com/nt/team/"+request.text.substring(5,8)+"/schedule");
    this.res.end();
  }
  else if(request.text && botRegexP.test(request.text)) {
    this.res.writeHead(200);
    var req = request.text.substring(5,request.text.length);
    var rep = req.replace(/ /,"+");
    postMessage("http://daddyleagues.com/nt/players?name="+rep+"&position=all&team=all");
    this.res.end();
  }  

  else if(request.text && botRegexTw.test(request.text)) {
    this.res.writeHead(200);
    postMessage("http://www.twitch.tv/"+request.text.substring(8,request.text.length));
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
