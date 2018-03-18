
import Project from '@/models/Project'

let projects = [
  {
    id: 'lintercat-landing',
    visible: true,
    type: 'Lintercat project',
    name: 'Lintercat landing',
    role: 'Vue development, UI/UX design',
    story: `
      <p>I did UI/UX design with Sketch and front-end development using Vue and Foundation.</p>
      <p>This  project presents Lintercat's digital product development services and amazes it's visitors with a motion focused experience.</p>
    `,
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
    visible: true,
    type: 'Personal project',
    name: 'Astro Dashboard',
    role: 'Web development, UI/UX design',
    story: `
      <p>I did web development using jQuery & PHP and UI/UX design using Adobe Photoshop.</p>
      <p>The purpose of the project was to allow Astrosalsa to recover control over payments, classes access and accounting.</p>
    `,
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
    visible: true,
    type: 'Personal project',
    name: 'Warriors Lighthouse',
    role: 'Vue development, UI/UX design',
    story: `
      <p>I did web development using Vue and UI/UX design using Adobe Experience Design.</p>
      <p>The main idea of the project was to increase the quality of the company processes by reducing the number of human errors.</p>
    `,
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
    id: 'congress',
    visible: true,
    type: 'UADY Project',
    name: 'CONISOFT Congress',
    role: 'Vue+Laravel development, UI/UX design',
    story: `
      <p>I did UI/UX design using Adobe Experience Design, API development using Laravel and SPA development using Vue.</p>
      <p>Congress is a reusable registration system that was first used for CONISOFT 2017.</p>
    `,
    collabs: [],
    startDate: 'december 2016',
    endDate: 'october 2017',
    captures: [
      {
        type: 'image',
        source: '/static/congress/1.png'
      },
      {
        type: 'image',
        source: '/static/congress/2.png'
      },
      {
        type: 'image',
        source: '/static/congress/3.png'
      },
      {
        type: 'image',
        source: '/static/congress/4.png'
      },
      {
        type: 'image',
        source: '/static/congress/5.png'
      }
    ]
  },
  {
    id: 'kiiwik-landing',
    visible: false,
    type: 'YellowMe Project',
    name: 'Kiiwik Landing',
    role: 'Front-end development',
    story: `
      <p>I did front-end web development using jQuery and Bootstrap.</p>
      <p>This project was one of the channels the Kiiwik team used to share the idea behind the project and communicate the security and personality the Kiiwik app has to offer.</p>
    `,
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
