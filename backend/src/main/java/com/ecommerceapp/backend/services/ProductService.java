package com.ecommerceapp.backend.services;

import com.ecommerceapp.backend.dto.ProductDto;
import com.ecommerceapp.backend.entities.Product;

import java.util.List;

public interface ProductService {

    public Product addProduct(ProductDto product);
    public List<Product> getAllProducts();
}
