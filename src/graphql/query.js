import gql from 'graphql-tag'

export const GET_ALL_DATA_QUERY = gql`
  query GET_ALL_DATA {
    menus {
      nodes {
        name
        settings {
          promo {
            image {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          header {
            logo {
              mediaItemUrl
              mediaType
              mimeType
            }
            logoMobile {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          hero {
            title
            background {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          home {
            title
            description
            image1 {
              mediaItemUrl
              mediaType
              mimeType
            }
            image2 {
              mediaItemUrl
              mediaType
              mimeType
            }
            image3 {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          about {
            title
            description
            image {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          mains {
            categoryImage {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage1 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage2 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage3 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage4 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage5 {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          appertizer {
            categoryImage {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage1 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage2 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage3 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage4 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage5 {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          desserts {
            categoryImage {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage1 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage2 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage3 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage4 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage5 {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          boulangerie {
            categoryImage {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage1 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage2 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage3 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage4 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage5 {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          drinks {
            categoryImage {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage1 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage2 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage3 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage4 {
              mediaItemUrl
              mediaType
              mimeType
            }
            productImage5 {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          event1 {
            title
            url
            date
            image {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          event2 {
            title
            url
            date
            image {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          event3 {
            title
            url
            date
            image {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          event4 {
            title
            url
            date
            image {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          event5 {
            title
            url
            date
            image {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          gallery {
            title
            description
          }
          location {
            title
            address
            url
          }
          contacts {
            phone
            email
            whatsappUrl
            instagramUrl
            instagramUsername
          }
          rsvp {
            image {
              mediaItemUrl
              mediaType
              mimeType
            }
            url
          }
        }
      }
    }
  }
`