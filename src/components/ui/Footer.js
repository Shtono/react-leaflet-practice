import { Footer, Text, Anchor } from "grommet";

const MyFooter = () => {
  return (
    <Footer background='#4267B2' pad='medium' style={{ marginTop: "auto" }}>
      <Text>Copyright Shtono 2021</Text>
      <Anchor label='About' />
    </Footer>
  );
};

export default MyFooter;
