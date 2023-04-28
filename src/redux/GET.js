class GET {
    static async getWords() {
        try {
            const r = await fetch('http://itgirlschool.justmakeit.ru/api/words');
            const data = await r.json();
            return data;
        } catch (e) {
            console.error(e);
        }
    }
}

export default GET;