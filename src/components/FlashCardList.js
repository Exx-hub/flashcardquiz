import React from "react";
import FlashCard from "./FlashCard";

function FlashCardList({ flashcards }) {
  return (
    <div className="card-grid">
      {flashcards.map((flashcard) => {
        return <FlashCard key={flashcard.id} flashcard={flashcard} />;
      })}
    </div>
  );
}

export default FlashCardList;
