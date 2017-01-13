const links = [
  { rel: 'shortcut icon', href: require('!url-loader?limit=1!../assets/favicons/favicon.ico') },
  { rel: 'apple-touch-icon', sizes: '180x180', href: require('../assets/favicons/apple-touch-icon.png') },
  { rel: 'icon', type: 'image/png', sizes: '32x32', href: require('../assets/favicons/favicon-32x32.png') },
  { rel: 'icon', type: 'image/png', sizes: '16x16', href: require('../assets/favicons/favicon-16x16.png') },
  { rel: 'manifest', href: require('!url-loader?limit=1!../assets/favicons/manifest.json') },
  { rel: 'mask-icon', color: '#5BBAD5', href: require('!url-loader?limit=1!../assets/favicons/safari-pinned-tab.svg') }
]

const meta = [
  { name: 'theme-color', content: '#FFFFFF' },
  { name: 'msapplication-config', content: 'none' }
]

export default { links, meta }
