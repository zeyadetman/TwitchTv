 var listofchannels = ["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
 var allc = [];
 for (var i = 0; i < listofchannels.length; i++) {
     getuserid(listofchannels[i]);
 }

 function getuserid(channel) {
     var data = null;

     var xhr = new XMLHttpRequest();
     xhr.withCredentials = true;

     xhr.addEventListener("readystatechange", function() {
         if (this.readyState === 4) {
             //console.log(JSON.parse(this.responseText));
             var res = JSON.parse(this.responseText);
             //console.log(res['users'][0]['_id']);
             $(".channels").append(`
             <div class="item col-md-10 row item${res['users'][0]['_id']}">
             <img class="img-responsive img-rounded logo col-md-3" src="${res['users'][0]['logo']}">
             <p class="description col-md-8"><a class="displayname" href="https://www.twitch.tv/${res['users'][0]['name']}" target="_blank">${res['users'][0]['display_name']}</a><br>Viewers: <span class="view${res['users'][0]['_id']}">0</span><br>${res['users'][0]['bio']}</p>      
 </div>
             `);
             allc.push(res['users'][0]['_id']);
         }
     });

     xhr.open("GET", `https://api.twitch.tv/kraken/users?login=${channel}`);
     xhr.setRequestHeader("accept", "application/vnd.twitchtv.v5+json,");
     xhr.setRequestHeader("client-id", "uo6dggojyb8d6soh92zknwmi5ej1q2,");
     xhr.setRequestHeader("authorization", "OAuth cfabdegwdoklmawdzdo98xt2fo512y");
     xhr.setRequestHeader("cache-control", "no-cache");
     xhr.setRequestHeader("postman-token", "94ed26fb-2382-c567-4eb3-b3053655e328");

     xhr.send(data);
 }


 function online() {
     for (var i = 0; i < allc.length; i++) {
         online1(allc[i]);
     }
 }

 function displayall() {
     for (var i = 0; i < allc.length; i++) {
         displayall1(allc[i]);
     }
 }

 function offline() {
     for (var i = 0; i < allc.length; i++) {
         offline1(allc[i]);
     }
 }


 function online1(id) {
     var data = null;

     var xhr = new XMLHttpRequest();
     xhr.withCredentials = true;

     xhr.addEventListener("readystatechange", function() {
         if (this.readyState === 4) {
             //console.log(JSON.parse(this.responseText));
             var res = JSON.parse(this.responseText)['stream'];
             if (res == null) {
                 $(`.item${id}`).css('display', 'none');
             } else {
                 $(`.item${id}`).css('display', 'flex');
                 $(`.view${id}`).html(`Viewers: ${res['viewers']}`);
             }
         }
     });

     xhr.open("GET", `https://api.twitch.tv/kraken/streams/${id}`);
     xhr.setRequestHeader("accept", "application/vnd.twitchtv.v5+json,");
     xhr.setRequestHeader("client-id", "uo6dggojyb8d6soh92zknwmi5ej1q2,");
     xhr.setRequestHeader("authorization", "OAuth cfabdegwdoklmawdzdo98xt2fo512y");
     xhr.setRequestHeader("cache-control", "no-cache");
     xhr.setRequestHeader("postman-token", "c1269582-efe1-0322-0135-5db240a3411f");

     xhr.send(data);
 }

 function displayall1(id) {
     var data = null;

     var xhr = new XMLHttpRequest();
     xhr.withCredentials = true;

     xhr.addEventListener("readystatechange", function() {
         if (this.readyState === 4) {
             //console.log(JSON.parse(this.responseText));
             var res = JSON.parse(this.responseText)['stream'];
             $(`.item${id}`).css('display', 'flex');

         }
     });

     xhr.open("GET", `https://api.twitch.tv/kraken/streams/${id}`);
     xhr.setRequestHeader("accept", "application/vnd.twitchtv.v5+json,");
     xhr.setRequestHeader("client-id", "uo6dggojyb8d6soh92zknwmi5ej1q2,");
     xhr.setRequestHeader("authorization", "OAuth cfabdegwdoklmawdzdo98xt2fo512y");
     xhr.setRequestHeader("cache-control", "no-cache");
     xhr.setRequestHeader("postman-token", "c1269582-efe1-0322-0135-5db240a3411f");

     xhr.send(data);
 }


 function offline1(id) {
     var data = null;

     var xhr = new XMLHttpRequest();
     xhr.withCredentials = true;

     xhr.addEventListener("readystatechange", function() {
         if (this.readyState === 4) {
             //console.log(JSON.parse(this.responseText));
             var res = JSON.parse(this.responseText)['stream'];
             if (res == null) {
                 $(`.item${id}`).css('display', 'flex');
             } else {
                 $(`.item${id}`).css('display', 'none');
             }
         }
     });

     xhr.open("GET", `https://api.twitch.tv/kraken/streams/${id}`);
     xhr.setRequestHeader("accept", "application/vnd.twitchtv.v5+json,");
     xhr.setRequestHeader("client-id", "uo6dggojyb8d6soh92zknwmi5ej1q2,");
     xhr.setRequestHeader("authorization", "OAuth cfabdegwdoklmawdzdo98xt2fo512y");
     xhr.setRequestHeader("cache-control", "no-cache");
     xhr.setRequestHeader("postman-token", "c1269582-efe1-0322-0135-5db240a3411f");

     xhr.send(data);
 }