package com.crud.service;

import com.crud.entity.Product;
import com.crud.repository.ProductRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class ProductServiceImpl implements ProductService{
    @Autowired
    private ProductRepository repository;

    @Override
    public List<Product> getAllProducts() {
        return repository.findAll();
    }

    @Override
    public Product saveProduct(Product product) {
        return repository.save(product);
    }

    @Override
    public void deleteProduct(int productId) {
        repository.deleteById(productId);
    }

    @Override
    public Product updateProduct(int productId, Product product) {
        Product product1 = repository.findById(productId).orElseThrow(() -> new RuntimeException("Product not found"));
        product1.setProductName(product.getProductName());
        product1.setProductCost(product.getProductCost());
        product1.setProductDescription(product.getProductDescription());
        product1.setVendor(product.getVendor());
        return repository.save(product1);
    }
}
