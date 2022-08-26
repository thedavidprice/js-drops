import { Link, routes } from '@redwoodjs/router'

import TeamMembers from 'src/components/Admin/TeamMember/TeamMembers'

export const QUERY = gql`
  query FindTeamMembers {
    teamMembers {
      id
      name
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => {
  return (
    <div className="rw-text-center">
      {'No teamMembers yet. '}
      <Link to={routes.adminNewTeamMember()} className="rw-link">
        {'Create one?'}
      </Link>
    </div>
  )
}

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ teamMembers }) => {
  return <TeamMembers teamMembers={teamMembers} />
}
