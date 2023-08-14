import * as enums from '../utils/enums/Group'

class Contact {
  name: string
  group: enums.Group
  cel: string
  notes: string
  id: number

  constructor(
    name: string,
    group: enums.Group,
    cel: string,
    notes: string,
    id: number
  ) {
    this.name = name
    this.group = group
    this.cel = cel
    this.notes = notes
    this.id = id
  }
}

export default Contact
