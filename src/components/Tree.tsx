"use client";

import { useState } from "react";

interface Level {
  name: string;
  children?: Level[];
}

const fileTree: Level[] = [
  {
    name: "folder1",
    children: [
      {
        name: "folder1b",
        children: [
          {
            name: "file1b",
          },
          {
            name: "file2b",
          },
        ],
      },
    ],
  },
  {
    name: "folder2",
    children: [
      {
        name: "file2a",
      },
      {
        name: "file2b",
      },
      {
        name: "folder2b",
        children: [
          {
            name: "file1b",
          },
          {
            name: "file2b",
          },
        ],
      },
    ],
  },
  {
    name: "folder3",
    children: [
      {
        name: "file3a",
      },
      {
        name: "file3b",
      },
      {
        name: "folder3b",
        children: [
          {
            name: "file1b",
          },
          {
            name: "file2b",
          },
        ],
      },
    ],
  },
  {
    name: "folder4",
    children: [
      {
        name: "file3a",
      },
      {
        name: "file3b",
      },
    ],
  },
  {
    name: "file1",
  },
];

const Level = ({ level }: { level: Level }) => {
  const [openTree, setOpenTree] = useState(false);
  return (
    <div className=" w-[500px] overflow-hidden">
      <div className={`flex items-center gap-1 `}>
        {level.children && (
          <button onClick={() => setOpenTree(!openTree)}>
            {!openTree ? "+" : "-"}
          </button>
        )}
        <h2>{level.name}</h2>
      </div>
      {openTree && (
        <div>
          {level.children?.map((child) => (
            <div className={`pl-[25px]`}>
              <Level level={child} />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

const Tree = () => {
  return (
    <div>
      {fileTree.map((level) => (
        <Level level={level} />
      ))}
    </div>
  );
};

export default Tree;
