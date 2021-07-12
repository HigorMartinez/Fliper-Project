import { gql } from '@apollo/client';

export const GET_WEALTH_SUMMARY_DATA = gql`
    {
        wealthSummary {
            gain
            total
            cdi
            profitability
            id
        }
    }
`;

