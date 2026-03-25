import { memo } from "react";
import { NodeProps } from "reactflow";
import { TimelineFormat } from "./TimelineFormat";
import { styled } from "../../../lib/stitches.config";

const NodeWrapper = styled("div", {
  width: "100%",
  height: "100%",
});

export const TimelineNode = memo(({ selected, data, id }: NodeProps) => {
  return (
    <NodeWrapper>
      <TimelineFormat selected={selected} data={data} id={id} />
    </NodeWrapper>
  );
});
