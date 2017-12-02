
import Project from '@/models/Project'

let projects = [
  {
    id: 1,
    name: 'Warriors Lighthouse',
    role: 'Vue development, UI design.',
    previewUrl: 'http://assets.app/warriors-lighthouse.png'
  },
  {
    id: 2,
    name: 'Semple',
    role: 'iOS development, API design.',
    previewUrl: 'http://assets.app/semple.png'
  },
  {
    id: 3,
    name: 'Kiiwik Landing',
    role: 'Front-end development.',
    previewUrl: 'http://assets.app/kiiwik-landing.png'
  },
  {
    id: 4,
    name: 'Congress',
    role: 'Vue development, UI & interaction design.',
    previewUrl: 'http://assets.app/congress.png'
  }
]

export default projects.map(x => new Project(x))
