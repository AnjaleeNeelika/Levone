package com.ecommerceapp.backend.mapper;

import com.ecommerceapp.backend.dto.ProductDto;
import com.ecommerceapp.backend.dto.ProductResourceDto;
import com.ecommerceapp.backend.dto.ProductVariantDto;
import com.ecommerceapp.backend.entities.*;
import com.ecommerceapp.backend.services.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.List;
import java.util.UUID;
import java.util.stream.Collectors;

@Component
public class ProductMapper {

    @Autowired
    private CategoryService categoryService;

    public Product mapToProductEntity(ProductDto productDto) {
        Product product = new Product();

        if(null != productDto.getId()){
            product.setId(productDto.getId());
        }

        product.setName(productDto.getName());
        product.setDescription(productDto.getDescription());
        product.setBrand(productDto.getBrand());
        product.setNewArrival(productDto.isNewArrival());
        product.setPrice(productDto.getPrice());
        product.setRating(productDto.getRating());
        product.setSlug(productDto.getSlug());

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

        return product;
    }

    private List<Resources> mapToProductResources(List<ProductResourceDto> productResources, Product product) {
        return  productResources.stream().map(productResourceDto -> {
            Resources resources = new Resources();

            if(null != productResourceDto.getId()){
                resources.setId(productResourceDto.getId());
            }

            resources.setName(productResourceDto.getName());
            resources.setType(productResourceDto.getType());
            resources.setUrl(productResourceDto.getUrl());
            resources.setIsPrimary(productResourceDto.getIsPrimary());
            resources.setProduct(product);

            return resources;
        }).collect(Collectors.toList());
    }

    private List<ProductVariant> mapToProductVariant(List<ProductVariantDto> productVariantDtos, Product product) {
        return productVariantDtos.stream().map(productVariantDto -> {
            ProductVariant productVariant = new ProductVariant();

            if(null != productVariantDto.getId()){
                productVariant.setId(productVariantDto.getId());
            }

            productVariant.setColor(productVariantDto.getColor());
            productVariant.setSize(productVariantDto.getSize());
            productVariant.setStockQuantity(productVariantDto.getStockQuantity());
            productVariant.setProduct(product);

            return productVariant;
        }).collect(Collectors.toList());
    }

    public List<ProductDto> getProductDtos(List<Product> products) {
        return products.stream().map(this::mapProductToDto).toList();
    }

    public ProductDto mapProductToDto(Product product) {
        return ProductDto.builder()
                .id(product.getId())
                .brand(product.getBrand())
                .name(product.getName())
                .price(product.getPrice())
                .isNewArrival(product.isNewArrival())
                .rating(product.getRating())
                .description(product.getDescription())
                .slug(product.getSlug())
                .categoryId(product.getCategory() != null ? product.getCategory().getId() : null)
                .categoryName(product.getCategory() != null ? product.getCategory().getName() : null) // Map category name
                .categoryTypeId(product.getCategoryType() != null ? product.getCategoryType().getId() : null)
                .categoryTypeName(product.getCategoryType() != null ? product.getCategoryType().getName() : null) // Map category type name
                .thumbnail(getProductThumbnail(product.getResources()))
                .variants(product.getProductVariants() != null ? mapProductVariantListToDto(product.getProductVariants()) : null)
                .productResources(product.getResources() != null ? mapProductResourcesListDto(product.getResources()) : null)
                .build();
    }

    private String getProductThumbnail(List<Resources> resources) {
        return resources.stream().filter(Resources::getIsPrimary).findFirst().orElse(null).getUrl();
    }

    public List<ProductVariantDto> mapProductVariantListToDto(List<ProductVariant> productVariants) {
        return productVariants.stream().map(this::mapProductVariantDto).toList();
    }

    private ProductVariantDto mapProductVariantDto(ProductVariant productVariant) {
        return ProductVariantDto.builder()
                .color(productVariant.getColor())
                .id(productVariant.getId())
                .size(productVariant.getSize())
                .stockQuantity(productVariant.getStockQuantity())
                .build();
    }

    public List<ProductResourceDto> mapProductResourcesListDto(List<Resources> resources) {
        return resources.stream().map(this::mapResourcesToDto).toList();
    }

    private ProductResourceDto mapResourcesToDto(Resources resources) {
        return ProductResourceDto.builder()
                .id(resources.getId())
                .url(resources.getUrl())
                .name(resources.getName())
                .type(resources.getType())
                .isPrimary(resources.getIsPrimary())
                .build();
    }
}
