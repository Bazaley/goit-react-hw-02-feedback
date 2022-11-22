import { ButtonBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ addGrade }) => {
  return (
    <>
      <ButtonBox>
        <Button type="button" name="good" onClick={e => addGrade(e)}>
          Good
        </Button>
        <Button type="button" name="neutral" onClick={e => addGrade(e)}>
          Neutral
        </Button>
        <Button type="button" name="bad" onClick={e => addGrade(e)}>
          Bad
        </Button>
      </ButtonBox>
    </>
  );
};
