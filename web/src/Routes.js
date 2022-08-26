// In this file, all Page components from 'src/pages` are auto-imported. Nested
// directories are supported, and should be uppercase. Each subdirectory will be
// prepended onto the component name.
//
// Examples:
//
// 'src/pages/HomePage/HomePage.js'         -> HomePage
// 'src/pages/Admin/BooksPage/BooksPage.js' -> AdminBooksPage

import { Set, Router, Route } from '@redwoodjs/router'

import TeamMembersLayout from 'src/layouts/Admin/TeamMembersLayout'

const Routes = () => {
  return (
    <Router>
      <Set wrap={TeamMembersLayout}>
        <Route path="/admin/team-members/new" page={AdminTeamMemberNewTeamMemberPage} name="adminNewTeamMember" />
        <Route path="/admin/team-members/{id:Int}/edit" page={AdminTeamMemberEditTeamMemberPage} name="adminEditTeamMember" />
        <Route path="/admin/team-members/{id:Int}" page={AdminTeamMemberTeamMemberPage} name="adminTeamMember" />
        <Route path="/admin/team-members" page={AdminTeamMemberTeamMembersPage} name="adminTeamMembers" />
      </Set>
      <Route path="/team" page={TeamPage} name="team" />
      <Route notfound page={NotFoundPage} />
    </Router>
  )
}

export default Routes
