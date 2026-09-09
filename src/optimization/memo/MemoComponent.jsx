import React, { useMemo} from "react";

export default function MemoComponent() {
  const list = [
    2312, 31233123, 23122, 4234234, 42422323, 31232, 32, 3232, 232312, 31232,
    323, 23, 12313,
  ];
  
  console.log("component rendered");
  
  const filterList = useMemo(() => {
    return list.filter((item) => item > 1000).join(", ");
  }, []);

  return <div>{filterList}</div>;
}
