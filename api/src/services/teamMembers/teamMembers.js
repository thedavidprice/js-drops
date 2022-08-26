import { db } from 'src/lib/db'

export const teamMembers = () => {
  return db.teamMember.findMany()
}

export const teamMember = ({ id }) => {
  return db.teamMember.findUnique({
    where: { id },
  })
}

export const createTeamMember = ({ input }) => {
  return db.teamMember.create({
    data: input,
  })
}

export const updateTeamMember = ({ id, input }) => {
  return db.teamMember.update({
    data: input,
    where: { id },
  })
}

export const deleteTeamMember = ({ id }) => {
  return db.teamMember.delete({
    where: { id },
  })
}
