import { navigate, routes } from '@redwoodjs/router'

import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import TeamMemberForm from 'src/components/Admin/TeamMember/TeamMemberForm'

export const QUERY = gql`
  query EditTeamMemberById($id: Int!) {
    teamMember: teamMember(id: $id) {
      id
      name
      imageUrl
    }
  }
`
const UPDATE_TEAM_MEMBER_MUTATION = gql`
  mutation UpdateTeamMemberMutation($id: Int!, $input: UpdateTeamMemberInput!) {
    updateTeamMember(id: $id, input: $input) {
      id
      name
      imageUrl
    }
  }
`

export const Loading = () => <div>Loading...</div>

export const Failure = ({ error }) => (
  <div className="rw-cell-error">{error.message}</div>
)

export const Success = ({ teamMember }) => {
  const [updateTeamMember, { loading, error }] = useMutation(
    UPDATE_TEAM_MEMBER_MUTATION,
    {
      onCompleted: () => {
        toast.success('TeamMember updated')
        navigate(routes.adminTeamMembers())
      },
      onError: (error) => {
        toast.error(error.message)
      },
    }
  )

  const onSave = (input, id) => {
    updateTeamMember({ variables: { id, input } })
  }

  return (
    <div className="rw-segment">
      <header className="rw-segment-header">
        <h2 className="rw-heading rw-heading-secondary">
          Edit TeamMember {teamMember.id}
        </h2>
      </header>
      <div className="rw-segment-main">
        <TeamMemberForm
          teamMember={teamMember}
          onSave={onSave}
          error={error}
          loading={loading}
        />
      </div>
    </div>
  )
}
