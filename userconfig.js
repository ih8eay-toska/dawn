const CONFIG = new Config({
  crypto: {
    coin: 'BTC',
    currency: 'EUR',
    refreshIn: 10
  },
  overrideStorage: true, // override localStorage with fixed userconfig values
  temperature: {
    location: 'Ho Chi Minh City, Vietnam',
    scale: 'C'
  },
  clock: {
    format: 'h:i p',
    iconColor: '#ff7b95'
  },
  search: {
    engines: {
      g: ['https://google.com/search?q=', 'Google'],
      i: ['https://ixquick.com/do/search?q=', 'Ixquick'],
      d: ['https://duckduckgo.com/html?q=', 'DuckDuckGo'],
      y: ['https://youtube.com/results?search_query=', 'Youtube'],
      w: ['https://en.wikipedia.org/w/index.php?search=', 'Wikipedia']
    }
  },
  keybindings: {
    "t": 'todo-list',
    "s": 'search-bar'
  },
  disabled: [],
  openLastVisitedTab: false,
  tabs: [
    {
      name: 'sites',
      background_url: 'src/img/banners/bg-1.gif',
      categories: [{
        name: 'fun',
        links: [
          {
            name: 'facebook',
            url: 'https://www.facebook.com/',
            icon: 'brand-facebook',
            icon_color: '#648B7D'
          },
          {
            name: 'twitter',
            url: 'https://x.com/',
            icon: 'brand-twitter',
            icon_color: '#648B7D'
          },
          {
            name: 'reddit',
            url: 'https://www.reddit.com/',
            icon_color: '#8B7564',
            icon: 'brand-reddit',
          },
          {
            name: 'steam',
            url: 'https://steamcommunity.com/',
            icon: 'brand-steam',
            icon_color: '#647B8B'
          },
          {
            name: 'weeb-central',
            url: 'https://weebcentral.com/',
            icon: 'books',
            icon_color: '#647B8B'
          }
        ]
      },
      {
        name: 'music services',
        links: [
          {
            url: 'https://soundcloud.com/',
            icon: 'brand-soundcloud',
            icon_color: '#c57750'
          },
          {
            url: 'https://open.spotify.com/',
            icon: 'brand-spotify',
            icon_color: '#b2fba5'
          },
          {
            url: 'https://r-a-d.io/',
            icon: 'radio'
          },
          {
            url: 'https://www.youtube.com/',
            icon: 'brand-youtube',
            icon_color: '#8B6464'
          },
          {
            url: 'https://mynoise.net/',
            name: 'background noise',
            icon: 'disc'
          }
        ]
      },
      {
        name: 'Productivity',
        links: [
          {
            name: 'ChatGPT',
            url: 'https://chat.openai.com/',
            icon: 'robot'
          },
          {
            name: 'school',
            url: 'https://online.hcmute.edu.vn/',
            icon: 'school'
          },
          {
            name: 'mail',
            url: 'https://mail.google.com/mail/u/3/#inbox',
            icon: 'mail'
          },
          {
            name: 'calendar',
            url: 'https://calendar.google.com/calendar/u/4/r',
            icon: 'calendar'
          },
          {
            name: 'github',
            url: 'https://github.com/',
            icon: 'code'
          }
        ]
      }
      ]
    },
    {
      name: 'fun',
      background_url: 'src/img/banners/bg-2.gif',
      categories: [
        {
          name: 'Twitch',
          links: [
            {
              name: 'renyan',
              url: 'https://www.twitch.tv/renyan',
              icon: 'chess-king',
              icon_color: '#8b647b'
            },
            {
              name: 'humzh',
              url: 'https://www.twitch.tv/humzh',
              icon: 'device-gamepad',
              icon_color: '#64876d'
            }
          ]
        },
        {
          name: 'xxx',
          links: [
            {
              name: 'waifu2x',
              url: 'https://waifu2x.booru.pics/',
              icon: 'photo-scan'
            },
            {
              name: 'hitomi',
              url: 'https://hitomi.la/',
              icon: 'eye-exclamation'
            }
          ]
        },
        {
          name: 'boards',
          links: [
            {
              name: '/r9k/',
              url: 'https://boards.4chan.org/r9k/',
              icon: 'robot-off'
            },
            {
              name: '/w/',
              url: 'https://boards.4chan.org/w/',
              icon: 'background'
            },
            {
              name: '/wg/',
              url: 'https://boards.4chan.org/wg/',
              icon: 'box-multiple'
            },
            {
              name: '/w/',
              url: 'https://boards.4chan.org/wsg/',
              icon: 'gif'
            }
          ]
        }
      ]
    },
    {
      name: 'tech',
      background_url: 'src/img/banners/bg-3.gif',
      categories: [
        {
          name: 'modding',
          links: [
            {
              name: 'modrinth',
              url: 'https://modrinth.com/',
              icon: 'diamond'
            },
            {
              name: 'nexus',
              url: 'https://www.nexusmods.com/',
              icon: 'box-padding'
            },
            {
              name: 'gamebanana',
              url: 'https://gamebanana.com/',
              icon: 'device-nintendo',
              icon_color: '#a57685'
            }
          ]
        }
      ]
    }]
});
