import { defineConfig } from 'vitepress'

const icon = (path: string, color = 'currentColor') =>
  `<svg class="bl-nav-icon" style="color:${color}" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">${path}</svg>`

const sb = (svgPath: string, label: string, color: string) =>
  `<span class="bl-sb-label">${icon(svgPath, color)}<span>${label}</span></span>`

export default defineConfig({
  title: 'BrokerLord',
  titleTemplate: ':title • BrokerLord',
  description: 'The curated directory of the best free, open-source & privacy-first resources on the web.',
  lang: 'en-US',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'dark',

  head: [
    ['link', { rel: 'icon', type: 'image/svg+xml', href: '/favicon.svg' }],
    ['meta', { name: 'theme-color', content: '#646cff' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:title', content: 'BrokerLord — Free & Open-Source Web Directory' }],
    [
      'meta',
      {
        property: 'og:description',
        content: 'The curated directory of the best free, open-source & privacy-first resources on the web.'
      }
    ],
    // Prevent FOUC: apply saved display mode (light / dark / amoled) & accent color before first paint
    [
      'script',
      {},
      `(function(){
        try {
          var d = document.documentElement;
          var mode = localStorage.getItem('brokerlord-display-mode') || 'dark';
          var accent = localStorage.getItem('brokerlord-accent') || 'indigo';
          if (mode === 'light') {
            d.classList.remove('dark', 'amoled');
            localStorage.setItem('vitepress-theme-appearance', 'light');
          } else if (mode === 'amoled') {
            d.classList.add('dark', 'amoled');
            localStorage.setItem('vitepress-theme-appearance', 'dark');
          } else {
            d.classList.add('dark');
            d.classList.remove('amoled');
            localStorage.setItem('vitepress-theme-appearance', 'dark');
          }
          d.dataset.accent = accent;
        } catch (e) {}
      })();`
    ]
  ],

  vite: {
    server: {
      host: '0.0.0.0',
      allowedHosts: true
    },
    preview: {
      host: '0.0.0.0',
      allowedHosts: true
    }
  },

  themeConfig: {
    logo: '/logo.svg',
    siteTitle: 'BrokerLord',

    nav: [
      { text: 'Beginners Guide', link: '/beginners-guide' },
      { text: 'Posts', link: '/posts/' },
      {
        text: 'Categories',
        items: [
          { text: 'Adblocking / Privacy', link: '/privacy' },
          { text: 'Artificial Intelligence', link: '/ai' },
          { text: 'Streaming & Video', link: '/video' },
          { text: 'Listening & Audio', link: '/audio' },
          { text: 'Gaming', link: '/gaming' },
          { text: 'Reading & Books', link: '/reading' },
          { text: 'Free Software & Downloads', link: '/downloading' },
          { text: 'Developer & Internet Tools', link: '/internet-tools' },
          { text: 'Educational', link: '/educational' },
          { text: 'Android / iOS', link: '/mobile' },
          { text: 'Linux / macOS', link: '/linux-macos' },
          { text: 'Non-English', link: '/non-english' },
          { text: 'Miscellaneous', link: '/misc' }
        ]
      },
      { text: 'Contribute', link: '/other/contributing' },
      {
        text: 'Instagram',
        link: 'https://www.instagram.com/brokerpratik/?hl=en'
      },
      {
        text: 'Email',
        link: 'mailto:brokerlordmefoolhe@gmail.com'
      }
    ],

    sidebar: [
      {
        text: 'Start Here',
        collapsed: false,
        items: [
          {
            text: sb('<path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>', 'Beginners Guide', '#818cf8'),
            link: '/beginners-guide'
          },
          {
            text: sb('<path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2Zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"/><path d="M18 14h-8"/><path d="M15 18h-5"/><path d="M10 6h8v4h-8V6Z"/>', 'Monthly Updates', '#f59e0b'),
            link: '/posts/'
          }
        ]
      },
      {
        text: 'Directory Wiki',
        collapsed: false,
        items: [
          {
            text: sb('<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>', 'Adblocking / Privacy', '#34d399'),
            link: '/privacy'
          },
          {
            text: sb('<path d="M12 8V4H8"/><rect width="16" height="12" x="4" y="8" rx="2"/><path d="M2 14h2"/><path d="M20 14h2"/><path d="M15 13v2"/><path d="M9 13v2"/>', 'Artificial Intelligence', '#a78bfa'),
            link: '/ai'
          },
          {
            text: sb('<rect width="20" height="15" x="2" y="7" rx="2" ry="2"/><polyline points="17 2 12 7 7 2"/>', 'Streaming & Video', '#f472b6'),
            link: '/video'
          },
          {
            text: sb('<path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"/>', 'Listening & Audio', '#fb7185'),
            link: '/audio'
          },
          {
            text: sb('<line x1="6" x2="10" y1="12" y2="12"/><line x1="8" x2="8" y1="10" y2="14"/><line x1="15" x2="15.01" y1="13" y2="13"/><line x1="18" x2="18.01" y1="11" y2="11"/><rect width="20" height="12" x="2" y="6" rx="2"/>', 'Gaming', '#38bdf8'),
            link: '/gaming'
          },
          {
            text: sb('<path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/>', 'Reading & Books', '#fbbf24'),
            link: '/reading'
          },
          {
            text: sb('<path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7 10 12 15 17 10"/><line x1="12" x2="12" y1="15" y2="3"/>', 'Free Software', '#60a5fa'),
            link: '/downloading'
          },
          {
            text: sb('<polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>', 'Dev & Internet Tools', '#2dd4bf'),
            link: '/internet-tools'
          },
          {
            text: sb('<path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/>', 'Educational', '#4ade80'),
            link: '/educational'
          },
          {
            text: sb('<rect width="14" height="20" x="5" y="2" rx="2" ry="2"/><path d="M12 18h.01"/>', 'Android / iOS', '#a3e635'),
            link: '/mobile'
          },
          {
            text: sb('<polyline points="4 17 10 11 4 5"/><line x1="12" x2="20" y1="19" y2="19"/>', 'Linux / macOS', '#fb923c'),
            link: '/linux-macos'
          },
          {
            text: sb('<circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/>', 'Non-English', '#c084fc'),
            link: '/non-english'
          },
          {
            text: sb('<path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>', 'Miscellaneous', '#e879f9'),
            link: '/misc'
          }
        ]
      },
      {
        text: 'More',
        collapsed: false,
        items: [
          {
            text: sb('<path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>', 'Contribute', '#f43f5e'),
            link: '/other/contributing'
          },
          {
            text: sb('<path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/>', 'Community', '#818cf8'),
            link: '/other/community'
          }
        ]
      }
    ],

    search: {
      provider: 'local',
      options: {
        detailedView: true,
        miniSearch: {
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 }
          }
        },
        translations: {
          button: {
            buttonText: 'Search directory...',
            buttonAriaLabel: 'Search BrokerLord directory'
          },
          modal: {
            displayDetails: 'Display detailed list',
            resetButtonTitle: 'Reset search',
            backButtonTitle: 'Close search',
            noResultsText: 'No matching resources found for',
            footer: {
              selectText: 'to open',
              navigateText: 'to navigate',
              closeText: 'to close'
            }
          }
        }
      }
    },

    outline: {
      level: [2, 3],
      label: 'On this page'
    },

    docFooter: {
      prev: 'Previous Category',
      next: 'Next Category'
    },

    socialLinks: [
      {
        icon: 'instagram',
        link: 'https://www.instagram.com/brokerpratik/?hl=en',
        ariaLabel: 'BrokerLord on Instagram'
      },
      {
        icon: {
          svg: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>'
        },
        link: 'mailto:brokerlordmefoolhe@gmail.com',
        ariaLabel: 'Email BrokerLord'
      }
    ],

    footer: {
      message:
        'Curated with care for the open web • Contact: <a href="mailto:brokerlordmefoolhe@gmail.com">brokerlordmefoolhe@gmail.com</a> • <a href="https://www.instagram.com/brokerpratik/?hl=en" target="_blank" rel="noopener">Instagram @brokerpratik</a>',
      copyright: '© 2026 BrokerLord Directory'
    }
  }
})
