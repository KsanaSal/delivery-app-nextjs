import { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";

const shopCard = new Array(5).fill(0).map(() => ({
    id: faker.string.uuid(),
    title: faker.company.name(),
    products: new Array(10)
        .fill(0)
        .map(() => ({
            productId: faker.string.uuid(),
            productName: faker.commerce.productName(),
            productPrice: faker.commerce.price(),
            productImage: faker.image.dataUri(),
        })),
}));

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ result: shopCard });
};
export default handler;
