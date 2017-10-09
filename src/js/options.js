'use strict';

function save_options(e) {
  e.preventDefault();

  const autorefreshEnabled = document.getElementById('autorefreshEnabled').checked;
  const autorefreshIntervalSecs = document.getElementById('autorefreshIntervalSecs').value;
  const delayBeforePreviewMillisecs = document.getElementById('delayBeforePreviewMillisecs').value;
  const delayAfterPreviewMillisecs = document.getElementById('delayAfterPreviewMillisecs').value;
  const pagesLimitForResponses = document.getElementById('pagesLimitForResponses').value;
  const desktopNotificationsEnabled = document.getElementById('desktopNotificationsEnabled').checked;
  browser.storage.sync.set({
    autorefreshEnabled: autorefreshEnabled,
    autorefreshIntervalSecs: autorefreshIntervalSecs,
    delayBeforePreviewMillisecs: delayBeforePreviewMillisecs,
    delayAfterPreviewMillisecs: delayAfterPreviewMillisecs,
    pagesLimitForResponses: pagesLimitForResponses,
    desktopNotificationsEnabled: desktopNotificationsEnabled
  }, function() {
    let status = document.getElementById('status');
    status.textContent = 'Options saved.';
    setTimeout(function() {
      status.textContent = '';
    }, 750);
  });
}

function restore_options() {
  browser.storage.sync.get({
    autorefreshEnabled: true,
    autorefreshIntervalSecs: 10,
    delayBeforePreviewMillisecs: 0,
    delayAfterPreviewMillisecs: 800,
    pagesLimitForResponses: 20,
    desktopNotificationsEnabled: false
  }, function(items) {
    document.getElementById('autorefreshEnabled').checked = items.autorefreshEnabled;
    document.getElementById('autorefreshIntervalSecs').value = items.autorefreshIntervalSecs;
    document.getElementById('delayBeforePreviewMillisecs').value = items.delayBeforePreviewMillisecs;
    document.getElementById('delayAfterPreviewMillisecs').value = items.delayAfterPreviewMillisecs;
    document.getElementById('pagesLimitForResponses').value = items.pagesLimitForResponses;
    document.getElementById('desktopNotificationsEnabled').checked = items.desktopNotificationsEnabled;
  });
}

function close_window() {
  window.close();
}

document.addEventListener('DOMContentLoaded', restore_options);
document.getElementById('form').addEventListener('submit',
  save_options);
document.getElementById('close').addEventListener('click',
    close_window);
