package com.crud.controller;

import com.crud.entity.Product;
import com.crud.service.ProductService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("/api/v1/product")
@CrossOrigin(origins="*")
public class ProductController {

    @Autowired
    private ProductService service;

    @GetMapping("/getAll")
    public ResponseEntity<List<Product>> getAllProducts(){
        List<Product> allProducts = service.getAllProducts();
        return new ResponseEntity<>(allProducts, HttpStatus.OK);
    }

    @PostMapping("/save")
    public ResponseEntity<Product> saveProduct(@RequestBody Product product){
        Product product1 = service.saveProduct(product);
        return new ResponseEntity<>(product1,HttpStatus.CREATED);
    }

    @DeleteMapping("/remove/{productId}")
    public ResponseEntity<Map<Integer,String>> deleteProduct(@PathVariable int productId){
        Map<Integer,String> map=new HashMap<>();
        map.put(productId,"Deleted");
        service.deleteProduct(productId);
        return new ResponseEntity<>(map,HttpStatus.OK);
    }


    @PutMapping("/update/{productId}")
    public ResponseEntity<Product> update(@PathVariable int productId,@RequestBody Product product){
        Product product1 = service.updateProduct(productId, product);
        return new ResponseEntity<>(product1,HttpStatus.CREATED);

    }
}
