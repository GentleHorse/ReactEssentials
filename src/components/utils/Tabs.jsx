export default function Tabs({ children, buttons, ButtonsContainer = "menu" }) {
  // Create custom component for storing fowarded tag info prop
  //   const ButtonsContainer = buttonsContainer;

  return (
    <>
      <ButtonsContainer>{buttons}</ButtonsContainer>
      {children}
    </>
  );
}
