import { GraphQLClient, gql } from "graphql-request";

const graphqlClient = new GraphQLClient(
	process.env.REACT_APP_GRAPHCMS_ENDPOINT,
	{
		headers: {
			authorization: `Bearer ${process.env.REACT_APP_GRAPHCMS_TOKEN}`,
		},
	}
);

const toolsQuery = gql`
	{
		tools {
			id
			updatedAt
			title
			description {
				html
			}
			photo {
				id
				url
			}
		}
	}
`;
const projectsQuery = gql`
	{
		projects {
			id
			publishedAt
			startDate
			endDate
			title
			description
			tech
			url
			codeRepositoryUrl
			image {
				fileName
				size
				id
				url
			}
		}
	}
`;
export { graphqlClient, toolsQuery, projectsQuery };
