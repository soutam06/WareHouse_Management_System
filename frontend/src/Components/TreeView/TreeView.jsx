import React from "react";
import TreeNode from "../TreeNode/TreeNode"
  // Tree View Component
  const TreeView = ({ data }) => {
    return (
      <div>
        {data.map((node) => (
          <TreeNode key={node.id} node={node} />
        ))}
      </div>
    );
  };

    export default TreeView;