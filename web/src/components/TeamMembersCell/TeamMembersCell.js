import TeamMember from '../TeamMember/TeamMember'

export const QUERY = gql`
  query TeamMembersQuery {
    teamMembers {
      id
      name
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Empty = () => <div>Empty</div>

export const Failure = ({ error }) => (
  <div style={{ color: 'red' }}>Error: {error.message}</div>
)

export const Success = ({ teamMembers }) => {
  return (
    <>
      <ul className="grid grid-cols-5 gap-x-4 gap-y-6">
        {teamMembers.map((member) => (
          <li key={member.id}>
            <TeamMember key={member.id} member={member} />
          </li>
        ))}
      </ul>
    </>
  )
}
