
import Project from '@/models/Project'

let projects = [
  {
    id: 'warriors-lighthouse',
    type: 'Personal project',
    name: 'Warriors Lighthouse',
    role: 'Vue development, UI design',
    story: 'I did SPA development using Vue and UI design using Adobe Experience Design. The main idea of the project was to increase the quality of Warriors company processes and reduce the number of human errors.',
    collabs: ['isisnaomi'],
    startDate: 'March 2017',
    endDate: 'October 2017',
    captures: [
      'http://assets.app/warriors-lighthouse.png',
      'http://assets.app/warriors-lighthouse-2.png',
      'http://assets.app/warriors-lighthouse.png',
      'http://assets.app/warriors-lighthouse-2.png',
      'http://assets.app/warriors-lighthouse.png',
      'http://assets.app/warriors-lighthouse-2.png',
      'http://assets.app/warriors-lighthouse.png',
      'http://assets.app/warriors-lighthouse-2.png'
    ]
  },
  {
    id: 'semple',
    type: 'Yellowme Project',
    name: 'Semple',
    role: 'iOS development, API design',
    story: '',
    captures: ['http://assets.app/semple.png']
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
