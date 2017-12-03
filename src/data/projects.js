
import Project from '@/models/Project'

let projects = [
  {
    id: 'warriors-lighthouse',
    type: 'Personal project',
    name: 'Warriors Lighthouse',
    role: 'Vue development, UI design.',
    story: 'I did UI design using Adobe Experience Design and  development of a SPA using Vue. The main idea for this project was to enforce the rigurosity and quiality of the process of the Warriors company.',
    collabs: ['isisnaomi'],
    startDate: 'March 2017',
    endDate: 'October 2017',
    captures: [
      'http://assets.app/warriors-lighthouse.png',
      'http://assets.app/warriors-lighthouse.png',
      'http://assets.app/warriors-lighthouse.png',
      'http://assets.app/warriors-lighthouse.png',
      'http://assets.app/warriors-lighthouse.png'
    ]
  },
  {
    id: 'semple',
    name: 'Semple',
    role: 'iOS development, API design.',
    captures: ['http://assets.app/semple.png']
  },
  {
    id: 'kiiwik-landing',
    name: 'Kiiwik Landing',
    role: 'Front-end development.',
    captures: ['http://assets.app/kiiwik-landing.png']
  },
  {
    id: 'congress',
    name: 'Congress',
    role: 'Vue development, UI & interaction design.',
    captures: ['http://assets.app/congress.png']
  }
]

export default projects.map(x => new Project(x))
