import React from "react";
import HeadShotWithText from "../../components/headShotWithText/headShotWithText";
import headShotPic from "../../assets/pictures/headshots/placeholder-headshot.png"

const teamMembers = [
  {
    imageSrc: headShotPic,
    name: "John Doe, MD",
    role: "Lorem Ipsum Position",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imageSrc: headShotPic,
    name: "Jane Smith, CNS-BC",
    role: "Lorem Ipsum Position",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imageSrc: headShotPic,
    name: "Alex Johnson, BS",
    role: "Lorem Ipsum Role",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imageSrc: headShotPic,
    name: "Chris Lee, BS",
    role: "Lorem Ipsum Role",
    bio: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    imageSrc: headShotPic,
    name: "Taylor Morgan, MBA",
    role: "Lorem Ipsum Title",
    bio: "",
  },
];

const Team = () => {
  return (
    // <div className="px-4 py-12 md:py-20 bg-gray-50">
    //   <div className="max-w-5xl mx-auto text-center mb-12">
    //     <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
    //       Meet the Team
    //     </h2>
    //     <p className="text-lg text-gray-600">
    //       The passionate professionals behind Twistomy — dedicated to
    //       transforming ostomy care through innovation and compassion.
    //     </p>
    //   </div>
    <div>
      <HeadShotWithText members={teamMembers} />
    </div>
  );
};

export default Team;
