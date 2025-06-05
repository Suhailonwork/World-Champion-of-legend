self.__BUILD_MANIFEST = {
  "polyfillFiles": [
    "static/chunks/polyfills.js"
  ],
  "devFiles": [
    "static/chunks/react-refresh.js"
  ],
  "ampDevFiles": [],
  "lowPriorityFiles": [],
  "rootMainFiles": [],
  "rootMainFilesTree": {},
  "pages": {
    "/_app": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_app.js"
    ],
    "/_error": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/_error.js"
    ],
    "/teams/australia-champions": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/teams/australia-champions.js"
    ],
    "/teams/south-africa-champions": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/teams/south-africa-champions.js"
    ],
    "/teams/west-indies-champions": [
      "static/chunks/webpack.js",
      "static/chunks/main.js",
      "static/chunks/pages/teams/west-indies-champions.js"
    ]
  },
  "ampFirstPages": []
};
self.__BUILD_MANIFEST.lowPriorityFiles = [
"/static/" + process.env.__NEXT_BUILD_ID + "/_buildManifest.js",
,"/static/" + process.env.__NEXT_BUILD_ID + "/_ssgManifest.js",

];