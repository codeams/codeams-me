
export default class Project {
  constructor (attributes) {
    this.id = attributes.id || 0
    this.type = attributes.type || 'Unknown'
    this.name = attributes.name || 'Unknown'
    this.role = attributes.role || 'Unknown'
    this.story = attributes.story || undefined
    this.collabs = attributes.collabs || []
    this.startDate = attributes.startDate || 'Unknown'
    this.endDate = attributes.endDate || 'Unknown'
    this.captures = attributes.captures || []
  }

  get cover () {
    return this.captures[0] || undefined
  }
}
