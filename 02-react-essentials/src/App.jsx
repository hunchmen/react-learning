import reactImg from './assets/react-core-concepts.png';
import componentsImg from './assets/components.png';
import { CORE_CONCEPTS } from './data';

let reactDescriptions = ['Fundamentals', 'Crucial','Core']
function genRamdonInt(max) {
  return Math.floor(Math.random() * (max + 1));
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts"></section>
        <h2>Core Concepts</h2>
        <ul>
          <CoreConcept title={CORE_CONCEPTS[0].title} description={CORE_CONCEPTS[0].description} image={CORE_CONCEPTS[0].image} />
          <CoreConcept {...CORE_CONCEPTS[1]}/>
          <CoreConcept title={CORE_CONCEPTS[2].title} description={CORE_CONCEPTS[2].description} image={CORE_CONCEPTS[2].image} />
          <CoreConcept title={CORE_CONCEPTS[3].title} description={CORE_CONCEPTS[3].description} image={CORE_CONCEPTS[3].image} />
        </ul>
      </main>
    </div>
  );
}

function CoreConcept(props) {
  return(
    <li>
      <img src={componentsImg} alt={props.title} />
        <h3>{props.title}</h3>
        <p>{props.description}</p>
    </li>
  )
}

function Header() {
  return (
    <header>
        <img src={reactImg} alt={reactImg} />
        <h1>React Essentials</h1>
        <p>
          {reactDescriptions[genRamdonInt(2)]} React concepts you will need for almost any app you are
          going to build!
        </p>
      </header>
  )
}
export default App;
