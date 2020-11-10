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
    <div className='CharacterList'>
      <h1>Final Space Characters</h1>
      <div className='CharacterList__table'>
        {data.map((character) => (
          <div className='CharacterList__table__item' key={character.id}>
            <div>
              <img
                className='CharacterList__table__item__img'
                src={character.img_url}
                alt={character.alias}
              />

              <p className='CharacterList__table__item__name'>
                {character.name}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
export default CharacterList;
