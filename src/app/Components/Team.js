import Image from 'next/image';
import { useInView } from 'react-intersection-observer';
import teamMemberImg1 from '/public/images/member1.png';
import teamMemberImg2 from '/public/images/member2.png';
import teamMemberImg3 from '/public/images/member3.png';
const Team = ({ setSlug }) => {
  const teamList = [
    { id: 1, teamImg: teamMemberImg1, name: 'Jaydon Vaccaro', designation: 'Doctor of Dental Surgery', bgColor: '#f9faff' },
    { id: 2, teamImg: teamMemberImg2, name: 'Jakob Baptista', designation: 'General Dentists', bgColor: '#f9faff' },
    { id: 3, teamImg: teamMemberImg3, name: 'Wilson Kenter', designation: 'General Dentists', bgColor: '#f9faff' },
  ];
  const { ref, inView, entry } = useInView({
    /* Optional options */
    threshold: 0.5,
  });
  // const about = useRef();
  if (inView) {
    if (entry.target.id == 'Team' && entry.isIntersecting) {
      setSlug('Team');
    }
  }
  return (
    <div ref={ref} id="Team">
      <h3 className="text-4xl lg:text-6xl font-semibold mb-12 text-center">Who We Are?</h3>

      <div className="flex flex-col md:flex-row justify-between pt-8">
        {teamList.map((list) => {
          return (
            <div className="card md:w-1/3 px-4" key={list.id}>
              <div className="card-image">
                <Image src={list.teamImg} alt="Image" className={`bg-[${list.bgColor}] rounded-[20px] w-full`} />
              </div>
              <div className="card-body text-center py-4">
                <h4 className="text-2xl lg:text-3xl font-medium mb-2">{list.name}</h4>
                <p className="text-base">{list.designation}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Team;
