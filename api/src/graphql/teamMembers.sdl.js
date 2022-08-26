export const schema = gql`
  type TeamMember {
    id: Int!
    name: String
    imageUrl: String
  }

  type Query {
    teamMembers: [TeamMember!]! @skipAuth
    teamMember(id: Int!): TeamMember @skipAuth
  }

  input CreateTeamMemberInput {
    name: String
    imageUrl: String
  }

  input UpdateTeamMemberInput {
    name: String
    imageUrl: String
  }

  type Mutation {
    createTeamMember(input: CreateTeamMemberInput!): TeamMember! @requireAuth
    updateTeamMember(id: Int!, input: UpdateTeamMemberInput!): TeamMember!
      @requireAuth
    deleteTeamMember(id: Int!): TeamMember! @requireAuth
  }
`
