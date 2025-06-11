import * as yup from 'yup';

export const productSchema = yup.object().shape({
    name: yup.string()
        .min(3, "Product name must be at least 3 characters")
        .required("Product name is required"),
    description: yup.string()
        .min(10, "Description must be at least 10 characters")
        .required("Description is required"),
    price: yup.number()
        .typeError("Price must be a valid number")
        .positive("Price must be greater than 0")
        .required("Price is required"),
    category: yup.string()
        .min(2, "Category must be at least 2 characters")
        .required("Category is required"),
    image: yup.string()
        .url("Please enter a valid URL")
        .required("Image URL is required"),
    colors: yup.string()
        .min(2, "Please add at least one color")
        .required("Colors are required"),
    sizes: yup.string()
        .min(1, "Please add at least one size")
        .required("Sizes are required"),
    featured: yup.boolean().default(false),
    new: yup.boolean().default(false),
});