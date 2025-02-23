import React from "react";
import "./Lists_keys.css"

const Lists_keys = () => {
  const names = [
    { "id": 1, "name": "john doe" },
    { "id": 2, "name": "jane smith" },
    { "id": 3, "name": "alex kim" },
    { "id": 4, "name": "lisa tan" },
    { "id": 5, "name": "michael lee" },
    { "id": 6, "name": "sarah wong" },
    { "id": 7, "name": "david chen" },
    { "id": 8, "name": "emily park" },
    { "id": 9, "name": "chris han" },
    { "id": 10, "name": "olivia choi" },
    { "id": 11, "name": "james kang" },
    { "id": 12, "name": "anna cho" },
    { "id": 13, "name": "william seo" },
    { "id": 14, "name": "hannah jang" },
    { "id": 15, "name": "ryan kim" },
    { "id": 16, "name": "maria choi" },
    { "id": 17, "name": "steve jung" },
    { "id": 18, "name": "lily kim" },
    { "id": 19, "name": "max lee" },
    { "id": 20, "name": "grace park" }
]
;

  return (
    <>
      <div className="box">
      {names.map((student) => (
        <p key={student.id}>
          {student.id}- {student.name}
        </p>
      ))}
      </div>
    </>
  );
};

export default Lists_keys;
