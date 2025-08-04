import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./JournalEntry.css";
import Api from "../../utils/api";

const api = new Api({
  baseUrl: "http://localhost:3001",
  headers: {
    "Content-Type": "application/json",
  },
});

function JournalEntry() {
  const navigate = useNavigate();
  const [journalEntry, setJournalEntry] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    api.submitJournalEntry({ journalEntry }).then(() => {
      setJournalEntry("");
    });
  };

  const handleOpenJournal = () => {
    navigate("/myjournal");
  };

  const currentDate = new Date().toLocaleString("default", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });

  return (
    <section className="journal">
      <h2 className="journal__title">Journal</h2>
      <form onSubmit={handleSubmit} className="journal__form">
        <h3 className="journal__date">{currentDate}</h3>
        <textarea
          id="journal-entry"
          className="journal__form-input"
          type="string"
          value={journalEntry}
          onChange={(e) => setJournalEntry(e.target.value)}
          placeholder="Your thoughts and feelings go here"
          required
        ></textarea>
        <div className="journal__btn-container">
          <button
            type="button"
            onClick={handleOpenJournal}
            className="journal__open-journal-btn"
          >
            Open Journal
          </button>
          <button type="submit" className="journal__submit-entry-btn">
            Submit Entry
          </button>
        </div>
      </form>
    </section>
  );
}

export default JournalEntry;
