import faker from "faker";
import { useEffect, useState } from "react";

const PROFILES_AMOUNT = 20;

function Stories() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(PROFILES_AMOUNT)].map((_, index) => ({
      ...faker.helpers.contextualCard(),
      id: index,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div>
      {suggestions.map((profile) => (
        <span key={profile.id}>{profile.username}</span>
      ))}
    </div>
  );
}

export default Stories;
