import TextRangeSelector from "./components/TextRangeSelector/";
import text from "./text.txt?raw";

function App() {
  return (
    <div className="p-10">
      <h1 className="font-bold">Text Range Selection</h1>
      <hr className="my-2" />
      <div className="h-[500px]">
        <TextRangeSelector text={text} />
      </div>
    </div>
  );
}

export default App;
