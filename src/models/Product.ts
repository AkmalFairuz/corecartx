interface Product {
    name: string;
    description: string;
    imageUrl: string;
    price: number;
    sold: number;
    rating: string;
}

const dummyProducts: Product[] = [
    {
        name: "Intel® Core™ 12th Gen i3-12100F",
        description: "TODO",
        imageUrl: "https://blossomzones.com/wp-content/uploads/2022/01/12100F.jpg",
        price: 1200000,
        sold: 100,
        rating: "4.5"
    },
    {
        name: "Intel® Core™ 9th Gen i9-9900K",
        description: "",
        imageUrl: "https://down-id.img.susercontent.com/file/a7b01ed4db536bd847f3f41286ff24cc",
        price: 3000000,
        sold: 90,
        rating: "4.3"
    },
    {
        name: "Intel® Core™ 10th Gen i5-10400F",
        description: "",
        imageUrl: "https://images.tokopedia.net/img/cache/700/product-1/2020/6/4/7899076/7899076_1f48e213-2fff-46b0-bfda-5c93bf79b404_700_700",
        price: 2000000,
        sold: 90,
        rating: "4.3"
    },
    {
        name: "Intel® Core™ 10th Gen i7-10700K",
        description: "",
        imageUrl: "https://images.tokopedia.net/img/cache/500-square/product-1/2020/6/17/1489178/1489178_0b76eaa2-b349-4912-b2ad-b06c1e716229_640_640",
        price: 4100000,
        sold: 90,
        rating: "4.3"
    },
    {
        name: "Intel® Core™ 9th Gen i3-13100F",
        description: "",
        imageUrl: "https://blossomzones.com/wp-content/uploads/2022/12/13100.jpg",
        price: 1700000,
        sold: 80,
        rating: "4.0"
    },
    {
        name: "Intel® Core™ 7th Gen i7-7700K",
        description: "",
        imageUrl: "https://images.tokopedia.net/img/cache/500-square/VqbcmM/2023/7/14/24e361a4-40ef-49e1-a374-935fe9a318cb.jpg",
        price: 2200000,
        sold: 80,
        rating: "4.0",
    }
];

export type { Product };

export {dummyProducts};
