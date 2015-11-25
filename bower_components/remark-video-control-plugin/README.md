# Remark Video Control Plugin

A plugin to add simple navigation controls to play and stop embedded videos within a remark slideshow

## Install

Install from Bower

```bash
bower install remark-video-control-plugin --save
```

Include in your slide deck.

```html
<script src="./bower_components/remark-video-control-plugin/remark-video-control-plugin.js"></script>
```

Initialise in your slides `index.html`:

```js
var slideshow = remark.create({
  /* your config */
});

var controller = new RemarkVideoControlPlugin(document, slideshow);
```

## Usage

### Click to start/stop

By default the plugin will to start any embedded paused video when clicked and stop any playing embedded video when clicked.

### Start/Stop playing on navigate

To start a video upon navigation simply add the following property to a slide:

```md
play_video:
```

For example:

```md

# Example

---

class: bg-video, trans-h, em-text, bottom
play_video:

## Example: The Twitter Streaming API<br /><small>Waiting for data...</small>

<video loop="true">
  <source src="./img/twitter-where-is-the-data.mp4" type="video/mp4">
</video>

---

...
```
