var filenames, scrollView, win;
win = Ti.UI.currentWindow;
filenames = Ti.Filesystem.getFile(Ti.App.imagesPath).getDirectoryListing();
scrollView = Ti.UI.createScrollView();
win.add(scrollView);
win.addEventListener('open', function(e) {
  var cellCount, data, filename, rowCount, thumb, widthBase, _i, _len, _results;
  widthBase = scrollView.width / 3;
  rowCount = 0;
  cellCount = 0;
  data = [];
  _results = [];
  for (_i = 0, _len = filenames.length; _i < _len; _i++) {
    filename = filenames[_i];
    thumb = Ti.UI.createImageView({
      image: Ti.App.imagesPath + filename,
      top: widthBase * rowCount,
      left: widthBase * cellCount,
      width: widthBase - 5,
      height: widthBase - 5
    });
    thumb.addEventListener('click', function(e) {
      var imageWindow;
      imageWindow = Ti.UI.createWindow({
        url: 'image.js',
        filename: e.source.image,
        navBarHidden: true
      });
      return imageWindow.open({
        fullscreen: true
      });
    });
    scrollView.add(thumb);
    cellCount += 1;
    _results.push(cellCount > 3 ? (cellCount = 0, rowCount += 1) : void 0);
  }
  return _results;
});