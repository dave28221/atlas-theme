import React from 'react';
import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';



const POSTS_QUERY_LOCATIONS = gql`
{
  lawFirms(first: 10) {
    nodes {
      ...LawFirmFields
    }
  }
}

fragment LawFirmFields on LawFirm {
  name
  description
  photo {
    mediaItemId
    mediaItemUrl
    altText
    caption
    description
    mediaDetails {
      height
      width
      sizes {
        file
        fileSize
        height
        mimeType
        name
        sourceUrl
        width
      }
    }
  }
}
`;

function locations() {

  const { loading, error, data } = useQuery(POSTS_QUERY_LOCATIONS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>

  return data.lawFirms.nodes.map(({ name, description, photo}) => (

    <div classname="increaseCHeight">
      <Container>
        <Row>
          <Col className="backCard">
            <h1 className="titlePost">{name}</h1>
            <p dangerouslySetInnerHTML={{ __html: description }} className="increaseMargin"></p> 
            <img className="workplace" src={photo.mediaItemUrl} />
          </Col>
        </Row>
      </Container>
    </div>
  ));

}

export default locations;