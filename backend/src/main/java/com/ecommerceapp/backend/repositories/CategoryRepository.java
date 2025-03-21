package com.ecommerceapp.backend.repositories;

import com.ecommerceapp.backend.entities.Category;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.Optional;
import java.util.UUID;

@Repository
public interface CategoryRepository extends JpaRepository<Category, UUID> {
//    @Query("SELECT c FROM Category c WHERE c.code = :code OR c.name = :name")
//    Optional<Category> findByCodeOrName(String code, String name);
}
