export type Shop = {
    id: string;
    title: string;
    isActive: boolean;
    products: ShopProduct[];
};

export type ShopProduct = {
    title: string;
    productId: string;
    productName: string;
    productPrice: number;
    productImage: string;
};
