package com.ecommerceapp.backend.services;

import com.ecommerceapp.backend.dto.ProductDto;
import com.ecommerceapp.backend.entities.Product;

import java.util.List;
import java.util.UUID;

public interface ProductService {

    public Product addProduct(ProductDto product);
    public List<ProductDto> getAllProducts(UUID categoryId, UUID categoryTypeId);

    ProductDto getProductBySlug(String slug);

    ProductDto getProductById(UUID id);

    Product updateProduct(ProductDto productDto);
}
