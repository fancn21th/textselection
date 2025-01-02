const DndDragLayer = ({ text }: { text: string }) => {
  return (
    <span className="border border-r-teal-500 text-transparent">{text}</span>
  );
};

export default DndDragLayer;
