export default {

    name: 'product',
    title: 'Product',
    type: 'document',
    fields: [
        {
            name: 'id',
            title: 'Product ID',
            type: 'number',
            description: 'ID of the product',
        },
        {
            name: 'title',
            title: 'Product Title',
            type: 'string',
            description: 'Name of the product',
        },
        {
            name: 'category',
            title: 'Category',
            type: 'string',
            description: 'Category of the product',
        },
        {
            name: 'slug',
            title: 'Slug',
            type: 'slug',
            description: 'Slug for the product',
            options: {
                source: 'title',
                maxLength: 96,
            },
        },
        {
            name: 'description',
            title: 'Description',
            type: 'text',
            description: 'Description of the product',
        },
        {
            name: 'price',
            title: 'Price',
            type: 'number',
            description: 'Price of the product',
        },
        {
            name: 'image',
            title: 'Image',
            type: 'array',
            of: [{ type: 'image' }],
            description: 'Image of the product',
            options: {
                hotspot: true,
            },
        },
        {
            name: 'manufactured_date',
            title: 'Manufactured Date',
            type: 'date',
            description: 'Manufactured Date of the product',
        },
        {
            name: 'expiry_date',
            title: 'Expiry Date',
            type: 'date',
            description: 'Expiry Date of the product',
        },
        {
            name: 'company',
            title: 'Company',
            type: 'string',
            description: 'Company of the product',
        },
        {
            name: 'supplier_id',
            title: 'Supplier ID',
            type: 'number',
            description: 'ID of the supplier',
        },
        {
            name: 'mrp',
            title: 'MRP',
            type: 'number',
            description: 'MRP of the product',
        }
    ],

}