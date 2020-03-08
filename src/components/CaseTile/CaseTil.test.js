import React from 'react';
import renderer from 'react-test-renderer';
import CaseTile from './CaseTile';

const singleCase = {
  id: 97092,
  title: 'Stolen 2017 Raleigh Tourist de Luxe(green)',
  description: '',
  address: 'Frederiksberg, 2000, DK',
  occurred_at: 1550851200,
  updated_at: 1568736467,
  url: 'https://bikewise.org/api/v1/incidents/97092',
  source: {
    name: 'BikeIndex.org',
    html_url: 'https://bikeindex.org/bikes/581373',
    api_url: 'https://bikeindex.org/api/v1/bikes/581373',
  },
  media: {
    image_url: null,
    image_url_thumb: null,
  },
  location_type: null,
  location_description: null,
  type: 'Theft',
  type_properties: null,
};

test('Link changes the class when hovered', () => {
  const component = renderer.create(
    <CaseTile singleCase={singleCase} />,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});
