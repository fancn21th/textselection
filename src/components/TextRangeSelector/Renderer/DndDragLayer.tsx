import { Fragment, useContext } from "react";
import { RangeContext, SplittedByLineTextRange } from "../context/RangeContext";
import { CursorGhost } from "./components/CursorGhost";

const DndDragLayer = ({ parts }: { parts: SplittedByLineTextRange[] }) => {
  /**
   *  这一层用来定位 cursor 的位置
   */
  const { activatedObject } = useContext(RangeContext);

  return (
    <>
      {parts.map((part, index) => {
        return (
          <Fragment key={index}>
            {activatedObject?.activatedRange &&
              activatedObject.activatedRange.s === part.s && (
                <CursorGhost
                  pos={{
                    index: activatedObject.index,
                    type: "s",
                    pos: part.s,
                  }}
                />
              )}
            <span className="text-transparent">{part.text}</span>
            {activatedObject?.activatedRange &&
              activatedObject.activatedRange.e === part.e && (
                <CursorGhost
                  pos={{
                    index: activatedObject.index,
                    type: "e",
                    pos: part.e,
                  }}
                />
              )}
          </Fragment>
        );
      })}
    </>
  );
};

export default DndDragLayer;
