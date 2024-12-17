package com.ecommerceapp.backend.services;

import com.ecommerceapp.backend.dto.CategoryDto;
import com.ecommerceapp.backend.dto.CategoryTypeDto;
import com.ecommerceapp.backend.entities.Category;
import com.ecommerceapp.backend.entities.CategoryType;
import com.ecommerceapp.backend.exceptions.ResourceNotFoundEx;
import com.ecommerceapp.backend.repositories.CategoryRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.*;
import java.util.stream.Collectors;

@Service
public class CategoryService {

    @Autowired
    private CategoryRepository categoryRepository;

    // GET CATEGORY BY ID
    public Category getCategoryById(UUID categoryId) {
        Optional<Category> category = categoryRepository.findById(categoryId);
        return category.orElse(null);
    }

    // CREATE A NEW CATEGORY
    public Category createCategory(CategoryDto categoryDto) {
//        Optional<Category> existingCategory = categoryRepository.findByCodeOrName(categoryDto.getCode(), categoryDto.getName());
//
//        if (existingCategory.isPresent()) {
//            throw new IllegalArgumentException("Category with the same code or name already exists.");
//        }

        Category category = mapToEntity(categoryDto);
        return categoryRepository.save(category);
    }

    private Category mapToEntity(CategoryDto categoryDto) {
        Category category = Category.builder()
                .code(categoryDto.getCode())
                .name(categoryDto.getName())
                .description(categoryDto.getDescription())
                .build();

        if(categoryDto.getCategoryTypeList() != null) {
            List<CategoryType> categoryTypes = mapToCategoryTypesList(categoryDto.getCategoryTypeList(), category);
            category.setCategoryTypeList(categoryTypes);
        }

        return category;
    }

    private List<CategoryType> mapToCategoryTypesList(List<CategoryTypeDto> categoryTypeList, Category category) {
//        return categoryTypeList.stream().map(categoryTypeDto -> {
//            CategoryType categoryType = new CategoryType();
//            categoryType.setCode(categoryTypeDto.getCode());
//            categoryType.setName(categoryTypeDto.getName());
//            categoryType.setDescription(categoryTypeDto.getDescription());
//            categoryType.setCategory(category);
//            return categoryType;
//        }).collect(Collectors.toList());

        return categoryTypeList.stream().map(categoryTypeDto -> {
            CategoryType categoryType = CategoryType.builder()
                    .code(categoryTypeDto.getCode())
                    .name(categoryTypeDto.getName())
                    .description(categoryTypeDto.getDescription())
                    .category(category)
                    .build();
            return categoryType;
        }).collect(Collectors.toList());
    }

    // GET ALL CATEGORY TYPES
    public List<Category> getAllCategory() {
        return categoryRepository.findAll();
    }

    // UPDATE CATEGORY DETAILS BY ID
    public Category updateCategory(CategoryDto categoryDto) {
//        Optional<Category> existingCategory = categoryRepository.findByCodeOrName(categoryDto.getCode(), categoryDto.getName());
//        if (existingCategory.isPresent() && !existingCategory.get().getId().equals(categoryDto.getId())) {
//            throw new IllegalArgumentException("Category with the same code or name already exists.");
//        }

        Category category = categoryRepository.findById(categoryDto.getId())
                .orElseThrow(() -> new ResourceNotFoundEx("Category not found with Id " + categoryDto.getId()));

        if (categoryDto.getName() != null) {
            category.setName(categoryDto.getName());
        }

        if (categoryDto.getCode() != null) {
            category.setCode(categoryDto.getCode());
        }

        if (categoryDto.getDescription() != null) {
            category.setDescription(categoryDto.getDescription());
        }

        if (categoryDto.getCategoryTypeList() != null) {
            List<CategoryType> list = mapToCategoryTypesList(categoryDto.getCategoryTypeList(), category);
            category.setCategoryTypeList(list);
        }

        return categoryRepository.save(category);
    }

    // DELETE A CATEGORY
    public void deleteCategory(UUID categoryId) {
        categoryRepository.deleteById(categoryId);
    }
}
