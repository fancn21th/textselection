import TextRangeSelector from "./components/TextRangeSelector/";
import text from "./text.txt?raw";

function App() {
  return (
    <div className="p-10">
      <h1 className="font-bold">Text Range Selection</h1>
      <hr className="my-2" />
      <TextRangeSelector text={text} />
    </div>
  );
}

export default App;
