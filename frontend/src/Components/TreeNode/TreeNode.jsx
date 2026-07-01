import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

// Tree Node Component
const TreeNode = ({ node }) => {
    const [isExpanded, setIsExpanded] = useState(false);
    const [isleaf,setisleaf] = useState(false);
  
    const toggleExpand = () => {
        if(!node.children){
            setisleaf(!isleaf);
            return;
        }
      setIsExpanded(!isExpanded);
    };

   
  
    return (
      <div className="ml-4">
        <div
          onClick={toggleExpand}
          className="flex items-center cursor-pointer py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-700 hover:text-white"
        >
          {node.children && (
            <span
              className={`mr-2 transform transition-transform duration-300 ${
                isExpanded ? 'rotate-90' : ''
              }`}
            >
              ▶
            </span>
          )}
          <span className="font-semibold">{node.name}</span>
        </div>
        {isExpanded && node.children && (
          <div className="ml-4 border-l-2 pl-4 border-gray-300">
            {node.children.map((childNode) => (
              <TreeNode key={childNode.id} node={childNode} />
            ))}
          </div>
        )}

        {isleaf && (
          <div className="ml-4 border-l-2 pl-4 border-gray-300">
            <Link to ={`/godown/${node.name}/${node.id}`} className="font-semibold">View Items</Link>
          </div>
        )}
      </div>
    );
  };

  export default TreeNode;