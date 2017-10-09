'use strict';

const FAVICON_NOTIFY = "data:image/x-icon;base64,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";

const FAVICON_ORIGINAL = "data:image/x-icon;base64,AAABAAEAICAAAAEAIACoEAAAFgAAACgAAAAgAAAAQAAAAAEAIAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8B////AAD//wH///8A////AP///wD///8AQEAABBQAAA0AAAAVAAAAEQAAAAX///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP//AAEzmZkFAAAACgAAABcAAAAzAAAAUQAAAFkDAABdAAwXQgAAABcAAAAE////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAAADDAwMFgAAAC0OJSo3HlZtRAtahl0AAC1EAAAALwAAADUXS2dmCUZwkhhhi60xjbbSHWSQ1g5TgbwQOFFxAAAAPgkiMx4AAAAD////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AAAAAAUPLj4hAAAAQx5df5kykLnvOZ3K/0KfwfdCn7q9I2iGkw80S3oITHmlLY258Ei95v8ogLHIAFqaWxtKXiYAAAAgDRsoEwAAAAL///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAAAATNmZgUAAAASGF2AYCyGsadIq8mmYdHnwF3a+/86p9XTAAAAKAAAABMml8mbKavj2hqAvxT///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAAAB////AP///wAAAAADKKjiyiKa3av///8A////AByZ34AOmd7bAIDVDP///wAAgNUG////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAAAB////AP///wD///8A////AP///wAAWYfQAEx42wAAABgAAAADAEpvtwxhif8WOldG////AABVgAb///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAAAAWZmZgX///8AAAAARSYiFfsRBgD/AAAA0Ts4O8Nwamf4Ukc9/wAAAKL///8A////AAAAAAP///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wBVVVUD////AAAAAA+SkZHHysfH/5yVlf2EeXr/l4uM/7itrf+km53/Qj9A+gAAAEz///8AAAAABP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wP///8AkZGRffLy8v/18vL/yL/A/LSmpvuhk4z6fXBr/paMivp8dXX/AAAAwRISEg7///8AAAAABP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wCAgIAE////AAAAACfS0tPk//////Hv8Pvm4+L/19HQ/3lws/8AAIz/ODNS/GVeWf8vKyf/AAAAVP///wAAAAAE////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AICAgAT///8AAAAAeKKin//4+Pj//P3+/P/////V1OX/JRjd/wAA9f8AALT/Jh5e+yklJf8AAACN////AP///wAAAAAC////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAIAE////ADUwijAAAHbcMzJn/93d2/z//////////6inwf8AALP/HQPr/wAA4P8PAKX6KSZt/xEPOab///8A////AAAAAAT///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAACAAv///wAAAAACAACmrxAA9/8AALr9uLjD/v//////////1tbd/0E/h/8AAJL/JyGs/5mYz/pubJ//AAAcr///AAL///8AAAAABP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wBVVVUG////ADk5L0w7OKH9Myf//wAA1/qSkbH//v77////////////ysbU/3Rpiv+DfZ3/razO+1VUdv8AAADlS0tGLP///wAAAAAE////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AGZmmQX///8AZWVfK3h3sONCPNz/QDy9+tDQ2f/y8vD////////+/v/n4uH/zcS//9LL0P+TkqL+Njc4/yIiGv8AAABh////AAAAAAIAAAAB////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AAAAAAP///8ANzGKYl9dkf/a2uv//////PHx8f/+/v////////Du7//t6uv/6efm/5CQjP1FRUT/KCgq/wAAAFD///8AAAAAA////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAAAAv///wD///8Ad3dikv//+////////v7+/f/////+/v7//Pz8///////T09T/SkpL+wAAAP8JCgnrKSkpLP///wAAAAAF////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AbW1tB////wAAAAA2vby98/v5+f/v7Oz76+jo//Hv7//08fH/6ufn/5yZmf8lJSX6DAsL/w8PD84hISEX////AAAAAAX///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAAAE////AAAAAClRUFDl5OPj/+rn5/ve29v/9/b2//z7+//t6uv/i4mJ/wAAAPkRERH/HBwcmv///wD///8AAAAAA////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AEBAQAT///8AAAAALUBBQfPu7u7/////+fDx8f/9/f7///////b39v91dXX8AAAA/x4eHv8YGBhq////AAAAAAIAAAAB////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAAAAv///wCSkpIHAAAAsbi5uf///////v7+/fn4+P//////7+/v/WZmZv9RUVH/ZWVllwAAAA////8AAAAAAv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAAAAv///wAAAAASKCsvlNbW1/3//////Pv5/v////78/P3+hYWG/xgYGJ////8A////AKqqqgP///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AgICABP///wD///8AsaeitMDd9/+HtuD97vP4+f////+Pj47vAAAANP///wAgICAI////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AAD//wH///8AJNv/B1LJ60tMgZ7PI4rD/wCNyP9ips35kai8/1hYWusAAAAz////AAAAAAb///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAP//Af///wD///8ANKbWiiKn3f8modT/KaHX/gCMz/wAa6v/ADNR/xoAAGL///8AAAAABP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AQIC/BP///wByeI0xRo2+9B6a3v8xlNP9WJK//oSWp/4tMDT/AAAAjP///wD///8AAAAAAf///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wCqqqoD////AKylmkexr678eJKp/2+Elf3DwLz/xsPA/Dk3NP8AAACX////AP///wAAAAAC////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AKqqqgP///8AZ2tvRYyLiv1oYVr/Qzsy/Hx8fPp1dnf9AAAA/wQAAHb///8AAAAAA////wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8AAAAAA////wAAAAAZAAAA5C8yNP8wMjT8AAAA/QAAAP8VFRXdJiYmIv///wAzMzMF////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAAAB////AP///wA1NTVqNTU1/A8PD/8XFxb/ISEh3SEhIUb///8AAAAAAv///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wAAAAAB////AP///wAHBwdHHR0dhBgYGHYcHBwk////AP///wAAAAAB////AP///wD///8A////AP///wD///8A////AP///wD///8A////AP///wD///8A/////////////g///wIf//+DP///8z////M////wH///4B///+AP///AD///wAf//4AH//8AB///AAf//wAH//+AB///gAf//8AH///AB///wA///8AP///gH///8D////A////gP///8B////Af///wP///8D////h////9//8=";

const autorefreshTickIntervalMillisecs = 1000;

let autorefreshEnabled = true;
let autorefreshIntervalSecs = 10;
let autorefreshLeftSecs = autorefreshIntervalSecs;
let autorefreshLabel = null;
let newCommentsCount = 0;
let originalDocumentTitle = '';
let delayBeforePreviewMillisecs = 0;
let delayAfterPreviewMillisecs = 0;
let responsesAddingInProcess = false;
let commentsInfo = [];
let currentPreview = null;
let pagesLimitForResponses = 20;
let showResponses = true;
let desktopNotificationsEnabled = false;

function Comment(element, id, link, referencedCommentID, author) {
  this.element = element;
  this.id = id;
  this.link = link;
  this.referencedCommentID = referencedCommentID;
  this.author = author;
}

function getCommentInfo(comment) {
  const commentLinkElement = $(
    comment.find(
      'div.msg-container > div.msg_body > div.reply'
    ).find('a:contains(Ссылка)').first()
  );
  const commentLink = commentLinkElement.attr('href');
  if (typeof commentLink === 'undefined') {
    return null;
  }

  const matches = commentLink.match(/.*cid=(\d+).*/);
  if (matches === null) {
    return null;
  }
  const commentID = matches[1];

  let referencedCommentID = null;
  const a = comment.find('div.title > a').first();
  if (a.length > 0) {
    const referencedCommentLink = a.attr('href');
    if (typeof referencedCommentLink !== 'undefined') {
      const matches = referencedCommentLink.match(/.*cid=(\d+).*/);
      if (matches !== null) {
        referencedCommentID = matches[1];
      }
    }
  }

  let author = null;
  const creatorTag = comment.find('a[itemprop=creator]').first();
  if (creatorTag.length > 0) {
    author = creatorTag.text();
  } else {
    // anonymous
  }

  return new Comment(comment, commentID, commentLink, referencedCommentID, author);
}

function addCommentToCache(commentInfo) {
  let isNewComment = true;
  for (let i = 0; i < commentsInfo.length; ++i) {
    const cachedCommentInfo = commentsInfo[i];
    if (cachedCommentInfo.id === commentInfo.id) {
      commentsInfo[i] = cachedCommentInfo;
      isNewComment = false;
      break;
    }
  }
  if (isNewComment) {
    commentsInfo.push(commentInfo);
  }
}

function addResponsesLinksInternal(possibleAnswers) {
  for (let i = 0; i < possibleAnswers.length; ++i) {
    const comment = $(possibleAnswers[i]);
    const commentInfo = getCommentInfo(comment);
    if (commentInfo === null) {
      continue;
    }

    if (commentInfo.referencedCommentID !== null) {
      for (let i = 0; i < commentsInfo.length; ++i) {
        const cachedCommentInfo = commentsInfo[i];
        if (cachedCommentInfo.id === commentInfo.referencedCommentID) {
          if (cachedCommentInfo.element.find(
            'a.response[href="' + commentInfo.link + '"]'
          ).length > 0) {
            continue;
          }

          const responseTag = $('<a/>', {
            href: commentInfo.link,
            html: commentInfo.author ? commentInfo.author : '>>' + commentInfo.id,
            class: 'response',
            style: 'padding-left: 5px'
          });
          responseTag.click(function(e) {
            const comment = $('#comment-' + commentInfo.id).get(0);
            if (comment) {
              e.preventDefault();
              comment.scrollIntoView();
            }
          });

          const replyPanel = cachedCommentInfo.element.find('div.reply > ul').first();
          if (replyPanel.length === 0) {
            continue;
          }
          let responseBlock = replyPanel.find('.response-block').first();
          if (responseBlock.length === 0) {
            responseBlock = $('<li/>', {
              html: 'Ответы:',
              class: 'response-block'
            });
            replyPanel.append(' ').append(responseBlock);
          }

          setShowPreviewCallback(responseTag);
          responseBlock.append(responseTag);
        }
      }
    }

    addCommentToCache(commentInfo);
  }
}

function addResponsesLinks() {
  if (responsesAddingInProcess || !showResponses) {
    return;
  }
  responsesAddingInProcess = true;

  // Process current page
  const curPageComments = $('#comments').find('article.msg');
  addResponsesLinksInternal(curPageComments);

  // Process other pages
  let otherPagesRequests = [];
  do {
    const pagesNavBar = $('#comments').find('.nav').first();
    if (pagesNavBar.length === 0) {
      break;
    }

    const otherPagesLinksElements = pagesNavBar.find('a.page-number');
    for (let i = 0; i < otherPagesLinksElements.length; ++i) {
      const otherPageLinkElement = $(otherPagesLinksElements[i]);

      const otherPageLink = otherPageLinkElement.attr('href');
      if (typeof otherPageLink === 'undefined') {
        continue;
      }

      otherPagesRequests.push($.get(otherPageLink));
    }
  } while (false);

  if (otherPagesRequests.length === 0) {
    responsesAddingInProcess = false;
  } else {
    const defer = $.when.apply($, otherPagesRequests);
    defer.done(function() {
      $.each(arguments, function(index, responseData) {
        const possibleAnswers = $(responseData[0]).find('#comments').find('article.msg');
        addResponsesLinksInternal(possibleAnswers);
      });
    }).always(function() {
      responsesAddingInProcess = false;
    });
  }
}

function getOffset(element, offsetType) {
  let offset = 0;
  while (element) {
    offset += element[offsetType];
    element = element.offsetParent;
  }
  return offset;
}

function getScreenWidth() {
  return document.body.clientWidth || document.documentElement.clientWidth;
}

function getScreenHeight() {
  return  window.innerHeight || document.documentElement.clientHeight;
}

function removeElement(element) {
  if (!element) {
    return;
  }

  if (element.parentNode) {
    element.parentNode.removeChild(element);
  }
}

function removePreviews(e) {
  currentPreview = e.relatedTarget;
  if (!currentPreview) {
    return;
  }

  while (true) {
    if (/^preview/.test(currentPreview.id)) {
      break;
    } else {
      currentPreview = currentPreview.parentNode;
      if (!currentPreview) {
        break;
      }
    }
  }

  setTimeout(function() {
    if (currentPreview === null) {
      $('article.msg[id*="preview-"]').remove();
    } else {
      while (currentPreview.nextSibling) {
        if (!/^preview/.test(currentPreview.nextSibling.id)) {
          break;
        }
        removeElement(currentPreview.nextSibling);
      }
    }
  }, delayAfterPreviewMillisecs);
}

function showCommentInternal(commentElement, commentID, e) {
  currentPreview = commentElement.get(0);

  // Avoid duplicated IDs when the original comment was found on the same page
  commentElement.attr('id', 'preview-' + commentID);

  // From makaba
  const hoveredLink = e.target;
  let x = getOffset(hoveredLink, 'offsetLeft') + hoveredLink.offsetWidth / 2;
  let y = getOffset(hoveredLink, 'offsetTop');
  const screenWidth = getScreenWidth();
  const screenHeight = getScreenHeight();
  if (e.clientY < screenHeight * 0.75) {
    y += hoveredLink.offsetHeight;
  }
  commentElement.attr(
    'style',
      'position: absolute;' +
      // There are no limitations for the 'z-index' in the CSS standard,
      // so it depends on the browser. Let's just set it to 300
      'z-index: 300;' +
      'border: 1px solid grey;' +
      (
        x < screenWidth / 2
        ? 'left: ' + x
        : 'right: ' + parseInt(screenWidth - x + 2)
      ) + 'px;' +
      (
        e.clientY < screenHeight * 0.75
        ? 'top: ' + y
        : 'bottom: ' + parseInt(screenHeight - y - 4)
      ) + 'px;'
  );

  // If this comment contains link to another comment,
  // set the 'mouseover' hook to that 'a' tag
  let a = commentElement.find('div.title > a').first();
  if (a.length > 0) {
    setShowPreviewCallback(a);

    let referencedCommentID = -1;
    const referencedCommentLink = a.attr('href');
    if (typeof referencedCommentLink !== 'undefined') {
      const matches = referencedCommentLink.match(/.*cid=(\d+).*/);
      if (matches !== null) {
        referencedCommentID = matches[1];
      }
    }
    if (referencedCommentID !== -1) {
      a.click(function(e) {
        const comment = $('#comment-' + referencedCommentID).get(0);
        if (comment) {
          e.preventDefault();
          comment.scrollIntoView();
        }
      });
    }
  }

  commentElement.mouseenter(function() {
    if (!currentPreview) {
      currentPreview = this;
    }
  });

  commentElement.mouseleave(function(e) {
    removePreviews(e);
  });

  // Note that we append the comment to the '#comments' tag,
  // not the document's body
  // This is because we want to save the background-color and other styles
  // which can be customized by userscripts and themes
  $('#comments').find('article.msg').last().after(commentElement);
}

function findCachedComment(id) {
  for (let i = 0; i < commentsInfo.length; ++i) {
    const commentInfo = commentsInfo[i];
    if (commentInfo.id === id) {
      return commentInfo.element;
    }
  }
  return null;
}

function showPreview(e) {
  // Extract link to the comment
  const href = $(e.target).attr('href');
  if (typeof href === 'undefined') {
    return;
  }

  // Extract comment's ID from the 'href' attribute
  const matches = href.match(/.*cid=(\d+).*/);
  if (matches === null) {
    return;
  }
  const commentID = matches[1];

  // Let's reduce an amount of GET requests
  // by searching a cache of comments first
  let commentElement = findCachedComment(commentID);
  if (commentElement !== null) {
    showCommentInternal(
      // Without the 'clone' call we'll just move the original comment
      commentElement.clone(true),
      commentID,
      e
    );
    return;
  }

  // Get an HTML containing the comment
  $.get(href, function(data) {
    // Search for the comment on the requested page
    const commentElementSelector = 'article.msg[id=comment-' + commentID + ']';
    let commentElement = $(data).find(
      commentElementSelector
    ).first();
    if (commentElement.length === 0) {
      return;
    }

    showCommentInternal(
      commentElement,
      commentID,
      e
    );
  });
}

function setShowPreviewCallback(elements) {
  elements.hover(function(e) {
    $(this).data('timeout',
      window.setTimeout(
        function() {
          showPreview(e);
        }, delayBeforePreviewMillisecs
      )
    );
  }, function(e) {
    clearTimeout($(this).data('timeout'));
    removePreviews(e);
  });
}

function autorefreshTick() {
  if (!autorefreshEnabled) {
    setTimeout(autorefreshTick, autorefreshTickIntervalMillisecs);
    return;
  }

  autorefreshLeftSecs -= 1;
  if (autorefreshLeftSecs !== 0) {
    autorefreshLabel.find('span').text(
      'Автообновление через ' + autorefreshLeftSecs + ' с...'
    );
    setTimeout(autorefreshTick, autorefreshTickIntervalMillisecs);
    return;
  }

  autorefreshLabel.find('span').text(
    'Обновление...'
  );

  let comments = $('#comments');

  $.get(document.location.href, function(data) {
    const prevNewCommentsCount = newCommentsCount;

    let messages = $(data).find('article.msg');
    for (let i = 0; i < messages.length; ++i) {
      let message = $(messages[i]);
      let messageID = message.attr('id');
      let isNewMessage = $('#' + messageID).length === 0;
      if (!isNewMessage) {
        continue;
      }

      ++newCommentsCount;

      let a = message.find('div.title > a').first();
      if (a.length > 0) {
        setShowPreviewCallback(a);
        let referencedCommentID = -1;
        const referencedCommentLink = a.attr('href');
        if (typeof referencedCommentLink !== 'undefined') {
          const matches = referencedCommentLink.match(/.*cid=(\d+).*/);
          if (matches !== null) {
            referencedCommentID = matches[1];
          }
        }
        if (referencedCommentID !== -1) {
          a.click(function(e) {
            const comment = $('#comment-' + referencedCommentID).get(0);
            if (comment) {
              e.preventDefault();
              comment.scrollIntoView();
            }
          });
        }
      }

      comments.append(message);
    }

    // Remove all nav. bars related to the pagination
    // (there are also nav. bars related to threads, but let's just skip them)
    let pagesBefore = 0;
    let currentNavBars = $(document.body).find('.nav');
    for (let i = 0; i < currentNavBars.length; ++i) {
      let currentNavBar = $(currentNavBars[i]);
      const pagesElementsCount = currentNavBar.find('.page-number').length;
      let isPagesNavBar = pagesElementsCount !== 0;
      if (isPagesNavBar) {
        pagesBefore = pagesElementsCount;
        currentNavBar.remove();
      }
    }

    let pagesAfter = 0;
    let newPagesNavBar = $(data).find('#comments').find('.nav').has('.page-number').first();
    if (newPagesNavBar.length === 0) {
      comments.append(autorefreshLabel);
    } else {
      pagesAfter = newPagesNavBar.find('.page-number').length;
      comments.find('.msg').first().before(newPagesNavBar.clone());
      comments.append(autorefreshLabel);
      comments.append(newPagesNavBar.clone());
    }

    if (pagesAfter > pagesBefore || newCommentsCount > prevNewCommentsCount) {
      faviconNotify(true);
      if (desktopNotificationsEnabled) {
        showNotification(
          'Новые ответы в теме "' + originalDocumentTitle + '"'
        );
      }
    }

    if (pagesAfter > pagesBefore) {
      document.title = '(!) ' + originalDocumentTitle;
    } else if (newCommentsCount !== 0) {
      document.title = '(' + newCommentsCount + ') ' + originalDocumentTitle;
    }

    disableResponsesForThreadsExceedingPagesLimit();
    addResponsesLinks();
  }).always(function() {
    autorefreshLeftSecs = autorefreshIntervalSecs;
    autorefreshLabel.find('span').text(
      'Автообновление через ' + autorefreshLeftSecs + ' с...'
    );

    setTimeout(autorefreshTick, autorefreshTickIntervalMillisecs);
  });
}

function onAutorefreshCheckboxChange() {
  autorefreshEnabled = $(this).is(':checked');
  if (!autorefreshEnabled) {
    autorefreshLabel.find('span').text(
      'Автообновление'
    );
  } else {
    autorefreshLeftSecs = autorefreshIntervalSecs;
    autorefreshLabel.find('span').text(
      'Автообновление через ' + autorefreshLeftSecs + ' с...'
    );
  }
}

function setAutorefresher() {
  originalDocumentTitle = document.title;

  autorefreshLabel = $('<label/>', {
    // Without the inner 'span' tag
    // the next call to the 'text' function will remove the 'checkbox' control
    html: autorefreshEnabled
      ? '<span>Автообновление через '
        + autorefreshLeftSecs
        + ' с...</span>'
      : '<span>Автообновление</span>'
  });
  let autorefreshCheckbox = $('<input/>', {
    type: 'checkbox',
    checked: autorefreshEnabled
  });
  autorefreshCheckbox.change(onAutorefreshCheckboxChange);
  autorefreshLabel.prepend(autorefreshCheckbox);
  $('#comments').append(autorefreshLabel);

  $(window).scroll(function() {
    if (newCommentsCount !== 0) {
      faviconNotify(false);
      document.title = originalDocumentTitle;
      newCommentsCount = 0;
    }
  });

  // setInterval calls may overlap so let's call setTimeot each time manually
  setTimeout(autorefreshTick, autorefreshTickIntervalMillisecs);
}

function removePreviewsOnClick() {
  $(window).click(function() {
    const previewSelector = 'article.msg[id*="preview-"]';
    if (currentPreview === null) {
      $(previewSelector).remove();
    }
  });
}

const archivedTopicString = 'Вы не можете добавлять комментарии в эту тему. Тема перемещена в архив.';
const deletedTopicString = 'Вы не можете добавлять комментарии в эту тему. Тема удалена.';

function disableAutorefreshForClosedTopics() {
  let infoblock = $('.infoblock').text();

  if (infoblock.indexOf(archivedTopicString) !== -1 ||
      infoblock.indexOf(deletedTopicString) !== -1) {
    autorefreshEnabled = false;
  }
}

let favicon = null;

function getFavicon() {
  if (favicon === null) {
    favicon = $('head > link[rel~="icon"]');
  }
  return favicon;
}

function faviconNotify(flag) {
  getFavicon().attr('href', flag ? FAVICON_NOTIFY : FAVICON_ORIGINAL);
}

function isNumeric(num){
  return !isNaN(num);
}

function disableResponsesForThreadsExceedingPagesLimit() {
  const pagesNavBar = $('#comments').find('.nav').has('.page-number').first();
  let pagesCount = 0;
  if (pagesNavBar.length !== 0) {
    const pagesElements = pagesNavBar.find('.page-number');
    for (let i = 0; i < pagesElements.length; ++i) {
      const pageElement = $(pagesElements[i]);
      const pageLabel = pageElement.text();
      if (isNumeric(pageLabel)) {
        ++pagesCount;
      }
    }
  }
  showResponses = pagesCount <= pagesLimitForResponses;
}

function showNotification(text) {
  // We can't show notification from the content script directly,
  // so let's send a corresponding message to the background script
  chrome.runtime.sendMessage({
    action: 'show_notification',
    title: 'lorify',
    message: text,
    iconUrl: './res/icons/penguin-64.png'
  });
}

function onDOMReady() {
  chrome.storage.sync.get({
    autorefreshEnabled: true,
    autorefreshIntervalSecs: 10,
    delayBeforePreviewMillisecs: 0,
    delayAfterPreviewMillisecs: 800,
    pagesLimitForResponses: 20,
    desktopNotificationsEnabled: false
  }, function(items) {
    autorefreshEnabled = items.autorefreshEnabled;
    autorefreshIntervalSecs = items.autorefreshIntervalSecs;
    autorefreshLeftSecs = autorefreshIntervalSecs;
    delayBeforePreviewMillisecs = items.delayBeforePreviewMillisecs;
    delayAfterPreviewMillisecs = items.delayAfterPreviewMillisecs;
    pagesLimitForResponses = items.pagesLimitForResponses;
    desktopNotificationsEnabled = items.desktopNotificationsEnabled;

    disableResponsesForThreadsExceedingPagesLimit();
    removePreviewsOnClick();
    setShowPreviewCallback($('div.title > a'));
    disableAutorefreshForClosedTopics();
    setAutorefresher();
    addResponsesLinks();
  });
}

$(function() {
  onDOMReady();
});
