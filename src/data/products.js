export const products = [
    {
        id: "1",
        name: "Minimal Oversize T-shirt",
        description: "Premium cotton oversize t-shirt with a minimalist design. Perfect for everyday wear with a modern touch.",
        price: 59.99,
        category: "t-shirts",
        image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2574&auto=format&fit=crop",
        featuredImage: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?q=80&w=2574&auto=format&fit=crop",
        colors: ["Black", "White", "Gray"],
        sizes: ["S", "M", "L", "XL"],
        featured: true,
        new: true
    },
    {
        id: "2",
        name: "Essential Hoodie",
        description: "Soft, comfortable hoodie made from premium materials. Features a relaxed fit and minimalist design.",
        price: 89.99,
        category: "hoodies",
        image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?q=80&w=2787&auto=format&fit=crop",
        colors: ["Black", "Gray", "Cream"],
        sizes: ["S", "M", "L", "XL", "XXL"],
        featured: true
    },
    {
        id: "3",
        name: "Classic Denim Jacket",
        description: "Timeless denim jacket with a modern cut. High-quality materials ensure durability and comfort.",
        price: 149.99,
        category: "jackets",
        image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?q=80&w=2787&auto=format&fit=crop",
        colors: ["Blue", "Black", "Light Wash"],
        sizes: ["XS", "S", "M", "L", "XL"],
        new: true
    },
    {
        id: "4",
        name: "Relaxed Fit Pants",
        description: "Contemporary relaxed fit pants with a subtle taper. Made from premium cotton blend.",
        price: 119.99,
        category: "pants",
        image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&w=2787&auto=format&fit=crop",
        colors: ["Black", "Beige", "Navy"],
        sizes: ["28", "30", "32", "34", "36"]
    },
    {
        id: "5",
        name: "Minimal Polo Shirt",
        description: "Clean-cut polo shirt with a slim fit. Made from high-quality cotton for superior comfort.",
        price: 69.99,
        category: "shirts",
        image: "https://images.unsplash.com/photo-1598033129183-c4f50c736f10?q=80&w=2825&auto=format&fit=crop",
        colors: ["White", "Black", "Navy", "Green"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "6",
        name: "Lightweight Bomber Jacket",
        description: "Modern bomber jacket with a sleek design. Perfect for transitional weather.",
        price: 159.99,
        category: "jackets",
        image: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2736&auto=format&fit=crop",
        featuredImage: "https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&w=2736&auto=format&fit=crop",
        colors: ["Black", "Olive", "Navy"],
        sizes: ["S", "M", "L", "XL"],
        featured: true
    },
    {
        id: "7",
        name: "Premium Wool Sweater",
        description: "Luxurious wool blend sweater with a clean, minimalist design. Keeps you warm without sacrificing style.",
        price: 129.99,
        category: "sweaters",
        image: "https://images.unsplash.com/photo-1604644401890-0bd678c83788?q=80&w=2940&auto=format&fit=crop",
        colors: ["Gray", "Cream", "Navy"],
        sizes: ["S", "M", "L", "XL"]
    },
    {
        id: "8",
        name: "Tailored Slim Shirt",
        description: "Crisp, tailored shirt with a modern slim fit. Perfect for both casual and formal occasions.",
        price: 79.99,
        category: "shirts",
        image: "https://images.unsplash.com/photo-1603252109303-2751441dd157?q=80&w=2787&auto=format&fit=crop",
        colors: ["White", "Light Blue", "Black", "Striped"],
        sizes: ["S", "M", "L", "XL"]
    }
];

export function getProductById(id) {
    return products.find(product => product.id === id);
}

export function getFeaturedProducts() {
    return products.filter(product => product.featured);
}

export function getNewProducts() {
    return products.filter(product => product.new);
}

export function getAllCategories() {
    const categories = new Set(products.map(product => product.category));
    return Array.from(categories);
}

export function getProductsByCategory(category) {
    return products.filter(product => product.category === category);
}