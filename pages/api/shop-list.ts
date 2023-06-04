import { NextApiRequest, NextApiResponse } from "next";
import { faker } from "@faker-js/faker";

const shopCard = new Array(5).fill(0).map(() => {
    const title = faker.company.name();
    return {
        id: faker.string.uuid(),
        title: title,
        isActive: false,
        products: new Array(10).fill(0).map(() => ({
            title,
            productId: faker.string.uuid(),
            productName: faker.commerce.productName(),
            productPrice: faker.commerce.price(),
            productImage: faker.image.dataUri({
                color: faker.color.rgb(),
                height: 200,
                width: 400,
            }),
        })),
    };
});

const handler = (req: NextApiRequest, res: NextApiResponse) => {
    res.status(200).json({ result: shopCard });
};
export default handler;
