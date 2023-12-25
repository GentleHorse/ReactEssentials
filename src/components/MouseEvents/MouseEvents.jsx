import Section from "../utils/Section.jsx";
import ListContent from "../utils/ListContent.jsx";
import ListLink from "../utils/ListLink.jsx";

export default function MouseEvents() {
  return (
    <Section title="Mouse Events">
      <ListContent>
          <ListLink
            src="https://www.w3schools.com/jsref/event_onclick.asp"
            title="onClick"
            text="Clicks on an element"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_oncontextmenu.asp"
            title="onContextMenu"
            text="Right-clicks on an element"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_ondblclick.asp"
            title="onDoubleClick"
            text="Double-clicks on an element"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_onmousedown.asp"
            title="onMouseDown"
            text="A mouse button is pressed over an element"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_onmouseenter.asp"
            title="onMouseEnter"
            text="The pointer is moved onto an element"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_onmouseleave.asp"
            title="onMouseLeave"
            text="The pointer is moved out of an element"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_onmousemove.asp"
            title="onMouseMove"
            text="The pointer is moving over an element"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_onmouseout.asp"
            title="onMouseOut"
            text="The mouse pointer moves out of an element"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_onmouseover.asp"
            title="onMouseOver"
            text="The mouse pointer is moved over an element"
          />
          <ListLink
            src="https://www.w3schools.com/jsref/event_onmouseup.asp"
            title="onMouseUp"
            text="The mouse button is released over an element"
          />
      </ListContent>
    </Section>
  );
}
