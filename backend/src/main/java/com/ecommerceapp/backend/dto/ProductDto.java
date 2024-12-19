package com.ecommerceapp.backend.dto;

import com.ecommerceapp.backend.entities.Category;
import com.ecommerceapp.backend.entities.CategoryType;
import com.ecommerceapp.backend.entities.ProductVariant;
import com.ecommerceapp.backend.entities.Resources;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.math.BigDecimal;
import java.util.List;
import java.util.UUID;

@Data
@NoArgsConstructor
@AllArgsConstructor
@Builder
public class ProductDto {
    private UUID id;
    private String name;
    private String description;
    private BigDecimal price;
    private String brand;
    private Float rating;
    private boolean isNewArrival;
    private UUID categoryId;
    private UUID categoryTypeId;
    private List<ProductVariant> variants;
    private List<ProductResourceDto> productResources;
}
