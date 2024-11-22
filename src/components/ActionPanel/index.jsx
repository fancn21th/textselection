const ActionPanel = ({ onClick }) => {
  return (
    <div className="border p-2">
      <h3>Action Panel:</h3>
      <div>
        Start
        <button
          className="rounded-full w-6 h-6 bg-white border border-black"
          onClick={() => onClick("start", true)}
        >
          +
        </button>
        <button
          className="rounded-full w-6 h-6 bg-white border border-black"
          onClick={() => onClick("start", false)}
        >
          -
        </button>
      </div>
      <div>
        End
        <button
          className="rounded-full w-6 h-6 bg-white border border-black"
          onClick={() => onClick("end", true)}
        >
          +
        </button>
        <button
          className="rounded-full w-6 h-6 bg-white border border-black"
          onClick={() => onClick("end", false)}
        >
          -
        </button>
      </div>
    </div>
  );
};

export default ActionPanel;
