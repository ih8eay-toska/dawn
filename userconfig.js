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
            url: 'https://www.youtube.com/',
            name: 'youtube',
            icon: 'brand-youtube',
            icon_color: '#8B6464'
          },
          {
            name: 'steam',
            url: 'https://steamcommunity.com/',
            icon: 'brand-steam',
            icon_color: '#647B8B'
          },
          {
            name: 'reddit',
            url: 'https://www.reddit.com/',
            icon_color: '#8B7564',
            icon: 'brand-reddit',
          },
          {
            name: 'twitter',
            url: 'https://x.com/',
            icon: 'brand-twitter',
            icon_color: '#648B7D'
          },
          {
            name: 'facebook',
            url: 'https://www.facebook.com/',
            icon: 'brand-facebook',
            icon_color: '#648B7D'
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
            url: 'https://mail.google.com/mail/u/1/#inbox',
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
          name: 'music services',
          links: [
            {
              url: 'https://soundcloud.com/',
              icon: 'brand-soundcloud',
              icon_color: '#c57750'
            },
            {
              url: 'https://youtu.be/',
              icon: 'brand-youtube',
              icon_color: '#996767'
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
          ]
        },
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
          name: 'music boards',
          links: [
            {
              name: '/music/',
              url: 'https://lainchan.org/music/',
              icon: 'disc'
            },
            {
              name: '/mu/',
              url: 'https://boards.4channel.org/mu/',
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
          name: 'subreddits',
          links: [
            {
              name: 'r/startpages/',
              url: 'https://www.reddit.com/r/startpages/'
            },
            {
              name: 'r/unixporn',
              url: 'https://www.reddit.com/r/unixporn/'
            },
            {
              name: 'r/mechkbds/',
              url: 'https://www.reddit.com/r/MechanicalKeyboards/',
              icon: 'keyboard',
              icon_color: '#a57685'
            },
            {
              name: 'r/programming',
              url: 'https://www.reddit.com/r/programming/'
            }
          ]
        },
        {
          name: 'blogs',
          links: [
            {
              name: 'fasterthanli',
              url: 'https://fasterthanli.me/articles',
              icon: 'anchor'
            },
            {
              name: 'dev.to',
              url: 'https://dev.to'
            },
            {
              name: 'mataroa.blog',
              url: 'https://collection.mataroa.blog',
            }
          ]
        },
        {
          name: 'misc',
          links: [
            {
              name: 'post office',
              url: 'http://afternoon.dynu.com/letterbox.html',
              icon: 'mailbox'
            },
            {
              name: 'rust docs',
              url: 'https://doc.rust-lang.org/book/',
              icon: 'notebook',
              icon_color: '#977a3a'
            }
          ]
        }
      ]
    }]
});
