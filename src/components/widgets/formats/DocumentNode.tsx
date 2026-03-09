import { memo } from "react";
import { NodeProps } from "reactflow";
import { DocumentFormat } from "./DocumentFormat";
import { styled } from "../../../lib/stitches.config";

const NodeWrapper = styled("div", {
  width: "100%",
  height: "100%",
});

export const DocumentNode = memo(({ selected, data, id }: NodeProps) => {
  return (
    <NodeWrapper>
      <DocumentFormat selected={selected} data={data} id={id} />
    </NodeWrapper>
  );
});
