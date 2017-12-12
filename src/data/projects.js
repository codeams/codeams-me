
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
  },
  {
    id: 'kiiwik-landing',
    name: 'Kiiwik Landing',
    role: 'Front-end development',
    captures: ['http://assets.app/kiiwik-landing.png']
  },
  {
    id: 'congress',
    name: 'Congress',
    role: 'Vue development, UI & interaction design',
    captures: ['http://assets.app/congress.png']
  }
]

export default projects.map(x => new Project(x))
