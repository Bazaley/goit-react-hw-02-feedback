import { ButtonBox, Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ addGrade, options }) => {
  return (
    <>
      <ButtonBox>
        {options.map(option => (
          <Button key={option} type="button" name={option} onClick={addGrade}>
            {option}
          </Button>
        ))}
      </ButtonBox>
    </>
  );
};
