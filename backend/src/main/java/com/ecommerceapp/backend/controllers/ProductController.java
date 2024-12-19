package com.ecommerceapp.backend.controllers;

import com.ecommerceapp.backend.dto.ProductDto;
import com.ecommerceapp.backend.entities.Product;
import com.ecommerceapp.backend.services.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.Collections;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/product")
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // GET ALL PRODUCTS
    @GetMapping
    public ResponseEntity<List<Product>> getAllProducts(@RequestParam(required = false)UUID categoryId, @RequestParam(required = false)UUID categoryTypeId) {
        List<Product> productList = productService.getAllProducts(categoryId, categoryTypeId);
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    // CREATE A NEW PRODUCT
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody ProductDto productDto) {
        Product product = productService.addProduct(productDto);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }
}
