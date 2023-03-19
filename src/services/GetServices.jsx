import ErrorPage from './ErrorPage';

class GetServices {
  static async getWord() {
    const response = await fetch('http://itgirlschool.justmakeit.ru/api/words');
    const data = await response.json();
    return data;
  }
  catch(err) {
    return (
      <>
        <div>Ошибка: {err.message}</div>
        <ErrorPage />
      </>
    );
  }
}
export default GetServices;
