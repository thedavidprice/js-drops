import TeamMember from 'src/components/Admin/TeamMember/TeamMember'

export const QUERY = gql`
  query FindTeamMemberById($id: Int!) {
    teamMember: teamMember(id: $id) {
      id
      name
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>TeamMember not found</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ teamMember }) => {
  return <TeamMember teamMember={teamMember} />
}
