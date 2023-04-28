
async function POST(newWord) {
    console.log('this action POST', newWord);
    try {
        console.log('sending request...');
        const response = await fetch(
            'http://itgirlschool.justmakeit.ru/api/words/add',
            {
                mode: 'no-cors',
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json;charset=utf-8',
                },
                body: JSON.stringify(newWord),
            }
        );
        console.log('request sent!');
        if (response) {
            const data = await response.json();
            return data;
        }
    } catch (e) {
        console.error(e);
    }
}
export default POST;

