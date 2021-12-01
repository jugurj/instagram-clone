import faker from "faker";
import { useEffect, useState } from "react";

const SUGGESTIONS_AMOUNT = 5;

function Suggestions() {
  const [suggestions, setSuggestions] = useState([]);

  useEffect(() => {
    const suggestions = [...Array(SUGGESTIONS_AMOUNT)].map((_, index) => ({
      ...faker.helpers.contextualCard(),
      id: index,
    }));

    setSuggestions(suggestions);
  }, []);

  return (
    <div className="mt-4 ml-10">
      <SuggestionsHeader />
      <SuggestionsList suggestions={suggestions} />
    </div>
  );
}

function SuggestionsHeader() {
  return (
    <div className="flex justify-between text-sm mb-5">
      <h3 className="text-sm font-semibold text-gray-400">
        Suggestions for you
      </h3>
      <button className="text-gray-600 font-semibold">Show More</button>
    </div>
  );
}

function SuggestionsList({ suggestions }) {
  return (
    <div>
      {suggestions.map((profile) => (
        <SuggestionsListItem
          userId={profile.id}
          userImg={profile.avatar}
          username={profile.username}
          company={profile.company.name}
        />
      ))}
    </div>
  );
}

function SuggestionsListItem({ userId, userImg, username, company }) {
  return (
    <div key={userId} className="flex items-center justify-between mt-3">
      <img
        className="w-10 h-10 rounded-full border p-[2px]"
        src={userImg}
        alt="User avatar image"
        onError={(event) =>
          (event.target.src =
            "https://media.istockphoto.com/vectors/thumbnail-image-vector-graphic-vector-id1147544807?k=20&m=1147544807&s=612x612&w=0&h=pBhz1dkwsCMq37Udtp9sfxbjaMl27JUapoyYpQm0anc=")
        }
      />

      <div className="flex-1 ml-4">
        <h2 className="font-semibold text-sm">{username}</h2>
        <h3 className="text-xs text-gray-400">Works at {company}</h3>
      </div>

      <button className="ml-4 text-sm text-blue-400">Follow</button>
    </div>
  );
}

export default Suggestions;
