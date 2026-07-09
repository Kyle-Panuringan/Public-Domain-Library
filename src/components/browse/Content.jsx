import BookList from "./BookList";
import line2 from "../../assets/line2.png";
import { useState } from "react";
import { languages } from "../data/languages";

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

function Content() {
  const [openSection, setOpenSection] = useState({});
  const [search, setSearch] = useState("");
  const [languageOptions, setLanguageOptions] = useState(languages);
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);

  const toggleLanguage = (code) => {
    setLanguageOptions((prev) =>
      prev.map((option) =>
        option.code === code
          ? { ...option, selected: !option.selected }
          : option,
      ),
    );
  };

  const filteredLanguages = languageOptions.filter((language) =>
    language.name.toLowerCase().includes(search.toLowerCase()),
  );

  const selectedLanguages = filteredLanguages.filter(
    (language) => language.selected,
  );
  const suggestedLanguages = filteredLanguages.filter(
    (language) => !language.selected,
  );

  const renderFilterSubjects = () => {
    return filterSubjects.map((filterSubject, index) => (
      <div key={index}>
        <div>
          <div className="flex justify-between items-center">
            <label htmlFor="fiction">{filterSubject.mainSubject}</label>
            <div>
              <input type="checkbox" id="fiction" />
              <button onClick={() => toggleDropDownSubjects(index)}>▼</button>
            </div>
          </div>
          {/* Sub Categories */}
          <div className="">
            {filterSubject.subSubjects.map((subSubjects, subIndex) => (
              <div
                key={subIndex}
                className={`${openSection[index] ? "" : "hidden"} flex justify-between items-center`}
              >
                <label htmlFor="fantasy" className="text-sm">
                  - {subSubjects}
                </label>
                <input type="checkbox" id="fantasy" />
              </div>
            ))}
          </div>
        </div>
      </div>
    ));
  };

  const toggleDropDownSubjects = (index) => {
    setOpenSection((prev) => ({
      ...prev,
      [index]: !prev[index],
    }));
  };

  return (
    <div className="bg-[#EDE6DB] p-9 flex flex-col lg:flex-row">
      {/* Right */}
      <div className="flex flex-col items-center">
        {/* Search */}
        <div className="flex w-full lg:w-xs">
          <input
            type="search"
            name=""
            id=""
            placeholder="Search Books/Authors..."
            className="border border-black w-full px-2 py-1"
          />
          <button className="w-10 border border-black">⌕</button>
        </div>
        <div className="m-6 p-4 border border-[#E5AB14] lg:self-start w-full lg:w-xs">
          <div>
            <h2 className="uppercase text-center">Subjects</h2>
            <img
              src={line2}
              alt="Line Divider"
              className="w-50 mx-auto pt-1 pb-2"
            />
            {/* renderFilterSubjects */}
            <button>All Works</button>
            {renderFilterSubjects()}

            <h2 className="uppercase text-center pt-5">Language</h2>
            <img
              src={line2}
              alt="Line Divider"
              className="w-50 mx-auto pt-1 pb-2"
            />

            <div className="relative">
              <div
                className="
                    absolute
                    lg:flex items-center
                    top-full
                    w-full
                    bg-white
                    flex flex-col
                    "
              >
                <div className="w-full">
                  <input
                    type="text"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    onFocus={() => setIsLanguageMenuOpen(true)}
                    className="w-full border border-black text-center"
                  />
                  {isLanguageMenuOpen && (
                    <ul className="overflow-auto h-55 border border-black rounded">
                      {/* <li className="flex flex-row justify-between items-center p-1">
                      <label htmlFor="allLanguage" className="w-full ">
                        All Language
                      </label>
                      <input
                        type="checkbox"
                        // checked={selectedLanguages.includes("all")}
                        // onChange={() => toggleLanguage("all")}
                        // disabled={
                        //   selectedLanguages.length === 1 &&
                        //   selectedLanguages[0] === "all"
                        // }
                      />
                    </li> */}
                      {selectedLanguages.length > 0 && (
                        <>
                          <h4 className="text-center">Selected</h4>
                          {selectedLanguages.map((language, index) => (
                            <li
                              key={index}
                              className="flex flex-row justify-between items-center p-1"
                            >
                              <label htmlFor={language.code} className="w-full">
                                {language.name}
                              </label>
                              <input
                                type="checkbox"
                                id={language.code}
                                checked={language.selected}
                                onChange={() => toggleLanguage(language.code)}
                              />
                            </li>
                          ))}
                        </>
                      )}

                      <h4 className="text-center">Suggestion</h4>
                      {suggestedLanguages.map((language, index) => (
                        <li
                          key={index}
                          className="flex flex-row justify-between items-center p-1"
                        >
                          <label htmlFor={language.code} className="w-full">
                            {language.name}
                          </label>
                          <input
                            type="checkbox"
                            id={language.code}
                            checked={language.selected}
                            onChange={() => toggleLanguage(language.code)}
                          />
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              </div>
            </div>

            <h2 className="uppercase text-center pt-10">Year</h2>
            <img
              src={line2}
              alt="Line Divider"
              className="w-50 mx-auto pt-1 pb-2"
            />
            <button>Button</button>
          </div>
        </div>
      </div>
      {/* Left */}
      <div className="p-4 w-full">
        <BookList />
      </div>
    </div>
  );
}

export default Content;
