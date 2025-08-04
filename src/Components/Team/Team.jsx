import React from 'react';
import team from '../../assets/testimonial.jpg'

const facultyData = [
  {
    name: 'Khalid Imam',
    title: 'Data Scientist',
    companies: ['Fractal', 'Deloitte'],
    experience: '5+ Years',
    teaching: '3+ Years',
    description: 'Senior Data Scientist at Fractal: Specializes in leveraging AI for business solutions...',
    image: team, // Replace with actual image paths
  },
  {
    name: 'Ayan Ali',
    title: 'Senior Data Scientist',
    companies: ['Novartis'],
    experience: '5+ Years',
    teaching: '4+ Years',
    description: 'Senior Data Scientist, Synopsys, Ex-Novartis, 4 years of experience',
    image: team,
  },
  {
    name: 'Alisha',
    title: 'HOD - Analytics',
    companies: ['Physics Wallah'],
    experience: '8+ Years',
    teaching: '5+ Years',
    description: 'With 13 years of expertise in Data Analytics, Saurabh is passionate towards teaching.',
    image: team,
  },
  {
    name: 'Yaseen',
    title: 'Software Engineer',
    companies: ['Amazon'],
    experience: '7+ Years',
    teaching: '4+ Years',
    description: 'Software Engineer working on cutting-edge web technologies.',
    image: team,
  }
];

const TeamCard = () => {
  return (
    <div className="px-4 py-12 bg-white sm:px-6 lg:px-16">
      <h2 className="mb-4 text-5xl font-bold text-center text-gray-900 font-oswald">
        Guidance by Experts: Our Esteemed Faculty
      </h2>
      <p className="mb-10 text-center text-gray-600">
        Experience excellence in mentorship from industry-leading professionals.
      </p>

      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {facultyData.map((faculty, index) => (
          <div key={index} className="overflow-hidden transition-shadow bg-white rounded-lg shadow-md hover:shadow-lg">
            <div className="flex justify-center">
              <img
                src={faculty.image}
                alt={faculty.name}
                className="object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold">{faculty.name}</h3>
              <p className="mb-2 text-sm text-gray-500">{faculty.title}</p>

              <div className="flex flex-wrap gap-2 mb-2">
                {faculty.companies.map((company, i) => (
                  <span key={i} className="text-sm font-semibold text-gray-700">
                    {company}
                  </span>
                ))}
              </div>

              <div className="flex items-center mb-1 text-sm text-gray-600">
                <span className="mr-2">🧳</span> {faculty.experience} Work Experience
              </div>
              <div className="flex items-center mb-3 text-sm text-gray-600">
                <span className="mr-2">👨‍🏫</span> {faculty.teaching} Teaching Experience
              </div>

              <p className="text-sm text-gray-700">{faculty.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TeamCard;
