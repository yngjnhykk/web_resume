import styled from 'styled-components';

interface Props {
  content: string;
}

function InfoItem(props: Props) {
  return (
    <Wrap>
      <li>{props.content}</li>
    </Wrap>
  );
}

export default InfoItem;

const Wrap = styled.div`
  width: 100%;
`;
