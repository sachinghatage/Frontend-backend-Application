package com.crud.service;

import com.crud.entity.Product;

import java.util.List;

public interface ProductService {
    List<Product> getAllProducts();
    Product saveProduct(Product product);
    void deleteProduct(int productId);
    Product updateProduct(int productId,Product product);
}
