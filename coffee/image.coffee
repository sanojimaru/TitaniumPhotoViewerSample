win = Ti.UI.currentWindow

filenames = Ti.Filesystem.getFile(Ti.App.imagesPath).getDirectoryListing()
file = Ti.Filesystem.getFile(win.filename)

views = []
for filename in filenames
  imageView = Ti.UI.createImageView({
    image: Ti.App.imagesPath + filename
  })

  views.push imageView

container = Ti.UI.createScrollableView({
  views: views,
  showPagingControl: true,
  maxZoomScale: 3.0,
  minZoomScale: 0.5,
  currentPage: filenames.indexOf file.name.replace('/', '')
})

win.add container
