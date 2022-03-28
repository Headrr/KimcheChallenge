import { gql } from "@apollo/client";

export const COUNTRIES_QUERY = gql`
query Counties {
  countries {
    name
    code
    capital
    currency
    continent {
      name
      code
    }
    languages {
      code
      name
    }
  }
}
`;
