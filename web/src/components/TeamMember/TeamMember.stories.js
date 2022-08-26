import { standard } from '../TeamMembersCell/TeamMembersCell.mock'

import TeamMember from './TeamMember'

export const generated = () => {
  return <TeamMember member={standard().teamMembers[2]} />
}

export default { title: 'Components/TeamMember' }
