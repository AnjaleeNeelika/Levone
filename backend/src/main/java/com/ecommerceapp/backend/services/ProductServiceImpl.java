package com.ecommerceapp.backend.services;

import com.ecommerceapp.backend.dto.ProductDto;
import com.ecommerceapp.backend.entities.Category;
import com.ecommerceapp.backend.entities.CategoryType;
import com.ecommerceapp.backend.entities.Product;
import com.ecommerceapp.backend.repositories.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;

@Service
public class ProductServiceImpl implements ProductService {

    @Autowired
    private ProductRepository productRepository;

    @Autowired
    private CategoryService categoryService;

    @Override
    public Product addProduct(ProductDto productDto) {

        Product product = mapToProductEntity(productDto);
        return productRepository.save(product);
    }

    @Override
    public List<Product> getAllProducts() {
        List<Product> products = productRepository.findAll();
        // Mapping products into productsDto
        return products;
    }

    private Product mapToProductEntity(ProductDto productDto) {
        Product product = new Product();
        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setBrand(productDto.getBrand());
        product.setNewArrival(productDto.isNewArrival());
        product.setPrice(productDto.getPrice());

        Category category = categoryService.getCategoryById(productDto.getCategoryId());

        if (category != null) {
            product.setCategory(category);
            UUID categoryTypeId = productDto.getCategoryTypeId();
            CategoryType categoryType = category.getCategoryTypeList().stream().filter(categoryType1 -> categoryType1.getId().equals(categoryTypeId)).findFirst().orElse(null);
        }

        return product;
    }
}
