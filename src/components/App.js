import React, { useState } from "react";
import QuestionList from "./QuestionList";
import QuestionForm from "./QuestionForm";
import AdminNavBar from "./AdminNavBar";

function App() {
  const [page, setPage] = useState("List");

  return (
    <main>
      <AdminNavBar onChangePage={setPage} />
      {page === "Form" ? <QuestionForm /> : <QuestionList />}
    </main>
  );
}

export default App;
