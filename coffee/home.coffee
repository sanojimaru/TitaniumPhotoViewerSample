win = Ti.UI.currentWindow

filenames = Ti.Filesystem.getFile(Ti.App.imagesPath).getDirectoryListing()
scrollView = Ti.UI.createScrollView()

win.add scrollView
win.addEventListener('open', (e) ->
  widthBase = scrollView.width / 3
  rowCount = 0
  cellCount = 0
  data = []
  for filename in filenames
    thumb = Ti.UI.createImageView({
      image: Ti.App.imagesPath + filename,
      top: widthBase * rowCount,
      left: widthBase * cellCount,
      width: widthBase - 5,
      height: widthBase - 5
    })
    thumb.addEventListener('click', (e) ->
      imageWindow = Ti.UI.createWindow({
        url: 'image.js',
        filename: e.source.image,
        navBarHidden: true
      })
      imageWindow.open({ fullscreen: true })
    )

    scrollView.add thumb

    cellCount += 1
    if cellCount > 3
      cellCount = 0
      rowCount += 1
)
