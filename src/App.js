import { Card } from "./component/card/Card";
import { Data } from "./assent/data/Data";

function App() {
  
  
  return (
    <div className="mainContainer">
      <div>
        {Data.map((product, i) => (
          <Card key={i} product={product} />
        ))}
      </div>
    </div>
  );
}

export default App;