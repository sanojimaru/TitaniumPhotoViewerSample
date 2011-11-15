var homeWindow;
Ti.UI.setBackgroundColor('#000');
Ti.App.imagesPath = Ti.Filesystem.resourcesDirectory + 'shared/images/sample/';
homeWindow = Titanium.UI.createWindow({
  url: 'home.js',
  titlleid: 'home',
  fullscreen: true,
  navBarHidden: true,
  exitOnClose: true
});
homeWindow.open();