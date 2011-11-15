var file, filenames, imageView, scrollView, win;
win = Ti.UI.currentWindow;
filenames = Ti.Filesystem.getFile(Ti.App.imagesPath).getDirectoryListing();
file = Ti.Filesystem.getFile(win.filename);
imageView = Ti.UI.createImageView({
  image: Ti.Filesystem.getFile(win.filename)
});
imageView.addEventListener('swipe', function(e) {
  var imageWindow, index, next;
  if ((index = filenames.indexOf(file.name())) > -1) {
    switch (e.direction) {
      case "left":
        next = index - 1;
        break;
      case "right":
        next = index + 1;
        break;
      default:
        next = index;
    }
    if (filenames[next]) {
      imageWindow = Ti.UI.createWindow({
        url: 'image.js',
        filename: Ti.App.imagesPath + filenames[next],
        navBarHidden: true
      });
      return imageWindow.open({
        fullscreen: true
      });
    } else {
      return alert("Next image not found.");
    }
  }
});
scrollView = Ti.UI.createScrollView();
scrollView.add(imageView);
win.add(scrollView);