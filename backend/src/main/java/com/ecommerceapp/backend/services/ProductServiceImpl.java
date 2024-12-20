package com.ecommerceapp.backend.services;

import com.ecommerceapp.backend.dto.ProductDto;
import com.ecommerceapp.backend.dto.ProductResourceDto;
import com.ecommerceapp.backend.entities.*;
import com.ecommerceapp.backend.repositories.ProductRepository;
import com.ecommerceapp.backend.specification.ProductSpecification;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

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
    public List<Product> getAllProducts(UUID categoryId, UUID categoryTypeId) {
        Specification<Product> productSpecification = Specification.where(null);

        if (categoryId != null) {
            productSpecification = productSpecification.and(ProductSpecification.hasCategoryId(categoryId));
        }

        if (categoryTypeId != null) {
            productSpecification = productSpecification.and(ProductSpecification.hasCategoryTypeId(categoryTypeId));
        }

        List<Product> products = productRepository.findAll(productSpecification);
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
        product.setRating(productDto.getRating());

        Category category = categoryService.getCategoryById(productDto.getCategoryId());

        if (category != null) {
            product.setCategory(category);
            UUID categoryTypeId = productDto.getCategoryTypeId();

            CategoryType categoryType = category.getCategoryTypeList().stream().filter(categoryType1 -> categoryType1.getId().equals(categoryTypeId)).findFirst().orElse(null);
            product.setCategoryType(categoryType);
        }

        if (productDto.getVariants() != null) {
            product.setProductVariants(mapToProductVariant(productDto.getVariants(), product));
        }

        if (productDto.getProductResources() != null) {
            product.setResources(mapToProductResources(productDto.getProductResources(), product));
        }

        return productRepository.save(product);
    }

    private List<Resources> mapToProductResources(List<ProductResourceDto> productResources, Product product) {
        return  productResources.stream().map(productResourceDto -> {
            Resources resources = new Resources();
            resources.setName(productResourceDto.getName());
            resources.setType(productResourceDto.getType());
            resources.setUrl(productResourceDto.getUrl());
            resources.setIsPrimary(productResourceDto.getIsPrimary());
            resources.setProduct(product);

            return resources;
        }).collect(Collectors.toList());
    }

    private List<ProductVariant> mapToProductVariant(List<ProductVariant> productVariantDtos, Product product) {
        return productVariantDtos.stream().map(productVariantDto -> {
            ProductVariant productVariant = new ProductVariant();
            productVariant.setColor(productVariantDto.getColor());
            productVariant.setSize(productVariantDto.getSize());
            productVariant.setStockQuantity(productVariantDto.getStockQuantity());
            productVariant.setProduct(product);

            return productVariant;
        }).collect(Collectors.toList());
    }
}
