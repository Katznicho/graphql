import { ApolloServer, gql } from "apollo-server";


//add typeDefs
const typeDefs = gql`
type Query {
    hello: [String],
    products: [product!]!
}
type product{
    id: ID!
    name: String!
    price: Float!
    description: String!
    image: String!
    category: String!
    rating: Float!
    numReviews: Int!
    onSale: Boolean!
}
`;

//add resolvers
const resolvers = {
    Query: {
        hello: () => ["Hello", "My", "Fri"],
        products: () => [
            {
                id: 1,
                name: "Nike Slim Shirt",
                price: 120,
                description: "high quality product",
                image: "/images/p1.jpg",
                category: "Shirts",
                rating: 4.5,
                numReviews: 10,
                onSale: true
            },
            {
                id: 2,
                name: "Adidas Fit Shirt",
                price: 100,
                description: "high quality product",
                image: "/images/p2.jpg",
                category: "Shirts",
                rating: 4.0,
                numReviews: 10,
                onSale: false
            }
        ]
    }
};

const server = new ApolloServer({
    typeDefs,
    resolvers
});

 server.listen().then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
    });