
import Project from '@/models/Project'

let projects = [
  {
    id: 'warriors-lighthouse',
    type: 'Personal project',
    name: 'Warriors Lighthouse',
    role: 'Vue development, UI design',
    story: 'I did web development using Vue and UI design using Adobe Experience Design. The main idea of the project was to increase the quality of the company processes by reducing the number of human errors.',
    collabs: ['isisnaomi'],
    startDate: 'March 2017',
    endDate: 'October 2017',
    captures: [
      'http://assets.app/warriors/1.png',
      'http://assets.app/warriors/2.png',
      'http://assets.app/warriors/3.png',
      'http://assets.app/warriors/4.png'
    ]
  },
  {
    id: 'kiiwik-landing',
    type: 'YellowMe Project',
    name: 'Kiiwik Landing',
    role: 'Front-end development',
    story: 'I did front-end web development using Bootstrap. This project was an effort of the Kiiwik team to share the idea behind the project and communicate the security and personality the app has to offer.',
    collabs: ['giocervera'],
    startDate: 'June 2017',
    endDate: 'June 2017',
    captures: [
      'http://assets.app/kiiwik/1.png',
      'http://assets.app/kiiwik/2.png',
      'http://assets.app/kiiwik/3.png',
      'http://assets.app/kiiwik/4.png'
    ]
  },
  {
    id: 'astrosalsa-dashboard',
    type: 'Personal project',
    name: 'Astrosalsa Dashboard',
    role: 'Web development, UI design',
    story: 'I did web development using jQuery & PHP and UI design using Adobe Photoshop. The purpose of the project was to allow Astrosalsa to recover control over payments, classes access and accounting.',
    collabs: ['isisnaomi'],
    startDate: 'August 2016',
    endDate: 'January 2017',
    captures: [
      'http://assets.app/astrosalsa/1.png',
      'http://assets.app/astrosalsa/2.png',
      'http://assets.app/astrosalsa/3.png',
      'http://assets.app/astrosalsa/4.png'
    ]
  }
]

export default projects.map(x => new Project(x))
