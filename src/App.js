import React, { useState } from "react";
import PersonEntry from "./components/PersonEntry";
import Resume from "./components/Resume";

function App() {
  const [person, setPerson] = useState(null);

  const handleSubmit = (person) => {
    setPerson(person)
  }
  return (
    <div className="content">
      <PersonEntry
        onSubmit={(person) => handleSubmit(person)}
        currentPerson={person}
      />
      {person &&
        <Resume
          currentPerson={person}
        />
      }
    </div>
  )
}

export default App;