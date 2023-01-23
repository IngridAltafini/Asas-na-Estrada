import { useRef } from 'react';

import { Form } from '@unform/web';

import { BiSearchAlt } from 'react-icons/bi';

import { Input, Button, Select } from '../';

import { Container } from './styles';

export const ListTravelsToolbar = ({ handleSearch }) => {
  const formRef = useRef(null);

  const selectOptions = [
    {
      value: 'xx',
      label: 'Limpar filtro',
    },
    {
      value: 'state',
      label: 'Estado',
    },

    {
      value: 'city',
      label: 'Cidade',
    },
    {
      value: 'type',
      label: 'Tipo',
    },
  ];

  return (
    <Container>
      <Form ref={formRef} onSubmit={handleSearch}>
        <Select
          name="type"
          placeholder="qual sua pesquisa"
          options={selectOptions}
        />
        <Input
          name="search"
          type="text"
          icon={BiSearchAlt}
          placeholder="Digite o nome do campo selecionado"
        />
        <Button type="submit">
          <BiSearchAlt />
        </Button>
      </Form>
    </Container>
  );
};
