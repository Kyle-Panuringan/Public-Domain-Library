import BookList from "./BookList";
import line2 from "../../assets/line2.png";

const filterSubjects = [
  {
    mainSubject: "Arts",
    subSubjects: [
      "Architecture",
      "Art Instruction",
      "Art History",
      "Dance",
      "Design",
      "Fashion",
      "Film",
      "Graphic Design",
      "Music",
      "Music Theory",
      "Painting",
      "Photography",
    ],
  },
  {
    mainSubject: "Fiction",
    subSubjects: [
      "Fantasy",
      "Historical Fiction",
      "Horror",
      "Humor",
      "Literature",
      "Magic",
      "Mystery and detective stories",
      "Plays",
      "Poetry",
      "Romance",
      "Science Fiction",
      "Short Stories",
      "Thriller",
      "Young Adult",
    ],
  },
  {
    mainSubject: "History",
    subSubjects: [
      "Ancient Civilization",
      "Archaeology",
      "Anthropology",
      "World War II",
      "Social Life and Customs",
    ],
  },
  {
    mainSubject: "Science & Mathematics",
    subSubjects: [
      "Biology",
      "Chemistry",
      "Mathematics",
      "Physics",
      "Programming",
    ],
  },
  {
    mainSubject: "Business & Finance",
    subSubjects: [
      "Management",
      "Entrepreneurship",
      "Business Economics",
      "Business Success",
      "Finance",
    ],
  },
  {
    mainSubject: "Biography",
    subSubjects: [
      "Autobiographies",
      "History",
      "Politics and Government",
      "World War II",
      "Women",
      "Kings and Rulers",
      "Composers",
      "Artists",
    ],
  },
  {
    mainSubject: "Social Sciences",
    subSubjects: [
      "Anthropology",
      "Religion",
      "Political Science",
      "Psychology",
    ],
  },
  {
    mainSubject: "Health & Wellness",
    subSubjects: [
      "Cooking",
      "Cookbooks",
      "Mental Health",
      "Exercise",
      "Nutrition",
      "Self-help",
    ],
  },
  {
    mainSubject: "Textbooks",
    subSubjects: [
      "History",
      "Mathematics",
      "Geography",
      "Psychology",
      "Algebra",
      "Education",
      "Business & Economics",
      "Science",
      "Chemistry",
      "English Language",
      "Physics",
      "Computer Science",
    ],
  },
];

const handleFilterSubjects = () => {
  return filterSubjects.map((filterSubject, index) => (
    <div key={index}>
      <div>
        <label htmlFor="fiction">{filterSubject.mainSubject}</label>
        <input type="checkbox" id="fiction" />
        <button>▼</button>
        {/* Sub Categories */}
        {filterSubject.subSubjects.map((subSubjects, index) => (
          <div key={index} className="">
            <label htmlFor="fantasy" className="text-sm">
              {subSubjects}
            </label>
            <input type="checkbox" id="fantasy" />
          </div>
        ))}
      </div>
    </div>
  ));
};

function Content() {
  return (
    <div className="bg-[#EDE6DB] p-9 flex flex-col lg:flex-row">
      <div className="m-6 p-4 border border-[#E5AB14] lg:self-start">
        {/* Browse By */}
        <div>
          <h2 className="uppercase text-center">Browse by</h2>
          <img src={line2} alt="Line Divider" className="w-50" />
          {/* handleFilterSubjects */}
          <button>All Works</button>
          {handleFilterSubjects()}
        </div>
        {/* Filter By */}
        <div>
          <h2 className="uppercase">Filter By</h2>

          <h3 className="uppercase">Language</h3>
          <button>Button</button>

          <h3 className="uppercase">Author</h3>
          <button>Button</button>

          <h3 className="uppercase">Publication Date</h3>
          <button>Button</button>
        </div>
      </div>
      {/* Books */}
      <div className="p-4 w-full">
        <BookList />
      </div>
    </div>
  );
}

export default Content;
