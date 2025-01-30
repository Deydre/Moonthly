import React from "react";

const Month = ({ data }) => {
  let videogamesContent = null;
  let filmsContent = null;
  let seriesContent = null;

  const renderCard = () => {
    return data.videogames.map((videogame) => <Card data={videogame} key={uuidv4()} />)
  }

  if (data.videogames && data.videogames.length > 0) {
    videogamesContent = (
      <article>
        {data.videogames.map((videogame) => {
          return (<div>
            <p>{videogame.title}</p>
            <p>{videogame.releaseDate}</p>
            <p>{videogame.image}</p>
          </div>)
        })}
      </article>
    );
  }

  if (data.films && data.films.length > 0) {
    filmsContent = (
      <article>
        {data.films[0].title}
      </article>
    );
  }

  if (data.series && data.series.length > 0) {
    seriesContent = (
      <article>
        {data.series[0].title}
      </article>
    );
  }

  return <section>
    <h1>{data.month}</h1>
    {videogamesContent}
    {filmsContent}
    {seriesContent}
  </section>;
};

export default Month;
