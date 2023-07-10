import gql from 'graphql-tag'

export const GET_MAIN_PAGE_SETTINGS = gql`
  query GET_MAIN_PAGE_SETTINGS {
    mainPages(where: {title: "Settings"}) {
      nodes {
        pageSettings {
          promo {
            image {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          header {
            logo {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            logoMobile {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          hero {
            title
            background {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          home {
            title
            description
            image1 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            image2 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            image3 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          about {
            title
            description
            image {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          mains {
            categoryImage {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage1 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage2 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage3 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage4 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage5 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          appertizer {
            categoryImage {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage1 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage2 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage3 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage4 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage5 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          desserts {
            categoryImage {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage1 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage2 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage3 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage4 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage5 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          boulangerie {
            categoryImage {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage1 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage2 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage3 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage4 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage5 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          drinks {
            categoryImage {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage1 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage2 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage3 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage4 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            productImage5 {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          event1 {
            title
            url
            date
            image {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          event2 {
            title
            url
            date
            image {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          event3 {
            title
            url
            date
            image {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          event4 {
            title
            url
            date
            image {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          event5 {
            title
            url
            date
            image {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
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
            image {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
          }
          contacts {
            phone
            email
            whatsappUrl
            instagramUrl
            instagramUsername
            rsvpUrl
          }
          workingHours {
            weekday {
              open
              close
            }
            weekend {
              open
              close
            }
          }
          footer {
            image {
              node {
                mediaItemUrl
                mediaType
                mimeType
              }
            }
            disclaimer
            company
          }
        }
      }
    }
  }
`

export const GET_GALLERY_IMAGES = gql`
  query GET_GALLERY_IMAGES {
    mainPages(where: {title: "Gallery"}) {
      nodes {
        gallerySettings {
          image1 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          image2 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          image3 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          image4 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          image5 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          image6 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          image7 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          image8 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          image9 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          image10 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          image11 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          image12 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          image13 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          image14 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
          image15 {
            node {
              mediaItemUrl
              mediaType
              mimeType
            }
          }
        }
      }
    }
  }
`