/*
Setup a custom counter hook with increment, decrement, reset,
setValue functions with a valid UI and Implement a combination
of states with a useReducer that implements a counter with the
four evident features in the custom hook -  increment,
decrement, reset, setValue. Implement a page for the
custom hook, useReducer, 404, and a page to test error
boundary and good SEO.

*/

import "./App.css";
import { Route, Routes } from "react-router-dom";
import Counter from "./pages/counter";
import CustomHookCounter from "./pages/customHookCounter";
import Error from "./pages/404";
import ErrorBoundary from "./errorBoundary";
import { Helmet } from "react-helmet";

function App() {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Tobiloba Exam</title>
        <link
          rel="canonical"
          href="https://gentle-blancmange-9f0687.netlify.app/"
        />
        <meta
          name="description"
          content="Tobi Exam Counter"
        />
      </Helmet>
      <ErrorBoundary>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/useReducer" element={<Counter />} />
          <Route path="/useCounter" element={<CustomHookCounter />} />
          <Route path="*" element={<Error />} />
        </Routes>
      </ErrorBoundary>
    </div>
  );
}

export default App;
