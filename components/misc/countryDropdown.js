import { useState, useEffect } from "react";
import Select from "react-select";


// code from https://codesandbox.io/p/sandbox/country-dropdown-with-react-select-w0rk6?file=%2Fsrc%2FApp.js%3A3%2C1-26%2C3
export default function CountrySelect ({setCountryCode}) {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState({});
//   console.log("VALUE IS ", selectedCountry.value)

const handleChange = (selectedOption) => {
    setSelectedCountry(selectedOption)
    setCountryCode(selectedOption.value)
}

  useEffect(() => {
    fetch(
      "https://valid.layercode.workers.dev/list/countries?format=select&flags=true&value=code"
    )
      .then((response) => response.json())
      .then((data) => {
        setCountries(data.countries);
        // setCountryCode(selectedCountry.value) // didn't work
        setSelectedCountry(data.userSelectValue);
      });
  }, []);

  return (
    <div style={{marginTop: "2%", marginBottom: "2%", width: '50%',}}>
      {/* <p> Where Grid Made</p> */}
       <Select
        options={countries}
        value={selectedCountry}
        onChange={(selectedOption) => handleChange(selectedOption)}
      />

    </div>
   
  );
};