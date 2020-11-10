import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.scss";

const CharacterList = () => {
  const [data, setData] = useState<any[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    axios
      .get("https://finalspaceapi.com/api/v0/character")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <ul>
      {data.slice(0, 5).map((character) => (
        <li key={character.id}>
          <img src={character.img_url} alt={character.alias} />
          <p>{character.name}</p>
        </li>
      ))}
    </ul>
  );
};
export default CharacterList;
