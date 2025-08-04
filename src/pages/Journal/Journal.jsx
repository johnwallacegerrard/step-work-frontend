import { useContext } from "react";
import "./Journal.css";
import CurrentUserContext from "../../contexts/CurrentUserContext";

function Journal() {
  console.log("Journal component is rendering!");
  const { currentUser } = useContext(CurrentUserContext);

  return (
    <div className="myjournal">
      <h1 className="myjournal__title">My Journal</h1>
      <div className="myjournal__entry-container">
        {currentUser.journal.map((page) => {
          console.log(page.date);
          let date = new Date(page.date).toLocaleString("default", {
            month: "long",
            day: "numeric",
            year: "numeric",
            hour: "numeric",
            minute: "numeric",
          });
          return (
            <div key={page._id} className="myjournal__entry">
              <h2 className="myjournal__entry-date">{date}</h2>
              <p className="myjournal__entry-content">{page.entry}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Journal;
