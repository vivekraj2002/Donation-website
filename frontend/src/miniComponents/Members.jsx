import React from "react";

const Members = () => {
  const members = [
    {
      id: 1,
      image: "/2.png",
      title: "Pooja Joshi",
    },
    {
      id: 2,
      image: "/7.png",
      title: "Rashmi chaudhary",
    },
    {
      id: 3,
      image: "/manmeet.jpg",
      title: "Manmeet Naarang",
    },
    {
      id: 4,
      image: "Anjali.jpeg",
      title: "Anjali Manocha",
    },
    {
      id: 5,
      image: "6.png",
      title: "karandeep singh",
    },
    {
      id: 6,
      image: "/m8.jpg",
      title: "Vivek raj",
    },
    {
      id: 7,
      image: "/m7.jpg",
      title: "Jhon Wick",
    },
  ];
  return (
    <>
      <section className="members">
        <div className="container">
          <div className="heading_section">
            <h2 className="heading">MEMBERS</h2>
          </div>
          <div className="members_container">
            {members.map((element) => (
              <div className="card" key={element.id}>
                <img src={element.image} alt={element.title} />
                <h3>{element.title}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Members;
