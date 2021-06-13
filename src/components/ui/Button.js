import { Grommet, grommet, Box, Button } from "grommet";


const UiButton = ({setShowMap, showMap}) => {
  const toggleMap = () => {
    setShowMap(!showMap)
  }
  return (
    <Grommet theme={grommet} color='#c3c3c3'>
    <Box align="center" background="neutral-2" background='#c3c3c3' pad='small'>
      <Button
        color='#4267B2'
        label="Show Map"
        primary 
        onClick={toggleMap}
      />
    </Box>
  </Grommet>
  )
}

export default UiButton