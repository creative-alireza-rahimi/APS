import { Card } from '../../components/Card/Card';
import { Filters } from '../../components/Filters/Filters';
import { Wrapper, CardsList, StyledLoading } from './SearchPage.styles';
import { useCountries } from '../../Providers/CountriesProvider';
import { useState } from 'react';
import { ErrorMessage } from "../../helper/Components/ErrorMessage/ErrorMessage.js";
import { ThreeCircles } from 'react-loader-spinner'

export const SearchPage = () => {
  const { countries, state } = useCountries();
  const [selectedValue, setSelectedValue] = useState('');
  const [inputValue, setInputValue] = useState('');

  function handleSelectedItemChange({ selectedItem }) {
    setSelectedValue(selectedItem);
  }

  let content;
  if (state === 'loading') {
    content = (
      <StyledLoading>
        <ThreeCircles
          height="100"
          width="100"
          color="#4fa94d"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="three-circles-rotating"
          outerCircleColor=""
          innerCircleColor=""
          middleCircleColor=""
        />
      </StyledLoading>
    );
  } else if (state === 'resolved') {
    const list = countries
      .filter((country) => country.name.common.toLowerCase().includes(inputValue.toLowerCase()))
      .filter((country) => {
        return country.continents.some((continent) => continent.toLowerCase().includes(selectedValue.toLowerCase()));
      })
      .map((country) => <Card country={country} key={country.name.common} />);
    content = <CardsList>{list}</CardsList>;
  } else {
    content = <ErrorMessage
      header="An Error Accoured."
      message="Check Your Connection and Try Again." />;
  }

  return (
    <Wrapper>
      <Filters
        selectedValue={selectedValue}
        handleSelectedItemChange={handleSelectedItemChange}
        inputValue={inputValue}
        setInputValue={setInputValue}
      />
      {content}
    </Wrapper>
  );
};