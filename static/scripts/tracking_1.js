window.dataLayer = window.dataLayer || [];
function gtag() {
  dataLayer.push(arguments);
}
gtag('js', new Date());
gtag('config', 'UA-169315754-1');
gtag('config', 'AW-625352542');
//BING
(function (w, d, t, r, u) {
  var f, n, i;
  (w[u] = w[u] || []),
    (f = function () {
      var o = { ti: '17222362' };
      (o.q = w[u]), (w[u] = new UET(o)), w[u].push('pageLoad');
    }),
    (n = d.createElement(t)),
    (n.src = r),
    (n.async = 1),
    (n.onload = n.onreadystatechange =
      function () {
        var s = this.readyState;
        (s && s !== 'loaded' && s !== 'complete') ||
          (f(), (n.onload = n.onreadystatechange = null));
      }),
    (i = d.getElementsByTagName(t)[0]),
    i.parentNode.insertBefore(n, i);
})(window, document, 'script', '//bat.bing.com/bat.js', 'uetq');
