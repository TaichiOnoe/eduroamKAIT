module.exports = {
    title: 'eduroam KAIT',
    description: 'Official Website',

    serviceWorker: true,

    head: [
      ['link', { rel: 'manifest', href: '/manifest.json' }],
    ],

    themeConfig: {

        search:true,

        displayAllHeaders: true,

        serviceWorker: {
            updatePopup: true // Boolean | Object, default to undefined.
            // If set to true, the default text config will be: 
            // updatePopup: { 
            //    message: "New content is available.", 
            //    buttonText: "Refresh" 
            // }
          },

      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/guide' },
        { text: 'Contact', link: '/contact' },
      ],
    }
  }