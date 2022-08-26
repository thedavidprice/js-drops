import humanize from 'humanize-string'

import { Link, routes, navigate } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

const DELETE_TEAM_MEMBER_MUTATION = gql`
  mutation DeleteTeamMemberMutation($id: Int!) {
    deleteTeamMember(id: $id) {
      id
    }
  }
`

const formatEnum = (values) => {
  if (values) {
    if (Array.isArray(values)) {
      const humanizedValues = values.map((value) => humanize(value))
      return humanizedValues.join(', ')
    } else {
      return humanize(values)
    }
  }
}

const jsonDisplay = (obj) => {
  return (
    <pre>
      <code>{JSON.stringify(obj, null, 2)}</code>
    </pre>
  )
}

const timeTag = (datetime) => {
  return (
    datetime && (
      <time dateTime={datetime} title={datetime}>
        {new Date(datetime).toUTCString()}
      </time>
    )
  )
}

const checkboxInputTag = (checked) => {
  return <input type="checkbox" checked={checked} disabled />
}

const TeamMember = ({ teamMember }) => {
  const [deleteTeamMember] = useMutation(DELETE_TEAM_MEMBER_MUTATION, {
    onCompleted: () => {
      toast.success('TeamMember deleted')
      navigate(routes.adminTeamMembers())
    },
    onError: (error) => {
      toast.error(error.message)
    },
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete teamMember ' + id + '?')) {
      deleteTeamMember({ variables: { id } })
    }
  }

  return (
    <>
      <div className="rw-segment">
        <header className="rw-segment-header">
          <h2 className="rw-heading rw-heading-secondary">
            TeamMember {teamMember.id} Detail
          </h2>
        </header>
        <table className="rw-table">
          <tbody>
            <tr>
              <th>Id</th>
              <td>{teamMember.id}</td>
            </tr>
            <tr>
              <th>Name</th>
              <td>{teamMember.name}</td>
            </tr>
            <tr>
              <th>Image url</th>
              <td>{teamMember.imageUrl}</td>
            </tr>
          </tbody>
        </table>
      </div>
      <nav className="rw-button-group">
        <Link
          to={routes.adminEditTeamMember({ id: teamMember.id })}
          className="rw-button rw-button-blue"
        >
          Edit
        </Link>
        <button
          type="button"
          className="rw-button rw-button-red"
          onClick={() => onDeleteClick(teamMember.id)}
        >
          Delete
        </button>
      </nav>
    </>
  )
}

export default TeamMember
