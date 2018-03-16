
import Project from '@/models/Project'

let projects = [
  {
    id: 'lintercat-landing',
    type: 'Lintercat project',
    name: 'Lintercat landing',
    role: 'Vue development, UI/UX design',
    story: 'I did UI/UX design with Sketch and front-end development using Vue and Foundation. This  project presents Lintercat\'s digital product development services and amazes it\'s visitors with a motion focused experience.',
    collabs: [
      {
        nickname: 'rejonpardenilla',
        url: 'https://github.com/rejonpardenilla'
      }
    ],
    startDate: 'December 2017',
    endDate: 'March 2018',
    captures: [
      {
        type: 'macbook',
        source: '/static/lintercat-landing/0.gif'
      },
      {
        type: 'image',
        source: '/static/lintercat-landing/1.png'
      },
      {
        type: 'image',
        source: '/static/lintercat-landing/2.png'
      },
      {
        type: 'image',
        source: '/static/lintercat-landing/3.png'
      }
    ]
  },
  {
    id: 'astro-dashboard',
    type: 'Personal project',
    name: 'Astro Dashboard',
    role: 'Web development, UI/UX design',
    story: 'I did web development using jQuery & PHP and UI design using Adobe Photoshop. The purpose of the project was to allow Astrosalsa to recover control over payments, classes access and accounting.',
    collabs: [
      {
        nickname: 'isisnaomi',
        url: 'https://github.com/isisnaomi'
      },
      {
        nickname: 'davidhernandeze',
        url: 'https://github.com/davidhernandeze'
      }
    ],
    startDate: 'August 2016',
    endDate: 'January 2017',
    captures: [
      {
        type: 'image',
        source: '/static/astrosalsa/1.png'
      },
      {
        type: 'image',
        source: '/static/astrosalsa/2.png'
      },
      {
        type: 'image',
        source: '/static/astrosalsa/3.png'
      },
      {
        type: 'image',
        source: '/static/astrosalsa/4.png'
      }
    ]
  },
  {
    id: 'warriors-lighthouse',
    type: 'Personal project',
    name: 'Warriors Lighthouse',
    role: 'Vue development, UI/UX design',
    story: 'I did web development using Vue and UI design using Adobe Experience Design. The main idea of the project was to increase the quality of the company processes by reducing the number of human errors.',
    collabs: [
      {
        nickname: 'isisnaomi',
        url: 'https://github.com/isisnaomi'
      }
    ],
    startDate: 'March 2017',
    endDate: 'October 2017',
    captures: [
      {
        type: 'image',
        source: '/static/warriors/1.png'
      },
      {
        type: 'image',
        source: '/static/warriors/2.png'
      },
      {
        type: 'image',
        source: '/static/warriors/3.png'
      },
      {
        type: 'image',
        source: '/static/warriors/4.png'
      }
    ]
  },
  {
    id: 'kiiwik-landing',
    type: 'YellowMe Project',
    name: 'Kiiwik Landing',
    role: 'Front-end development',
    story: 'I did front-end web development using Bootstrap. This project was an effort of the Kiiwik team to share the idea behind the project and communicate the security and personality the app has to offer.',
    collabs: [
      {
        nickname: 'giocervera',
        url: 'https://www.behance.net/atomkinder'
      }
    ],
    startDate: 'June 2017',
    endDate: 'June 2017',
    captures: [
      {
        type: 'image',
        source: '/static/kiiwik/1.png'
      },
      {
        type: 'image',
        source: '/static/kiiwik/2.png'
      },
      {
        type: 'image',
        source: '/static/kiiwik/3.png'
      },
      {
        type: 'image',
        source: '/static/kiiwik/4.png'
      }
    ]
  }
]

export default projects.map(x => new Project(x))
