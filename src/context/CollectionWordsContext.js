import React, { createContext, useState, useEffect } from 'react';
import Spinner from '../components/Spinner/Spinner';

import Error from '../components/Error/Error';
export const CollectionWordsContext = createContext();

export const CollectionWords = (props) => {
  const [dictionary, setDictionary] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [updatedWord, setUpdatedWord] = useState({});

  useEffect(() => {
    fetch('http://itgirlschool.justmakeit.ru/api/words')
      .then((response) => response.json())
      .then((data) => {
        setDictionary(data);
      })
      .catch((error) => {
        console.error('Error fetching words: ', error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [dictionary]);

  const addWord = (newWord) => {
    setIsLoading(true); // set isLoading to true before making the API call
    fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newWord),
    })
      .then((response) => response.json())
      .then((data) => {
        setDictionary((prevDictionary) => [...prevDictionary, data]);
      })
      .catch((error) => {
        console.error('Error adding word: ', error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false); // set isLoading to false after the API call is complete
      });
  };

  const updateWord = (updatedWord) => {
    console.log(updatedWord);
    setIsLoading(true);
    fetch(
      `http://itgirlschool.justmakeit.ru/api/words/${updatedWord.id}/update`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(updatedWord),
      }
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      })
      .catch((error) => {
        console.error('Error updating word: ', error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const deleteWord = (updatedWord) => {
    setIsLoading(true);
    fetch(
      `http://itgirlschool.justmakeit.ru/api/words/${updatedWord.id}/delete`,
      {
        method: 'POST',
      }
    )
      .then((response) => {
        if (!response.ok) {
          throw new Error('Failed to delete word');
        }
      })
      .catch((error) => {
        console.error('Error deleting word: ', error);
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  return (
    <CollectionWordsContext.Provider
      value={{
        dictionary,
        setDictionary,
        isLoading,
        error,
        addWord,
        updateWord,
        updatedWord,
        setUpdatedWord,
        deleteWord,
      }}
    >
      {props.children}
      {isLoading ? <Spinner /> : props.children}{' '}
    </CollectionWordsContext.Provider>
  );
};

// import React, { createContext, useState, useEffect } from 'react';
// import Spinner from '../components/Spinner/Spinner';

// export const CollectionWordsContext = createContext();

// export const CollectionWords = (props) => {
//   const [dictionary, setDictionary] = useState([]);
//   const [isLoading, setIsLoading] = useState(false);
//   const [error, setError] = useState(null);
//   const [updatedWord, setUpdatedWord] = useState({});

//   useEffect(() => {
//     setIsLoading(true);
//     fetch('http://itgirlschool.justmakeit.ru/api/words')
//       .then((response) => response.json())
//       .then((data) => {
//         setDictionary(data);
//       })
//       .catch((error) => {
//         console.error('Error fetching words: ', error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   }, []);

//   const addWord = (newWord) => {
//     setIsLoading(true); // set isLoading to true before making the API call
//     fetch('http://itgirlschool.justmakeit.ru/api/words/add', {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(newWord),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setDictionary((prevDictionary) => [...prevDictionary, data]);
//       })
//       .catch((error) => {
//         console.error('Error adding word: ', error);
//         setError(error);
//       })
//       .finally(() => {
//         setIsLoading(false); // set isLoading to false after the API call is complete
//       });
//   };

//   const updateWord = (updatedWord) => {
//     console.log(updatedWord);
//     setIsLoading(true);
//     fetch(`http://itgirlschool.justmakeit.ru/api/words/${updatedWord.id}/update`, {
//       method: 'PUT',
//       headers: {
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify(updatedWord),
//     })
//       .then((response) => response.json())
//       .then((data) => {
//         setDictionary((prevDictionary) =>
//           prevDictionary.map((word) =>
//             word.id === updatedWord.id ? data : word
//           )
//         );
//       })
//       .catch((error) => {
//         console.error('Error updating word: ', error);
//         setError(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });

//   };

//   const deleteWord = (id) => {
//     setIsLoading(true);
//     fetch(`http://itgirlschool.justmakeit.ru/api/words/${updatedWord.id}/delete`, {
//       method: 'DELETE',
//     })
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('Failed to delete word');
//         }
//         setDictionary((prevDictionary) =>
//           prevDictionary.filter((word) => word.id !== id)
//         );
//       })
//       .catch((error) => {
//         console.error('Error deleting word: ', error);
//         setError(error);
//       })
//       .finally(() => {
//         setIsLoading(false);
//       });
//   };

// ;

//   return (
//     <CollectionWordsContext.Provider
//       value={{
//         dictionary,
//         setDictionary,
//         isLoading,
//         error,
//         addWord,
//         updateWord,
//         updatedWord,
//         setUpdatedWord,
//         deleteWord,
//       }}
//     >
//       {isLoading ? <Spinner /> : props.children}{' '}

//     </CollectionWordsContext.Provider>
//   );
// };
