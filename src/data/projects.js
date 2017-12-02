
import Project from '@/models/Project'

export default [
  new Project({
    id: 1,
    name: 'Warriors Lighthouse',
    role: 'Vue development, UI design.',
    previewUrl: 'http://assets.app/warriors-lighthouse.png'
  }),
  new Project({
    id: 2,
    name: 'Semple',
    role: 'iOS development, API design.',
    previewUrl: 'http://assets.app/semple.png'
  }),
  new Project({
    id: 3,
    name: 'Kiiwik Landing',
    role: 'Front-end development.',
    previewUrl: 'http://assets.app/kiiwik-landing.png'
  }),
  new Project({
    id: 4,
    name: 'Congress',
    role: 'Vue development, UI & interaction design.',
    previewUrl: 'http://assets.app/congress.png'
  })
]
