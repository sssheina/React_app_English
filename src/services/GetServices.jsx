import NoMatch from "../components/NoMatch/NoMatch";

class GetServices {
  static async getWord() {
    const response = await fetch("http://itgirlschool.justmakeit.ru/api/words");
    const data = await response.json();
    return data;
  }
  catch(err) {
    return (
      <>
        <div>Error: {err.message}</div>
        <NoMatch />
      </>
    );
  }
}
export default GetServices;
