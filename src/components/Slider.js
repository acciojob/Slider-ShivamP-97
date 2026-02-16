import React, { useState, useEffect } from "react";

const reviews = [
  {
    id: 1,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg",
    name: "maria ferguson",
    title: "office manager",
    quote:
      "Fingerstache umami squid, kinfolk subway tile selvage tumblr man braid viral kombucha gentrify fanny pack raclette pok pok mustache.",
  },
  {
    id: 2,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg",
    name: "john doe",
    title: "regular guy",
    quote:
      "Gastropub sustainable tousled prism occupy. Viral XOXO roof party brunch actually.",
  },
  {
    id: 3,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959121/person-1_aufeoq.jpg",
    name: "peter smith",
    title: "product designer",
    quote:
      "Drinking vinegar polaroid street art echo park, actually semiotics next level butcher.",
  },
  {
    id: 4,
    image:
      "https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg",
    name: "susan andersen",
    title: "the boss",
    quote:
      "Marfa af yr 3 wolf moon kogi, readymade distillery asymmetrical.",
  },
];

function Slider() {
  const [index, setIndex] = useState(0);

  const checkIndex = (number) => {
    if (number > reviews.length - 1) return 0;
    if (number < 0) return reviews.length - 1;
    return number;
  };

  const nextSlide = () => {
    setIndex((prev) => checkIndex(prev + 1));
  };

  const prevSlide = () => {
    setIndex((prev) => checkIndex(prev - 1));
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [index]);

  const person = reviews[index];

  return (
    <div id="review-container">
      <img
        src={person.image}
        alt={person.name}
        id={`person-${index}-image`}
      />

      <h3 id={`person-${index}`}>{person.name}</h3>
      <h4>{person.title}</h4>
      <p>{person.quote}</p>

      <button className="prev" onClick={prevSlide}>
        Prev
      </button>

      <button className="next" onClick={nextSlide}>
        Next
      </button>
    </div>
  );
}

export default Slider;
