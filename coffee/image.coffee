win = Ti.UI.currentWindow

filenames = Ti.Filesystem.getFile(Ti.App.imagesPath).getDirectoryListing()
file = Ti.Filesystem.getFile(win.filename)

imageView = Ti.UI.createImageView({
  image: Ti.Filesystem.getFile(win.filename),
})
imageView.addEventListener('swipe', (e) ->
  if (index = filenames.indexOf(file.name())) > -1
    switch e.direction
      when "left" then next = index-1
      when "right" then next = index+1
      else next = index

    if filenames[next]
      imageWindow = Ti.UI.createWindow({
        url: 'image.js',
        filename: Ti.App.imagesPath + filenames[next],
        navBarHidden: true
      })
      imageWindow.open({ fullscreen: true })
    else
      alert("Next image not found.")
)

scrollView = Ti.UI.createScrollView()
scrollView.add imageView
win.add scrollView
