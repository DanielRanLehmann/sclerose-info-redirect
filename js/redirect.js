// https://developer.mozilla.org/en-US/docs/Web/API/URLSearchParams/URLSearchParams
// https://googlechrome.github.io/samples/urlsearchparams/
// https://stackoverflow.com/questions/503093/how-do-i-redirect-to-another-webpage
// https://stackoverflow.com/questions/16873323/javascript-sleep-wait-before-continuing/16873849

const WAIT_IN_SECONDS = 2;

$(document).ready(function() {
  // example: 'https://sclerose.it/redirect?advertiser=https://www.apple.com'
  let url = new URL(window.location);
  let params = new URLSearchParams(url.search);
  if (params.has('advertiser')) {
    var advertiserURL = params.getAll('advertiser')[0];
    setTimeout(function() {
      window.location.replace(advertiserURL);
    }, WAIT_IN_SECONDS * 1000);
  }
});
