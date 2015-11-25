function RemarkVideoControlPlugin(document, slideshow) {
  this.doc = document;
  this.slides = slideshow;
  
  this.slides.on('afterShowSlide', function (slide) {
    var slideEl = this.getSlideEl(slide);
    
    this.checkForVideoToPlay(slide, slideEl);
    
    // this.logSlideInfoToConsole(slide, slideEl)
  }.bind(this));
  
  this.slides.on('afterHideSlide', function(slide) {
    var slideEl = this.getSlideEl(slide);
    
    this.checkForVideoToReset(slide, slideEl);
  }.bind(this));
  
  this.doc.body.addEventListener('click', function(ev) {
    var clickedEl = ev.target;
    if(clickedEl && clickedEl.tagName.toLowerCase() === 'video') {
      if(clickedEl.getAttribute('playing') === 'true') {
        this.pauseVideo(clickedEl);
      }
      else {
        this.playVideo(clickedEl);
      }
    }
  }.bind(this));
  
}

RemarkVideoControlPlugin.prototype.getSlideEl = function(slide) {
  var allSlides = this.doc.querySelectorAll('.remark-slide');
  var currentIndex = slide.getSlideIndex();
  return allSlides[currentIndex];
}

RemarkVideoControlPlugin.prototype.checkForVideoToPlay = function(slide, slideEl) {
  var playVideoSelector = slide.properties.play_video;
  if(playVideoSelector !== undefined) {
    var vidEl;
    if(playVideoSelector) {
      vidEl = this.doc.querySelector(playVideoSelector);
    }
    else {
      vidEl = slideEl.querySelector('video');
    }
    if(vidEl.getAttribute('playing') !== 'true') {
      this.playVideo(vidEl);
    }
  }
};

RemarkVideoControlPlugin.prototype.checkForVideoToReset = function(slide, slideEl) {
  var vidEl = slideEl.querySelector('video');
  if(vidEl) {
    this.pauseVideo(vidEl);
    vidEl.currentTime = 0;
  }
};

RemarkVideoControlPlugin.prototype.logSlideInfoToConsole = function(slide, slideEl) {
  console.log(slide);
};

RemarkVideoControlPlugin.prototype.playVideo = function(el) {
  el.play();
  el.setAttribute('playing', 'true');
};

RemarkVideoControlPlugin.prototype.pauseVideo = function(el) {
  el.pause();
  el.setAttribute('playing', 'false');
};
