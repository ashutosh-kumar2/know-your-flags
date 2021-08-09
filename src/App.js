import "./styles.css";
import { useState } from "react";

const flagDictionary = {
  "🇦🇨": "Ascension Island",
  "🇦🇩": "Andorra",
  "🇦🇪": "United Arab Emirates",
  "🇦🇫": "Afghanistan",
  "🇦🇬": "Antigua & Barbuda",
  "🇦🇮": "Anguilla",
  "🇦🇱": "Albania",
  "🇦🇲": "Armenia",
  "🇦🇴": "Angola",
  "🇦🇶": "Antarctica",
  "🇦🇷": "Argentina",
  "🇦🇸": "American Samoa",
  "🇦🇹": "Austria",
  "🇦🇺": "Australia",
  "🇦🇼": "Aruba",
  "🇦🇽": "Aland Islands",
  "🇦🇿": "Azerbaijan",
  "🇧🇦": "Bosnia & Herzegovina",
  "🇧🇧": "Barbados",
  "🇧🇩": "Bangladesh",
  "🇧🇪": "Belgium",
  "🇧🇫": "Burkina Faso",
  "🇧🇬": "Bulgaria",
  "🇧🇭": "Bahrain",
  "🇧🇮": "Burundi",
  "🇧🇯": "Benin",
  "🇧🇱": "St. Barthelemy",
  "🇧🇲": "Bermuda",
  "🇧🇳": "Brunei",
  "🇧🇴": "Bolivia",
  "🇧🇶": "Carribean Netherlands",
  "🇧🇷": "Brazil",
  "🇧🇸": "Bahamas",
  "🇧🇹": "Bhutan",
  "🇧🇻": "Bouvet Island",
  "🇧🇼": "Botswana",
  "🇧🇾": "Belarus",
  "🇧🇿": "Belize",
  "🇨🇦": "Canada",
  "🇨🇨": "Cocos Islands",
  "🇨🇩": "Congo - Kinshasa",
  "🇨🇫": "Central African Republic",
  "🇨🇬": "Congo - Brazzaville",
  "🇨🇭": "Switzerland",
  "🇨🇮": "Cote d'Ivoire",
  "🇨🇰": "Cook Islands",
  "🇨🇱": "Chile",
  "🇨🇲": "Cameroon",
  "🇨🇳": "China",
  "🇨🇴": "Colombia",
  "🇨🇵": "Clipperton Island",
  "🇨🇷": "Costa Rica",
  "🇨🇺": "Cuba",
  "🇨🇻": "Cape Verde",
  "🇨🇼": "Curacao",
  "🇨🇽": "Christmas Island",
  "🇨🇾": "Cyprus",
  "🇨🇿": "Czechia",
  "🇩🇪": "Germany",
  "🇩🇬": "Diego Garcia",
  "🇩🇯": "Djibouti",
  "🇩🇰": "Denmark",
  "🇩🇲": "Dominica",
  "🇩🇴": "Dominican Republic",
  "🇩🇿": "Algeria",
  "🇪🇦": "Ceuta & Melilla",
  "🇪🇨": "Ecuador",
  "🇪🇪": "Estonia",
  "🇪🇬": "Egypt",
  "🇪🇭": "Western Sahara",
  "🇪🇷": "Eritrea",
  "🇪🇸": "Spain",
  "🇪🇹": "Ethiopia",
  "🇪🇺": "European Union",
  "🇫🇮": "Finland",
  "🇫🇯": "Fiji",
  "🇫🇰": "Falkland Islands",
  "🇫🇲": "Micronesia",
  "🇫🇴": "Faroe Islands",
  "🇫🇷": "France",
  "🇬🇦": "Gabon",
  "🇬🇧": "United Kingdom",
  "🇬🇩": "Grenada",
  "🇬🇪": "Georgia",
  "🇬🇫": "French Guiana",
  "🇬🇬": "Guernsey",
  "🇬🇭": "Ghana",
  "🇬🇮": "Gibraltar",
  "🇬🇱": "Greenland",
  "🇬🇲": "Gambia",
  "🇬🇳": "Guinea",
  "🇬🇵": "Guadeloupe",
  "🇬🇶": "Equatorial Guinea",
  "🇬🇷": "Greece",
  "🇬🇸": "South Georgia & South Sandwich Islands",
  "🇬🇹": "Guatemala",
  "🇬🇺": "Guam",
  "🇬🇼": "Guinea - Bissau",
  "🇬🇾": "Guyana",
  "🇭🇰": "Hong Kong SAR China",
  "🇭🇲": "Heard & McDonald Islands",
  "🇭🇳": "Honduras",
  "🇭🇷": "Croatia",
  "🇭🇹": "Haiti",
  "🇭🇺": "Hungary",
  "🇮🇨": "Canary Islands",
  "🇮🇩": "Indonesia",
  "🇮🇪": "Ireland",
  "🇮🇱": "Israel",
  "🇮🇲": "Isle Of Man",
  "🇮🇳": "India",
  "🇮🇴": "British Indian Ocean Territory",
  "🇮🇶": "Iraq",
  "🇮🇷": "Iran",
  "🇮🇸": "Iceland",
  "🇮🇹": "Italy",
  "🇯🇪": "Jersey",
  "🇯🇲": "Jamaica",
  "🇯🇴": "Jordan",
  "🇯🇵": "Japan",
  "🇰🇪": "Kenya",
  "🇰🇬": "Kyrgyzstan",
  "🇰🇭": "Cambodia",
  "🇰🇮": "Kiribati",
  "🇰🇲": "Comoros",
  "🇰🇳": "St. Kitts & Nevis",
  "🇰🇵": "North Korea",
  "🇰🇷": "South Korea",
  "🇰🇼": "Kuwait",
  "🇰🇾": "Cayman Islands",
  "🇰🇿": "Kazakhstan",
  "🇱🇦": "Laos",
  "🇱🇧": "Lebanon",
  "🇱🇨": "St. Lucia",
  "🇱🇮": "Liechtenstein",
  "🇱🇰": "Sri Lanka",
  "🇱🇷": "Liberia",
  "🇱🇸": "Lesotho",
  "🇱🇹": "Lithuania",
  "🇱🇺": "Luxembourg",
  "🇱🇻": "Latvia",
  "🇱🇾": "Libya",
  "🇲🇦": "Morocco",
  "🇲🇨": "Monaco",
  "🇲🇩": "Moldova",
  "🇲🇪": "Montenegro",
  "🇲🇫": "St. Martin",
  "🇲🇬": "Madagascar",
  "🇲🇭": "Marshall Islands",
  "🇲🇰": "North Macedonia",
  "🇲🇱": "Mali",
  "🇲🇲": "Myanmar",
  "🇲🇳": "Mongolia",
  "🇲🇴": "Macao SAR China",
  "🇲🇵": "Northern Mariana Islands",
  "🇲🇶": "Martinique",
  "🇲🇷": "Mauritania",
  "🇲🇸": "Montserrat",
  "🇲🇹": "Malta",
  "🇲🇺": "Mauritius",
  "🇲🇻": "Maldives",
  "🇲🇼": "Malawi",
  "🇲🇽": "Mexico",
  "🇲🇾": "Malaysia",
  "🇲🇿": "Mozambique",
  "🇳🇦": "Namibia",
  "🇳🇨": "New Caledonia",
  "🇳🇪": "Niger",
  "🇳🇫": "Norfolk Island",
  "🇳🇬": "Nigeria",
  "🇳🇮": "Nicaragua",
  "🇳🇱": "Netherlands",
  "🇳🇴": "Norway",
  "🇳🇵": "Nepal",
  "🇳🇷": "Nauru",
  "🇳🇺": "Niue",
  "🇳🇿": "New Zealand",
  "🇴🇲": "Oman",
  "🇵🇦": "Panama",
  "🇵🇪": "Peru",
  "🇵🇫": "French Polynesia",
  "🇵🇬": "Papua New Guinea",
  "🇵🇭": "Philippines",
  "🇵🇰": "Pakistan",
  "🇵🇱": "Poland",
  "🇵🇲": "St. Pierre & Miquelon",
  "🇵🇳": "Pitcairn Islands",
  "🇵🇷": "Puerto Rico",
  "🇵🇸": "Palestinian Territories",
  "🇵🇹": "Portugal",
  "🇵🇼": "Palau",
  "🇵🇾": "Paraguay",
  "🇶🇦": "Qatar",
  "🇷🇪": "Reunion",
  "🇷🇴": "Romania",
  "🇷🇸": "Serbia",
  "🇷🇺": "Russia",
  "🇷🇼": "Rwanda",
  "🇸🇦": "Saudi Arabia",
  "🇸🇧": "Solomon Islands",
  "🇸🇨": "Seychelles",
  "🇸🇩": "Sudan",
  "🇸🇪": "Sweden",
  "🇸🇬": "Singapore",
  "🇸🇭": "St. Helena",
  "🇸🇮": "Slovenia",
  "🇸🇯": "Svalbard & Jan Mayen",
  "🇸🇰": "Slovakia",
  "🇸🇱": "Sierra Leone",
  "🇸🇲": "San Marino",
  "🇸🇳": "Senegal",
  "🇸🇴": "Somalia",
  "🇸🇷": "Suriname",
  "🇸🇸": "South Sudan",
  "🇸🇹": "Sao Tome & Principe",
  "🇸🇻": "El Salvador",
  "🇸🇽": "Sint Maarten",
  "🇸🇾": "Syria",
  "🇸🇿": "Eswatini",
  "🇹🇦": "Tristan Da Cunha",
  "🇹🇨": "Turks & Caicos Islands",
  "🇹🇩": "Chad",
  "🇹🇫": "French Southern Territories",
  "🇹🇬": "Togo",
  "🇹🇭": "Thailand",
  "🇹🇯": "Tajikistan",
  "🇹🇰": "Tokelau",
  "🇹🇱": "Timor-Leste",
  "🇹🇲": "Turkmenistan",
  "🇹🇳": "Tunisia",
  "🇹🇴": "Tonga",
  "🇹🇷": "Turkey",
  "🇹🇹": "Trinidad & Tobago",
  "🇹🇻": "Tuvalu",
  "🇹🇼": "Taiwan",
  "🇹🇿": "Tanzania",
  "🇺🇦": "Ukraine",
  "🇺🇬": "Uganda",
  "🇺🇲": "U.S. Outlying Islands",
  "🇺🇳": "United Nations",
  "🇺🇸": "United States",
  "🇺🇾": "Uruguay",
  "🇺🇿": "Uzbekistan",
  "🇻🇦": "Vatican City",
  "🇻🇨": "St. Vincent & Grenadines",
  "🇻🇪": "Venezuela",
  "🇻🇬": "British Virgin Islands",
  "🇻🇮": "U.S Virgin Islands",
  "🇻🇳": "Vietnam",
  "🇻🇺": "Vanuatu",
  "🇼🇫": "Wallis & Futuna",
  "🇼🇸": "Samoa",
  "🇽🇰": "Kosovo",
  "🇾🇪": "Yemen",
  "🇾🇹": "Mayotte",
  "🇿🇦": "South Africa",
  "🇿🇲": "Zambia",
  "🇿🇼": "Zimbabwe"
};

var flagsWeKnow = Object.keys(flagDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function flagInputHandler(event) {
    var userInput = event.target.value;
    var meaning = flagDictionary[userInput];
    if (userInput === "") {
      setMeaning("Enter Flag");
    } else if (userInput in flagDictionary) {
      setMeaning(meaning);
    } else {
      setMeaning("We don't have this flag in our database");
    }
  }

  function flagClickHandler(flag) {
    var meaning = flagDictionary[flag];
    setMeaning(meaning);
  }

  return (
    <div className="App">
      <nav>
        <h1 className="header">Know Your Flags!</h1>
        <a
          className="link"
          href="https://github.com/ashutosh-kumar2/know-your-flags"
        >
          Source Code
        </a>
      </nav>

      <div className="container-center">
        <input
          onChange={flagInputHandler}
          placeholder={"Put a flag here to know the country it belongs to!"}
          className="input-class"
        ></input>
        <div>
          <h2 className="meaning-class"> {meaning} </h2>
        </div>
        <div>
          <h3 className="listHeader">
            Flags We Know (Click on flag to know the country!)
          </h3>
        </div>

        {flagsWeKnow.map(function (flag) {
          return (
            <span
              className="flag"
              onClick={() => flagClickHandler(flag)}
              key={flag}
            >
              {flag}
            </span>
          );
        })}
      </div>
      <footer className="footer">
        <div className="footer-header">Get in Touch</div>
        <ul className="list-non-bullet">
          <li className="list-inline-item">
            <a
              className="link"
              href="https://www.linkedin.com/in/kumar-ashutosh2/"
            >
              LinkedIn
            </a>
          </li>
          <li className="list-inline-item">
            <a className="link" href="https://github.com/ashutosh-kumar2">
              GitHub
            </a>
          </li>

          <li className="list-inline-item">
            <a className="link" href="https://twitter.com/ashutoshh_kk">
              Twitter
            </a>
          </li>
        </ul>
      </footer>
    </div>
  );
}
