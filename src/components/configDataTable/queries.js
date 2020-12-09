import { gql } from '@apollo/client';

export const GET_CONFIG = gql`
  query GetAffiliatesConfig {
    getAffiliatesConfig{
      columns {
        name
        label
      }
      groupRows
    }
  }
`;

export const GET_DATA = gql`
  query GetAffiliatesTableData($paginationInput: PaginationInput) {
    getAffiliatesTableData(paginationInput: $paginationInput) {
      rows{
        id
        parentId
        cells {
          name
          value
        }
      }
      total
    }
  }
`;