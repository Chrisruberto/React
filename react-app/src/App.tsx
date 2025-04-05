import Card, { CardBoody } from "./components/Card";
import List from "./components/List";


function App() {
  const list = ["Goku", "Tanjiro", "Eren"]
  return (
    <Card>
      <CardBoody title= "hola mundo" text="este es el texto"></CardBoody>
      <List data={list}></List>
    </Card>
  );

}


export default App