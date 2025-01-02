import { Fragment, useContext } from "react";
import {
  NewTRSContext,
  SplittedByLineTextRange,
} from "../context/NewTRSContext";
import { CursorGhost } from "./components/Cursor";

const DndDragLayer = ({ parts }: { parts: SplittedByLineTextRange[] }) => {
  // TODO: 注意这一层只负责 Cursor 的拖动， 因此 所有文字是透明的并且不响应事件
  const { activatedObject } = useContext(NewTRSContext);

  return (
    <>
      {parts.map((part, index) => {
        return (
          <Fragment key={index}>
            {activatedObject?.activatedRange.s === part.s && (
              <CursorGhost
                pos={{
                  index: part.index,
                  type: "s",
                  pos: part.s,
                }}
              />
            )}
            <span className="text-transparent">{part.text}</span>
            {activatedObject?.activatedRange.e === part.e && (
              <CursorGhost
                pos={{
                  index: part.index,
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
