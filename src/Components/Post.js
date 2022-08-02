import { useQuery } from "@apollo/react-hooks";
import { gql } from "apollo-boost";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const POSTS_QUERY = gql`
{
  lawyers(first: 10) {
    nodes {
      ...LawyerFields
    }
  }
}

fragment LawyerFields on Lawyer {
  name
  credentials
  profilePhoto {
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
  bio
  practicingSince
  locations {
    edges {
      node {
        id
      }
    }
  }
}
`;

function displayContent() {
  /* dangerously set for hiding elements */
  const { loading, error, data } = useQuery(POSTS_QUERY);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error...</p>

  return data.lawyers.nodes.map(({ name, credentials, profilePhoto, bio }) => (

    <div>
      <Container>
        <Row>
          <Col>
            <h1 className="titlePost">{name}</h1>
            <p className="credentials">{credentials}</p>
            <img className="workplace" src={profilePhoto.mediaItemUrl} />
            <p className="credentials">Bio</p>
            <p dangerouslySetInnerHTML={{ __html: bio }} className="increaseMargin"></p> 
          </Col>
        </Row>
      </Container>
    </div>
  ));


}

export default displayContent;
