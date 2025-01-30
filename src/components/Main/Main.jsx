import React, { useState } from "react";
import Month from '../Month/Month'
import { v4 as uuidv4 } from 'uuid';

const Main = () => {
  const database = [
    {
      month: 'January',
      videogames: [
        {
          title: 'Minit',
          releaseDate: '2015-05-19',
          image: 'https://example.com/minit.jpg',
        },
        {
          title: 'Monkey Island 1',
          releaseDate: '2015-05-19',
          image: 'https://example.com/monkeyisland1.jpg',
        }
      ],
      films: [
        {
          title: 'Inception',
          releaseDate: '2010-07-16',
          image: 'https://example.com/inception.jpg',
        },
        {
          title: 'The Matrix',
          releaseDate: '1999-03-31',
          image: 'https://example.com/matrix.jpg',
        },
        {
          title: 'Interstellar',
          releaseDate: '2014-11-07',
          image: 'https://example.com/interstellar.jpg',
        },
      ],
      series: []
    },
    {
      month: 'February',
      videogames: [],
      films: [
        {
          title: 'Titanic',
          releaseDate: '1997-12-19',
          image: 'https://example.com/titanic.jpg',
        },
        {
          title: 'La La Land',
          releaseDate: '2016-12-09',
          image: 'https://example.com/lalaland.jpg',
        },
        {
          title: 'The Notebook',
          releaseDate: '2004-06-25',
          image: 'https://example.com/notebook.jpg',
        },
      ],
      series: [
        {
          title: 'The Office',
          releaseDate: '2005-03-24',
          image: 'https://example.com/theoffice.jpg',
        }
      ]
    },
    {
      month: 'March',
      videogames: [
        {
          title: 'Final Fantasy VII',
          releaseDate: '1997-01-29',
          image: 'https://example.com/finalfantasy.jpg',
        }
      ],
      films: [
        {
          title: 'The Godfather',
          releaseDate: '1972-03-24',
          image: 'https://example.com/godfather.jpg',
        }
      ],
      series: [],
    },
    {
      month: 'April',
      videogames: [
        {
          title: 'Hades',
          releaseDate: '2020-09-17',
          image: 'https://example.com/hades.jpg',
        }
      ],
      films: [],
      series: [
        {
          title: 'Money Heist',
          releaseDate: '2017-05-02',
          image: 'https://example.com/moneyheist.jpg',
        }
      ]
    },
    {
      month: 'May',
      videogames: [
        {
          title: 'Super Mario Odyssey',
          releaseDate: '2017-10-27',
          image: 'https://example.com/supermario.jpg',
        }
      ],
      films: [
        {
          title: 'Avatar',
          releaseDate: '2009-12-18',
          image: 'https://example.com/avatar.jpg',
        },
        {
          title: 'Jurassic Park',
          releaseDate: '1993-06-11',
          image: 'https://example.com/jurassicpark.jpg',
        },
        {
          title: 'The Lion King',
          releaseDate: '1994-06-24',
          image: 'https://example.com/lionking.jpg',
        },
      ],
      series: [],
    },
    {
      month: 'June',
      videogames: [
        {
          title: 'Overwatch',
          releaseDate: '2016-05-24',
          image: 'https://example.com/overwatch.jpg',
        }
      ],
      films: [
        {
          title: 'Wonder Woman',
          releaseDate: '2017-06-02',
          image: 'https://example.com/wonderwoman.jpg',
        }
      ],
      series: [
        {
          title: 'The Witcher',
          releaseDate: '2019-12-20',
          image: 'https://example.com/witcher.jpg',
        }
      ],
    },
    {
      month: 'July',
      videogames: [],
      films: [
        {
          title: 'Jaws',
          releaseDate: '1975-06-20',
          image: 'https://example.com/jaws.jpg',
        }
      ],
      series: [],
    },
    {
      month: 'August',
      videogames: [],
      films: [
        {
          title: 'The Incredibles',
          releaseDate: '2004-11-05',
          image: 'https://example.com/incredibles.jpg',
        },
        {
          title: 'Shrek',
          releaseDate: '2001-04-22',
          image: 'https://example.com/shrek.jpg',
        },
        {
          title: 'Monsters Inc.',
          releaseDate: '2001-11-02',
          image: 'https://example.com/monstersinc.jpg',
        },
      ],
      series: [
        {
          title: 'Chernobyl',
          releaseDate: '2019-05-06',
          image: 'https://example.com/chernobyl.jpg',
        }
      ],
    },
    {
      month: 'September',
      videogames: [],
      films: [
        {
          title: 'Inception',
          releaseDate: '2010-07-16',
          image: 'https://example.com/inception.jpg',
        }
      ],
      series: [],
    },
    {
      month: 'October',
      videogames: [
        {
          title: 'Resident Evil Village',
          releaseDate: '2021-05-07',
          image: 'https://example.com/residentevilvillage.jpg',
        }
      ],
      films: [
        {
          title: 'Halloween',
          releaseDate: '1978-10-25',
          image: 'https://example.com/halloween.jpg',
        }
      ],
      series: [],
    },
    {
      month: 'November',
      videogames: [],
      films: [],
      series: [
        {
          title: 'The Office',
          releaseDate: '2005-03-24',
          image: 'https://example.com/theoffice.jpg',
        }
      ],
    },
    {
      month: 'December',
      videogames: [],
      films: [
        {
          title: 'Home Alone',
          releaseDate: '1990-11-16',
          image: 'https://example.com/homealone.jpg',
        }
      ],
      series: [
        {
          title: 'The Queen’s Gambit',
          releaseDate: '2020-10-23',
          image: 'https://example.com/queensgambit.jpg',
        }
      ],
    },
  ]

  const renderMonths = () => {
    return database.map((month, i) => <Month data={month} key={uuidv4()} />)
  }

  return <main>
    {renderMonths()}
  </main >;
};

export default Main;
