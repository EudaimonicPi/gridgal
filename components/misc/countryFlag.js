// import {countries } from 'country-flag-icons';
// import  from 'country-flag-icons/react/3x2'

// from https://dev.to/jorik/country-code-to-flag-emoji-a21 
function getFlagEmoji(countryCode) {
  return countryCode.toUpperCase().replace(/./g, char => 
      String.fromCodePoint(127397 + char.charCodeAt())
  );
}
export default function CountryFlag ({ countryCode }) {
    // const flagUrl = countryFlagIcons.get(countryCode.toUpperCase()).icon;
    return (
        <p>{getFlagEmoji(countryCode)}</p>
        
    );
};
