
import { useState } from "react";
import { ChevronLeft, ChevronRight, Lightbulb } from "lucide-react";

const notes = [
  {
    title: "Focus on what matters",
    description:
      "Prioritize your most important tasks. Small, consistent steps lead to big achievements.",
    tip: "Start with your highest-priority task today.",
  },
  {
    title: "Take meaningful breaks",
    description:
      "Give your mind time to recharge. Short breaks can help you stay productive and creative.",
    tip: "Try working for 25 minutes and resting for 5 minutes.",
  },
  {
    title: "Celebrate your progress",
    description:
      "Every completed task is a step forward. Recognize your progress and keep moving.",
    tip: "Review your completed tasks at the end of each day.",
  },
];

function FocusNotes() {
  const [activeIndex, setActiveIndex] = useState(0);

  const currentNote = notes[activeIndex];

  function showPrevious() {
    setActiveIndex((previous) =>
      (previous - 1 + notes.length) % notes.length
    );
  }

  function showNext() {
    setActiveIndex((previous) =>
      (previous + 1) % notes.length
    );
  }

  return (
    <section className="focus-notes">
      <div className="focus-notes-header">
        <div>
          <h2>Focus Notes</h2>
          <p>A little inspiration for your day</p>
        </div>

        <div className="carousel-controls">
          <button
            type="button"
            onClick={showPrevious}
            aria-label="Previous note"
          >
            <ChevronLeft size={19} />
          </button>

          <button
            type="button"
            onClick={showNext}
            aria-label="Next note"
          >
            <ChevronRight size={19} />
          </button>
        </div>
      </div>

      <div className="focus-note-content">
        <div className="focus-note-icon">
          <Lightbulb size={25} />
        </div>

        <h3>{currentNote.title}</h3>
        <p>{currentNote.description}</p>

        <div className="focus-tip">
          <strong>Today's tip:</strong> {currentNote.tip}
        </div>
      </div>

      <div className="carousel-indicators">
        {notes.map((note, index) => (
          <button
            key={note.title}
            type="button"
            className={activeIndex === index ? "active" : ""}
            onClick={() => setActiveIndex(index)}
            aria-label={`Go to note ${index + 1}`}
            aria-current={activeIndex === index ? "true" : undefined}
          />
        ))}
      </div>
    </section>
  );
}

export default FocusNotes;
