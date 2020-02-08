import React from 'react';
import styled from 'styled-components';
import theme from 'theme';

const ListItemRoot = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-left: 2rem;
  padding-right: 2rem;
  width: 4rem;
`;

const ListItemText = styled.p`
  color: ${(props: { selected: boolean }): string =>
    props.selected ? theme.color.yellow : theme.color.lightgreen};

  border-width: 0px;
  border-bottom-width: ${(props: { selected: boolean }): string =>
    props.selected ? '2px' : '0px'};
  border-style: solid;
  font-size: 20px;

  ${ListItemRoot}:hover & {
    color: ${theme.color.teal};
  }
`;
interface ListItemProp {
  item: string;
  selected: boolean;
  onClick: (item: string) => void;
}

const ListItem: React.FC<ListItemProp> = ({
  item,
  selected = false,
  onClick,
}) => {
  return (
    <ListItemRoot onClick={(): void => onClick(item)} key={item}>
      <ListItemText selected={selected}>{item}</ListItemText>
    </ListItemRoot>
  );
};

export default ListItem;
