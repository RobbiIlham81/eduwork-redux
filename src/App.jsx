import { useSelector, useDispatch } from "react-redux";
import { Container, Button, Form } from "react-bootstrap";
export default function App() {
  const storeCounter = useSelector((store) => store.counter);

  const dispatch = useDispatch();

  function handleIncrement() {
    dispatch({ type: "SET_INCREMENT" });
  }

  function handleDecrement() {
    dispatch({ type: "SET_DECREMENT", value: storeCounter.count - 1 });
  }

  function handleChange(event) {
    console.log("INI", event.target.value);
    dispatch({ type: "SET_TITLE", value: event.target.value });
  }
  return (
    <Container>
      <h1>TUGAS REDUX</h1>
      <br />
      <Form.Control type="text" placeholder="Input Title" value={storeCounter.title} onChange={handleChange} />
      <Button variant="danger" onClick={handleIncrement}>
        Increment{" "}
      </Button>
      <span className="mx-2"> {JSON.stringify(storeCounter.count)}</span>
      <Button onClick={handleDecrement}>Decrement</Button>
    </Container>
  );
}
