import { products } from "./data.js";
import fs from 'fs';

const slugify = (text) => {
    return text.toString().toLowerCase().trim()
        .replace(/&/g, '-and-')         // Replace & with 'and'
        .replace(/[\s\W-]+/g, '-')      // Replace spaces, non-word characters and dashes with a single dash (-)
        .replace(/-$/, '');             // Remove last trailing dash if exists
}

for (let product of products) {
    product.slug = slugify(product.title);
}

fs.writeFile('products_with_slugs.json', JSON.stringify(products, null, 2), (err) => {
    if (err) {
        console.error('Error writing file:', err);
    } else {
        console.log('File has been written successfully');
    }
});
