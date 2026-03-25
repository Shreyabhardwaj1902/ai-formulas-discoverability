import { memo } from "react";
import { NodeProps } from "reactflow";
import { DiagramFormat } from "./DiagramFormat";
import { styled } from "../../../lib/stitches.config";

const NodeWrapper = styled("div", {
  width: "100%",
  height: "100%",
});

export const DiagramNode = memo(({ selected, data, id }: NodeProps) => {
  return (
    <NodeWrapper>
      <DiagramFormat selected={selected} data={data} id={id} />
    </NodeWrapper>
  );
});
