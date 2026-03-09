import { memo } from "react";
import { NodeProps } from "reactflow";
import { SlidesFormat } from "./SlidesFormat";
import { styled } from "../../../lib/stitches.config";

const NodeWrapper = styled("div", {
  width: "100%",
  height: "100%",
});

export const SlidesNode = memo(({ selected, data, id }: NodeProps) => {
  return (
    <NodeWrapper>
      <SlidesFormat selected={selected} id={id} />
    </NodeWrapper>
  );
});
