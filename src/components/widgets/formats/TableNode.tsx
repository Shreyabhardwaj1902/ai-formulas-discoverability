import { memo } from "react";
import { NodeProps } from "reactflow";
import { TableFormat } from "./TableFormat";
import { styled } from "../../../lib/stitches.config";

const NodeWrapper = styled("div", {
  width: "100%",
  height: "100%",
});

export const TableNode = memo(({ selected, data, id }: NodeProps) => {
  return (
    <NodeWrapper>
      <TableFormat selected={selected} data={data} id={id} />
    </NodeWrapper>
  );
});
