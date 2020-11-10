import axios from "axios";
import React, { useState, useEffect } from "react";
import "../App.scss";

const CharacterList = () => {
  const [data, setData] = useState<any[]>([]);
  const [isSortedByAlphabet, setIsSortedByAlphabet] = useState(false);
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    axios
      .get("https://finalspaceapi.com/api/v0/character")
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const renderDefaultList = (data: any) => {
    return data.map((item: any) => (
      <div className='characters__list__item' key={item.id}>
        <div>
          <img
            className='characters__list__item-img'
            src={item.img_url}
            alt={item.alias}
          />

          <p className='characters__list__item-name'>{item.name}</p>
        </div>
      </div>
    ));
  };

  const renderByAlphabet = (list: Array<string>) => {
    const alphabet = [
      "a",
      "b",
      "c",
      "d",
      "e",
      "f",
      "g",
      "h",
      "i",
      "j",
      "k",
      "l",
      "m",
      "n",
      "o",
      "p",
      "q",
      "r",
      "s",
      "t",
      "u",
      "v",
      "w",
      "x",
      "y",
      "z",
    ];

    return alphabet.map((char) => {
      const filteredData = list.filter(
        (item: any) => item.name && item.name.toLowerCase().startsWith(char)
      );

      return (
        filteredData.length > 0 && (
          <div className='characters__list'>
            <p className='characters__list-alphabet'>{char}</p>
            {filteredData.map((item: any) => (
              <div className='characters__list__item' key={item.id}>
                <div>
                  <img
                    className='characters__list__item-img'
                    src={item.img_url}
                    alt={item.alias}
                  />

                  <p className='characters__list__item-name'>{item.name}</p>
                </div>
              </div>
            ))}
          </div>
        )
      );
    });
  };

  return (
    <div className='characters'>
      <h1>Final Space Characters</h1>
      <h5>API sort by Petr Bui</h5>
      <button
        className='characters-btn'
        onClick={() => setIsSortedByAlphabet(!isSortedByAlphabet)}
      >
        {!isSortedByAlphabet ? "Sort by alphabet" : "Sort by id"}
      </button>

      <div className='characters__table'>
        {isSortedByAlphabet ? renderByAlphabet(data) : renderDefaultList(data)}
      </div>
    </div>
  );
};
export default CharacterList;
