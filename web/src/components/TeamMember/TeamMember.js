const TeamMember = ({ member }) => {
  return (
    <div>
      <div className="space-y-4">
        <div className="aspect-w-3 aspect-h-2">
          <img
            className="object-cover shadow-lg rounded-xl"
            src={member.imageUrl}
            alt="Team member headshot"
          />
        </div>

        <div className="space-y-2">
          <div className="text-lg leading-6 font-medium space-y-1">
            <h3 className="text-gray-200">{member.name}</h3>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TeamMember
