import { memo } from "react";
import { NodeProps } from "reactflow";
import { PrototypeFormat } from "./PrototypeFormat";
import { styled } from "../../../lib/stitches.config";

const NodeWrapper = styled("div", {
  width: "100%",
  height: "100%",
});

export const PrototypeNode = memo(({ selected, data, id }: NodeProps) => {
  return (
    <NodeWrapper>
      <PrototypeFormat selected={selected} id={id} />
    </NodeWrapper>
  );
});
