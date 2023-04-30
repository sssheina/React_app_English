async function UPDATE(updatedWord) {

    await fetch(
        `http://itgirlschool.justmakeit.ru/api/words/${updatedWord.id}/update`,
        {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(updatedWord),
        }
    );

};

export default UPDATE;


