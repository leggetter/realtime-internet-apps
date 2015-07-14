name: dblue
layout: true

class: bg-dark, center, middle

---

name: lblue
layout: true

class: bg-light, center, middle

---

class: title

# Real-Time Web Apps in 2015 & Beyond

* <span class="speaker">Phil @leggetter</span>
* <span class="speaker-job-title">Head of Evangelism</span>
* <span class="speaker-pusher-logo"></span>

???

---

template: dblue
class: bg-contain, pusher-circle
background-image: url(./img/pusher-circles.png)

---

## Realtime Web Apps
## &#8595;
## **s/Web/Internet**
## &#8595;
## Realtime Internet Apps

---

## Internet Usage (per day)

* [200 billion emails][email-stat]
* [7 million blog posts written][wordpress-stat]<sup>†</sup>
* [500 million tweets][twitter-stat]
* [55 million Facebook status updates][facebook-stat]
* [5 billion Google+ +1's][googleplus-stat]
* [60 million Instagram photos posted][instagram-stat]
* [33 million hours of Netflix watched][netflix-stat]
* [200 million hours of YouTube watched](youtube-stat)
* [2 billion minutes spent on Skype][skype-stat]

[email-stat]:http://www.radicati.com/wp/wp-content/uploads/2013/04/Email-Statistics-Report-2013-2017-Executive-Summary.pdf
[twitter-stat]:http://abcnews.go.com/Business/twitter-ipo-filing-reveals-500-million-tweets-day/story?id=20460493
[facebook-stat]:http://blog.kissmetrics.com/facebook-statistics/
[googleplus-stat]:http://www.mediabistro.com/alltwitter/social-media-stats-2012_b30651
[wordpress-stat]:http://wordpress.com/stats/posting/
[instagram-stat]:http://instagram.com/press/
[youtube-stat]:http://www.youtube.com/yt/press/statistics.html
[netflix-stat]:http://blog.netflix.com/2014/01/new-isp-performance-data-for-december.html
[skype-stat]:http://blogs.skype.com/2013/04/03/thanks-for-making-skype-a-part-of-your-daily-lives-2-billion-minutes-a-day/

???
- What are the main (work safe) uses for the Internet each day?
- † 41.5 million posts in April = 1.38 million per day. Assuming WordPress.com have 20% of the market; 1.38 * 5 = 6.9 million posts on all blogging platforms.

---

template: dblue
class: trans-all bg-cover
background-image: url(img/internet-communications.jpg)

## The Internet...

1. **is *the* communications platform**
2. **is becoming *the* entertainment platform**

---

background-image: url(img/internet.png)
class: bg-contain

???
The following images provides the most basic overview of what we have to work with; the Internet with a foundation of TCP/UDP.

As we progress we'll update the diagram with the building block we now have to work with in order for us to try to innovate and build amazing Internet apps.

---

# When do we need Realtime?

???
- We're here to talk about realtime. Where does it fit in?
- Realtime plays a part in all of the previous examples. But 'where' depends on...

---

## Data

Is there a timely nature to the data?

???
- Is there a value or need to get the data quickly?
- Does it need to maintain in-context?
- Hashtags can indicate context after the event.

---

background-image: url(img/foursquare.jpg)

---

## User Experience

Is there a timely nature to the experience?

???
- Anything with human-to-human interaction
- Some interactions with systems
- Frustration at high latency on a voice call

---

## Realtime is required when there's a *Need* or *Demand* for:

* Up to date information
* Interaction to maintain engagement

---

# These aren't new *Needs* or *Demands*

---

# HTTP, Browsers & Servers made it Difficult

---

## What made it difficult?

* HTTP - request/response paradigm
* Keeping persistent HTTP connections alive
* No cross-browser `XMLHttpRequest`
* 2 connection limit
* No browser cross origin support
* General cross browser incompatibilities

---

background-image: url(img/internet-http.png)

---

## Hacks & Tricks

* Java Applets
* Flash
* HTTP Hacks

---

# Driving Forces behind the Hacks?

---

background-image: url(img/plato-talkomatic.png)
template: dblue
class: bg-contain

???
Talkomatic realtime Chat - created back in 1973

---

template: dblue
background-image: url(img/yahoo-chat.png)

???
Yahoo! Web chat. Looks like a Java Applet.

---

template: dblue
background-image:url(img/reuters-kobra.png)
class: bg-contain

???
Financial Data. Also Java.

---

template: dblue
background-image: url(img/legacy-finance-web.gif)
class: bg-contain

---

# 4 Things that took Real-time Mainstream?

???

---

template: dblue
background-image: url(img/follow-magnified.png)
class: trans-all, top

# 1. Social

???
Social Demonstrated Value:
- Twitter
- Facebook
- Skype
- Other chat solutions

- Demand and Need for update to date info
- Demand and Need for interaction

- The FOLLOW & FRIEND buttons - we know who's interested.

---

## 2. Improved Server Power

* Processors and Memory are cheaper & faster
* More data can be processes
* Connections can be dealt with
* Scaling is easier

---

## 3. Web Browser Capabilities and Consistency

* Cross browser `XMLHTTPRequest` support
* CORS
* Server Sent Events / EventSource
* WebSocket
* WebRTC

???
Cross browser "Hacks"

---

## 4. Software Choice

* Lots of language & runtime options
* More open source solutions
* Hosted services

---

class: bg-contain
background-image:url(img/internet-http-es-ws.png)

---

# Any Client Technology

???
Protocol + API specs = Any tech can implement.

---

background-image: url(img/connection-strategies.png)

???
A note on connection strategies with these technologies

---

# Realtime Apps in 2015

???
In a great place to be able to innovate.
So what's being built and with what?
This is software - these are my opinions. You can achieve similar things in different ways.

---

# Notifications & Signalling

---

background-image: url(./img/itv-news-may-2014.png)

---

## Internet ^5 Machine

<video  poster="./video/internet-high-5-machine.png" width="90%" preload="none" controls>
  <!-- .element: class="fragment fade-in" data-fragment-index="1" -->
  <source src="./video/640/internet-high-5-machine-640.mp4" type="video/mp4">
  <source src="./video/640/internet-high-5-machine-640.webm" type="video/webm">
  <p>Please download and watch our <a href="./video/640/internet-high-5-machine-640.mp4">Internet ^5 clip</a></p>
</video>

???
Russell Thomas and Syd Lawrence

---

background-image: url(./img/talkyio-laptop.png)

## talky.io

???
- Uses WebRTC for audio & video
- Needs a signal to help the two peers know about each other

---

**Receive message**

```js
var sock = new SockJS( 'http://localhost:9999/sockjs' );

sock.onmessage = function( e ) {
  console.log( 'message', e.data );
};
```

**Send Message**

```js
var http = require('http');
    sockjs = require('sockjs');

var hello = sockjs.createServer();
hello.on( 'connection' , function( conn ) {
  conn.write( 'hello SockJS' );
} );

var server = http.createServer();
hello.installHandlers( server, { prefix:'/sockjs' } );
server.listen( 9999, '0.0.0.0' );
```

---

## Simple Messaging Solutions

* Server/Server
  * WebHooks
* Client/Server
  * WebSocket-only or HTTP-only solutions
  * [SockJS](https://github.com/sockjs)
  * [Engine.IO](https://github.com/automattic/engine.io)
  * [Primus](https://github.com/primus/primus)
* Peer-to-Peer
  * [simpleWebRTC](http://simplewebrtc.com/)
  * [PeerJS](http://peerjs.com/)

???
For client/server you generally need a higher abstraction.

---

background-image: url(./img/internet-http-es-ws-msg.png)

---

# Lots of Data

---

background-image: url(./img/mancity-match-day-centre.png)

???
- Manchester City Match Day Centre
- Identify and get the specific pieces of information that it needs

---

background-image: url(./img/mancity-match-day-centre-pubsub.png)

???
- Overview data about the score, scorers, location and time played
- Timeline information about key events
- Activity Streams
- An overview of the status of the starting 11 players
- PubSub: channels/topics/subjects

---

<video  poster="video/trader2.png" width="90%" preload="none" controls>
  <source src="video/trader2.mp4" type="video/mp4">
  <source src="video/trader2.webm" type="video/webm">
</video>

???
- Subscribe to what's visible
- Sub/Unsub as required

---

**Subscribe**

```js
var pusher = new Pusher( APP_KEY );
var channel = pusher.subscribe( 'game-overview' );

channel.bind( 'goal_scored', function( data ) {
  // Handle Update
} );

channel.bind( 'time_updated', function( data ) {
} );
```

**Publish**

```js
var pusher = new Pusher( APP_KEY );

var data = { team_id = 'manchester_city',
             goals_scored: 2,
             goal_scorer: 'Sergio Agüero' };
pusher.trigger( 'game-overview', 'goal_scored', data );
```

---

## PubSub Solutions

.left[
* Self Hosted
  * [Socket.IO](http://socket.io)
  * [Faye](http://faye.jcoglan.com)
  * [XSockets](http://xsockets.net)
]

.right[
* Hosted
  * [Hydna](http://hydna.com)
  * [PubNub](http://pubnub.com)
  * [Pusher](http://pusher.com)
  * [Realtime.co](http://realtime.co)
]

---

background-image: url(./img/internet-http-es-ws-msg-pubsub.png)

---

# Complex Client/Server Interactions

???
- You can use PubSub for this
- CT - initially just displaying data - now interactive.
- Complex client/server business workflows

---

background-image: url(img/fx-motif.png)

???
- Open a trade
- Get open ack
- Wait for it to become executable
- You can withdraw/it can expire, or you can execute
- Trade is then confirmed
- Confirm ack / expired
- Easier to be calling methods on objects? RMI
- What is RMI?

---

background-image: url(img/shooter.png)

???
- Game state authority
- Complex rich symantic interactions
- May be better suited to RMI?

---

**Server**

```js
public class GameHub : Hub {
    public void Move(Player p, int x, int y) {
      // Check if move is allowed
      // Call the broadcastMessage method to update clients.
      Clients.All.playerMoved(p, x, y);
    }
}
```

**Client**

```
$.connection.hub.start(); // async

var game = $.connection.gameHub;

game.client.playerMoved = function (player, x, y) {
  // update game
};

game.server.move( me, x, y );
```

---

## RMI Solutions

* Self Hosted:
  * [dNode](https://github.com/substack/dnode)
  * [SignalR](http://www.asp.net/signalr)
  * [Java.rmi](http://docs.oracle.com/javase/7/docs/api/java/rmi/package-summary.html)
* Hosted:
  * *SignalR on Windows Azure?*

---

background-image: url(./img/internet-http-es-ws-msg-pubsub-rmi.png)

---

# Collaborating on Data

---

background-image: url(./img/gdocs-collaboration.png)

???
- Any use case where you're working on a data structure
- Agile PM boards is common use case
- Online Code Editors

---

background-image: url(./img/collaborative-mapping.png)

---

## Physical Collaborative Mapping

<video  poster="./video/physical-collaborative-mapping.png" width="90%" preload="none" controls>
  <source src="./video/640/physical-collaborative-mapping-640.mp4" type="video/mp4">
  <source src="./video/640/physical-collaborative-mapping-640.webm" type="video/webm">
</video>

???
- Large organisations are looking into creating realtime emergency centres

---

**DataSync**

```
var myDataRef = new Firebase('https://my-app.firebaseio.com/');

myDataRef.push( {creator: '@leggetter', text: 'Not a Test!'} );

myDataRef.on( 'child_added', function(snapshot) {
  // Add the data
});

myDataRef.on( 'child_changed', function(snapshot) {
  // Update the data
});

myDataRef.on( 'child_removed', function(snapshot) {
  // Remove the data
});
```

---

## Data Sync Solutions

.left[
* Self Hosted:
  * [DerbyJS](http://derbyjs.com/)
  * [Meteor](http://meteor.com)
  * [CouchDB]() + [pouchdb](http://pouchdb.com/)
]
.right[
* Hosted:
  * [Firebase](http://firebase.com)
  * [Google Drive Realtime API](https://developers.google.com/drive/realtime/)
  * [Realtime.co](http://realtime.co)
  * [Simperium](http://simperium.com)
]

---

background-image: url(./img/internet-http-es-ws-msg-pubsub-rmi-ds.png)

???
It's now so much easier to innovate!

---

# How do you choose a solution?

---

background-image: url(./img/rtw-tech-decision-matrix-white.png)

---

background-image: url(./img/rtw-tech-decision-matrix-apps.png)

???
  
---

background-image: url(./img/rtw-tech-decision-matrix-solutions.png)

---

# Beyond

---

## Network Infrastructure

* Reliability
* Speed
* Beyond HTTP

---

# More "Things"!

---

template: dblue
background-image: url(./img/iot-2020.png)

???
- IDC report
- Same report: 7.7 Billion people
- What connected?
- Homes, cars, kids, drones

---

<video  poster="./video/gangnam-thumb.png" width="90%" preload="none" controls>
  <source src="./video/640/gangnam-node-640.mp4" type="video/mp4">
  <source src="./video/640/gangnam-node-640.webm" type="video/webm">
  <p>Please download and watch our <a href="./video/640gangnam-node-640.mp4">Gangnam Nodecopter Clip</a></p>
</video>

???
- Most common use case for IoT right now!
- BBC use drone for video.
- Lots of use in agriculture
- AR Drones controlled via UDP packets
- Generally accessed via a library abstraction

---

# And APIs...

---

* Use Realtime
  * Twilio
  * SendGrid
  * MailChimp
  * Iron.io
  * GitHub
  * Trello
  * ...
* APIs for APIs
  * Fanout.io

---

class: bg-white
background-image: url(./img/nest-thermostat.jpg)

???
- Nest acquired by Google for $3.2B

---

## IoT Platforms

* [SmartThings](http://www.smartthings.com/index.php)
* ~~[NinjaBlocks](http://ninjablocks.com/)~~
* [EvryThing](https://www.evrythng.com/)
* [SKYNET.im](http://skynet.im) -> [Octoblu](https://www.octoblu.com/)

---

# Multi-Device Experiences

???
Multiple devices involved in the same experience

---

background-image: url(./img/watch_dogs_ctos.jpg)
class: trans-all

## Watch_Dogs

???
- Not mentioned 2nd screen experiences.
- But this is more than that. This is true engagement.
- Tablets so popular. We'll see more of this.

---

<video  poster="./video/ben-foxall-multi-device-web-futurejs.png" width="90%" preload="none" controls>
  <source src="./video/640/ben-foxall-multi-device-web-futurejs-640.mp4" type="video/mp4">
  <source src="./video/640/ben-foxall-multi-device-web-futurejs-640.webm" type="video/webm">
</video>

???
- We confine ourselves to thinking in the singular.
- What if we think in multiples?
- What sort of experiences and uses would that result in?

---

# Realtime Internet Apps =
# Internet of Things =
### Web Browsers +
### Web Servers +
### Native Apps +
### Devices +

---

class: title

# Real-Time Web Apps in 2015 & Beyond

Thanks, Feedback & Questions!

* <span class="speaker">Phil @leggetter</span>
* <span class="speaker-job-title">Head of Evangelism</span>
* <span class="speaker-pusher-logo"></span>

???
