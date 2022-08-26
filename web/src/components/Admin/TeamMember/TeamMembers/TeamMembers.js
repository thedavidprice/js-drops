import humanize from 'humanize-string'

import { Link, routes } from '@redwoodjs/router'
import { useMutation } from '@redwoodjs/web'
import { toast } from '@redwoodjs/web/toast'

import { QUERY } from 'src/components/Admin/TeamMember/TeamMembersCell'

const DELETE_TEAM_MEMBER_MUTATION = gql`
  mutation DeleteTeamMemberMutation($id: Int!) {
    deleteTeamMember(id: $id) {
      id
    }
  }
`

const MAX_STRING_LENGTH = 150

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

const truncate = (text) => {
  let output = text
  if (text && text.length > MAX_STRING_LENGTH) {
    output = output.substring(0, MAX_STRING_LENGTH) + '...'
  }
  return output
}

const jsonTruncate = (obj) => {
  return truncate(JSON.stringify(obj, null, 2))
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

const TeamMembersList = ({ teamMembers }) => {
  const [deleteTeamMember] = useMutation(DELETE_TEAM_MEMBER_MUTATION, {
    onCompleted: () => {
      toast.success('TeamMember deleted')
    },
    onError: (error) => {
      toast.error(error.message)
    },
    // This refetches the query on the list page. Read more about other ways to
    // update the cache over here:
    // https://www.apollographql.com/docs/react/data/mutations/#making-all-other-cache-updates
    refetchQueries: [{ query: QUERY }],
    awaitRefetchQueries: true,
  })

  const onDeleteClick = (id) => {
    if (confirm('Are you sure you want to delete teamMember ' + id + '?')) {
      deleteTeamMember({ variables: { id } })
    }
  }

  return (
    <div className="rw-segment rw-table-wrapper-responsive">
      <table className="rw-table">
        <thead>
          <tr>
            <th>Id</th>
            <th>Name</th>
            <th>Image url</th>
            <th>&nbsp;</th>
          </tr>
        </thead>
        <tbody>
          {teamMembers.map((teamMember) => (
            <tr key={teamMember.id}>
              <td>{truncate(teamMember.id)}</td>
              <td>{truncate(teamMember.name)}</td>
              <td>{truncate(teamMember.imageUrl)}</td>
              <td>
                <nav className="rw-table-actions">
                  <Link
                    to={routes.adminTeamMember({ id: teamMember.id })}
                    title={'Show teamMember ' + teamMember.id + ' detail'}
                    className="rw-button rw-button-small"
                  >
                    Show
                  </Link>
                  <Link
                    to={routes.adminEditTeamMember({ id: teamMember.id })}
                    title={'Edit teamMember ' + teamMember.id}
                    className="rw-button rw-button-small rw-button-blue"
                  >
                    Edit
                  </Link>
                  <button
                    type="button"
                    title={'Delete teamMember ' + teamMember.id}
                    className="rw-button rw-button-small rw-button-red"
                    onClick={() => onDeleteClick(teamMember.id)}
                  >
                    Delete
                  </button>
                </nav>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  )
}

export default TeamMembersList
