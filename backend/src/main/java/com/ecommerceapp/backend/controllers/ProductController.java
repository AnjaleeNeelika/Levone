package com.ecommerceapp.backend.controllers;

import com.ecommerceapp.backend.dto.ProductDto;
import com.ecommerceapp.backend.entities.Product;
import com.ecommerceapp.backend.services.ProductService;
import org.apache.catalina.util.StringUtil;
import org.apache.commons.lang3.StringUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/product")
@CrossOrigin
public class ProductController {

    private ProductService productService;

    @Autowired
    public ProductController(ProductService productService) {
        this.productService = productService;
    }

    // GET ALL PRODUCTS
    @GetMapping
    public ResponseEntity<List<ProductDto>> getAllProducts(@RequestParam(required = false, name = "categoryId", value = "categoryId") UUID categoryId, @RequestParam(required = false, name = "categoryTypeId", value = "categoryTypeId") UUID categoryTypeId, @RequestParam(required = false) String slug) {
        List<ProductDto> productList = new ArrayList<>();

        if (StringUtils.isNotBlank(slug)) {
            ProductDto productDto = productService.getProductBySlug(slug);
            productList.add(productDto);
        } else {
            productList = productService.getAllProducts(categoryId, categoryTypeId);
        }

        productList = productService.getAllProducts(categoryId, categoryTypeId);
        return new ResponseEntity<>(productList, HttpStatus.OK);
    }

    // GET A PRODUCT BY ID
    @GetMapping("/{id}")
    public ResponseEntity<ProductDto> getProductById(@PathVariable UUID id) {
        ProductDto productDto = productService.getProductById(id);

        return new ResponseEntity<>(productDto, HttpStatus.OK);
    }


    // CREATE A NEW PRODUCT
    @PostMapping
    public ResponseEntity<Product> createProduct(@RequestBody ProductDto productDto) {
        Product product = productService.addProduct(productDto);
        return new ResponseEntity<>(product, HttpStatus.CREATED);
    }

    // UPDATE AN EXISTING PRODUCT
    @PutMapping
    public ResponseEntity<Product> updateProduct(@RequestBody ProductDto productDto) {
        Product product = productService.updateProduct(productDto);
        return new ResponseEntity<>(product, HttpStatus.OK);
    }
}
