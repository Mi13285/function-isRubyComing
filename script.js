function isRubyComing(list) {
  const Ruby = list.filter((list) => list.language === "Ruby");
  return Ruby.length > 0 ? true : false;
}
console.log(
  isRubyComing([
    {
      firstName: "Emma",
      lastName: "Z.",
      country: "Netherlands",
      continent: "Europe",
      age: 29,
      language: "Ruby",
    },
    {
      firstName: "Piotr",
      lastName: "B.",
      country: "Poland",
      continent: "Europe",
      age: 128,
      language: "Javascript",
    },
    {
      firstName: "Jayden",
      lastName: "P.",
      country: "Jamaica",
      continent: "Americas",
      age: 42,
      language: "JavaScript",
    },
  ])
);
