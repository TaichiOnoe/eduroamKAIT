/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js");

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "39cd68dcfd1dcc08282ec3705f9ed60c"
  },
  {
    "url": "assets/css/0.styles.b965be64.css",
    "revision": "9a07c34b7a8e3651488db6f42a90ea23"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/2.567fac94.js",
    "revision": "ac3c07dd1687b332f8d66d63c115fd6c"
  },
  {
    "url": "assets/js/3.60b89002.js",
    "revision": "ad07cffe71950f62e9c95bf8d55f9703"
  },
  {
    "url": "assets/js/4.325ed5c8.js",
    "revision": "3b73307249d0ae5f1b5227045d486a8f"
  },
  {
    "url": "assets/js/5.00a13cf5.js",
    "revision": "c1caa53914056a2709ce6b72fd2b2d25"
  },
  {
    "url": "assets/js/6.4ec304d6.js",
    "revision": "916d00004f945dc40e6e2bac0ec2b670"
  },
  {
    "url": "assets/js/app.93ce78da.js",
    "revision": "aa79066d729abf7e02ab818f803eb3b6"
  },
  {
    "url": "contact.html",
    "revision": "4411094fb715702961f926f14aace3f7"
  },
  {
    "url": "guide.html",
    "revision": "303396cb3e6cd5b1bf012af8b8c01a53"
  },
  {
    "url": "img/hero.png",
    "revision": "957f228e35efeb79aa5cc929b8b696d5"
  },
  {
    "url": "img/kait.jpg",
    "revision": "bf6093bf3595526b65a531f959173cc3"
  },
  {
    "url": "index.html",
    "revision": "c3f7ca0a5195d038956b39cb161b5998"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
