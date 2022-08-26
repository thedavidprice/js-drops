const teamMembers = [
  {
    name: 'Falcon',
    imageUrl:
      'https://user-images.githubusercontent.com/6943688/172686586-f8393179-c7b3-4268-87a9-ba80502c5a04.png',
  },
  {
    name: 'Hawk Eye',
    imageUrl:
      'https://user-images.githubusercontent.com/6943688/172687131-0b4704d2-e044-43dd-a340-d6648c8170a9.png',
  },
  {
    name: 'Winter Soldier',
    imageUrl:
      'https://user-images.githubusercontent.com/6943688/172687168-5868d53b-8aba-4aa9-a2eb-f8f37a65bb30.png',
  },
  {
    name: 'Thor',
    imageUrl:
      'https://user-images.githubusercontent.com/6943688/172687211-2ece1646-2447-4c74-bb64-d59e2cab4873.png',
  },
  {
    name: 'Captain America',
    imageUrl:
      'https://user-images.githubusercontent.com/6943688/172687222-655e73e3-f3a8-44e3-9c08-54d64898ae94.png',
  },
  {
    name: 'Black Widow',
    imageUrl:
      'https://user-images.githubusercontent.com/6943688/172687305-38b568ac-5e05-40d0-94b2-4b98f6614821.png',
  },
  {
    name: 'Captain Marvel',
    imageUrl:
      'https://user-images.githubusercontent.com/6943688/172687287-4147a886-3fbf-4d96-b767-ebb0d181dfa8.png',
  },
  {
    name: 'Black Panther',
    imageUrl:
      'https://user-images.githubusercontent.com/6943688/172687328-0ee4f53e-881d-4e2b-9fbc-acef6d326a05.png',
  },
  {
    name: 'Iron Man',
    imageUrl:
      'https://user-images.githubusercontent.com/6943688/172687376-5c27e825-88fd-495e-9402-1d6f21aa5ed4.png',
  },
  {
    name: 'Vision',
    imageUrl:
      'https://user-images.githubusercontent.com/6943688/172687393-f61d0e8a-ff54-4377-acac-f9a6ee79e778.png',
  },
]

const TeamPage = () => {
  return (
    <>
      <div className="bg-gray-900">
        <div className="mx-auto x-8 py-12">
          <div className="space-y-12 px-6">
            <img
              className="w-96 mx-auto"
              src="https://user-images.githubusercontent.com/6943688/172691459-c2bd6ea2-1b27-4532-8b28-a70c811f7339.png"
              alt="The Avengers"
            />
            <ul className="grid grid-cols-5 gap-x-4 gap-y-6">
              {teamMembers.map((member) => (
                <li key={member.name}>
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
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </>
  )
}

export default TeamPage
