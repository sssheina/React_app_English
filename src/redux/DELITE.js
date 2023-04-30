async function DELITE(id) {
    try {
        const response = await fetch(
            `http://itgirlschool.justmakeit.ru/api/words/${id}/delete`,
            {
                method: 'POST',
            }
        );

        if (!response.ok) {
            throw new Error('Failed to delete word');
        }
        const data = await response.json();
        return data;

    } catch (error) {
        console.error('Error deleting word: ', error);

    }
}

export default DELITE;