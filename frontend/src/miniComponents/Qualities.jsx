import React from "react";

const Qualities = () => {
  const qualities = [
    {
      id: 1,
      image: "/community.png",
      title: "COMMUNITY DEVELOPMENT",
      description:
        "It is not how much we give but how much love we put into giving. For it is in giving that we receive. We make a living by what we get. We make a life by what we give",
    },
    // {
    //   id: 2,
    //   image: "/transparency.jpg",
    //   title: "TRANSPARENCY",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa odio numquam ill laudantium nobis non illum cupiditate vero possimus quod quia nam, unde, labore suscipit obcaecati minus voluptates, autem velit.Facere numquam cum modi, molestiae eius libero mollitia aut!",
    // },
    // {
    //   id: 3,
    //   image: "/impact.jpg",
    //   title: "IMPACT MEASUREMENT",
    //   description:
    //     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis culpa odio numquam ill laudantium nobis non illum cupiditate vero possimus quod quia nam, unde, labore suscipit obcaecati minus voluptates, autem velit.Facere numquam cum modi, molestiae eius libero mollitia aut!",
    // },
  ];
  return (
    <>
      <div className="qualities">
        <h2>OUR QUALITIES</h2>
        <div className="container">
          {qualities.map((elememt) => {
            return (
              <div className="card" key={elememt.id}>
                <div className="img-wrapper">
                  <img src={elememt.image} alt={elememt.title} />
                </div>
                <div className="content">
                  <p className="title">{elememt.title}</p>
                  <p className="description">{elememt.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Qualities;
