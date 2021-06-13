import { useContext, useState } from "react";
import { useMapEvents } from "react-leaflet";
import { Form, FormField, Box, TextInput, Button, Text } from "grommet";
import { MapContext } from "../context/MapContext";

const SidePanel = () => {
  const [title, setTitle] = useState("");
  const [confirm, setConfirm] = useState(false);
  const [confirmMessage, setConfirmMessage] = useState("");
  const { polygonPoints, resetCoordinates } = useContext(MapContext);

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (polygonPoints.length > 2 && title) {
      setConfirmMessage("New Polygon saved to DB");
      setTimeout(() => {
        setConfirmMessage("");
        setConfirm(false);
      }, 1500);
    } else {
      setConfirmMessage("Please add a title");
      setTimeout(() => {
        setConfirmMessage("");
        setConfirm(false);
      }, 1500);
    }
  };

  const onReset = () => {
    if (polygonPoints.length || title) {
      setConfirmMessage("This will reset the form. Are you sure?");
      setConfirm(true);
    }
  };

  const reset = () => {
    resetCoordinates();
    setConfirm(false);
    setConfirmMessage("");
    setTitle("");
  };
  const cancelReset = () => {
    setConfirm(false);
    setConfirmMessage("");
  };

  return (
    <Form onSubmit={onSubmit} onReset={onReset}>
      <FormField name='name' htmlFor='text-input-id' label='Area Name'>
        <TextInput
          id='text-input-id'
          name='name'
          value={title}
          onChange={onChange}
        />
      </FormField>
      <Box>
        <Text margin='xsmall' alignSelf='center'>
          {confirmMessage}
        </Text>
      </Box>
      {confirm && (
        <Box>
          <Box direction='row' justify='evenly' margin='small'>
            <Button color='red' label='Yes' size='xsmall' onClick={reset} />
            <Button
              color='#4267B2'
              label='No'
              size='xsmall'
              onClick={cancelReset}
            />
          </Box>
        </Box>
      )}
      {!confirm && (
        <Box>
          <Button
            type='reset'
            secondary
            label='Reset'
            alignSelf='center'
            size='xsmall'
            margin='medium'
            color='#ff7f7f '
          />
          <Button
            type='submit'
            primary
            label='Submit'
            alignSelf='center'
            margin='medium'
            color='#4267B2'
          />
        </Box>
      )}
    </Form>
  );
};

export default SidePanel;
