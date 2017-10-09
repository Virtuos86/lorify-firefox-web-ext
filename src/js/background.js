'use strict';

let notificationsToDisplay = [];

function generateId(length) {
  var text = '';
  var possible = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

  for (let i = 0; i < length; ++i) {
    text += possible.charAt(Math.floor(Math.random() * possible.length));
  }

  return text;
}

function showBasicNotification(id, title, message, iconUrl) {
  const options = {
    type : 'basic',
    title: title,
    message: message,
    iconUrl: iconUrl
  };
  browser.notifications.create(id, options);
}

browser.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.action === 'show_notification') {
      // We need to set a unique ID for every notification,
      // otherwise it will replace the previous one with the same ID
      // We also need to keep information about sender tab's ID
      // to be able to activate it when user clicks on notification
      const notificationID = sender.tab.id.toString() + ' ' + generateId(5);

      notificationsToDisplay.push({
        id: notificationID,
        title: request.title,
        message: request.message,
        iconUrl: request.iconUrl
      });
    }
});

function displayFirstNotification() {
  if (notificationsToDisplay.length > 0) {
    const notification = notificationsToDisplay[0];
    showBasicNotification(
      notification.id,
      notification.title,
      notification.message,
      notification.iconUrl
    );
    notificationsToDisplay.shift();
  }
}

// Because of the strange Chrome bug / feature, we can't call
// browser.notifications.create method several times in a row,
// so let's check for notifications to display every second
window.setInterval(displayFirstNotification, 1 * 1000);
setInterval(displayFirstNotification, 1 * 1000);

browser.notifications.onClicked.addListener(function(notificationId) {
  const tabId = parseInt(notificationId.split(' ')[0], 10);
  browser.tabs.update(tabId, {highlighted: true});
});
