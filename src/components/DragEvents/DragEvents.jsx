import Section from "../utils/Section";
import NormalContent from "../utils/NormalContent";
import ListLink from "../utils/ListLink";

export default function DragEvents() {
  return (
    <Section title="Drag Events" id="drag-events">
      <NormalContent>
        <ul id="drag-events-names">
          <ListLink
            src="https://www.w3schools.com/jsref/event_ondrag.asp"
            title="onDrag"
            text="An element is being dragged"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_ondragstart.asp"
            title="onDragStart"
            text="The user starts to drag an element"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_ondragend.asp"
            title="onDragEnd"
            text="Finished dragging an element"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_ondragenter.asp"
            title="onDragEnter"
            text="A dragged element enters the drop target"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_ondragleave.asp"
            title="onDragLeave"
            text="A dragged element leaves the drop target"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_ondragover.asp"
            title="onDragOver"
            text="A dragged element is over the drop target"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_ondrop.asp"
            title="onDrop"
            text="A dragged element is dropped on the target"
          />
        </ul>
      </NormalContent>
    </Section>
  );
}
