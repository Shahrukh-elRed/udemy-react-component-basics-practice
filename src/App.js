import Header from "./components/Header/Header";
import Concept from "./components/Concept/Concept";
import { concepts } from "./components/Data/ConceptsData";

function App() {
  return (
    <div>
      <Header />
      <ul id="concepts">
        {concepts.map((concept) => (
          <Concept
            key={concept.title}
            image={concept.image}
            title={concept.title}
            description={concept.description}
          />
        ))}
      </ul>
    </div>
  );
}

export default App;
