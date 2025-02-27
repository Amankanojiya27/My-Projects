import { ProductModel } from "../models/products.model.js";

///====>>>>> Create Section <<<<<<=====\\\\

//Add Single Products
export async function AddSingleProductController(req, res) {
  try {
    const { name, category, price, mrp, stock, sku, description } = req.body;
    if (!name || !category || !price || !mrp || !stock || !sku) {
      return res.status(400).json({
        error: "Missing required fields",
        message: "Please provide all required details",
        data: null,
      });
    }

    // Check if a product with the same name or SKU already exists
    const existingProduct = await ProductModel.findOne({ name });

    if (existingProduct) {
      return res.status(400).json({
        error: "Product already exists",
        message: "A product with the same name or SKU already exists",
        data: null,
      });
    }

    // Create new product if no duplicate is found
    const product = new ProductModel({
      name,
      category,
      price,
      mrp,
      stock,
      sku,
      rating: 0,
      description,
    });

    const data = await product.save();

    res.status(201).json({
      error: null,
      message: "Product added successfully!",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      error: error.message,
      message: "Failed to add product",
      data: null,
    });
  }
}

// add multi produts
export async function AddMultiProductController(req, res) {
  try {
    const body = req.body;
    if (!Array.isArray(body) || body.length === 0)
      return res.status(400).json({
        error: "Invalid input",
        message: "Product list is required",
        data: null,
      });

    const dataMulti = await ProductModel.insertMany(body);

    return res.status(201).json({
      message: "Products added successfully",
      dataMulti,
    });
  } catch (error) {
    return res.status(500).json({
      error: "Internal Server Error",
      message: error.message,
      data: null,
    });
  }
}

///====>>>>> Read Section <<<<<<=====\\\\

export async function getAllProduct(req, res) {
  try {
    const getProduct = await ProductModel.find().lean();
    res.json(getProduct);
  } catch (error) {
    res.status(500).json({
      message: "Products not found !",
    });
  }
}

export async function getOneProduct(req, res) {
  try {
    const { id } = req.params;
    const findProduct = await ProductModel.findOne({ _id: id });

    if (!findProduct) {
      return res.status(404).json({
        message: "Product Not Found",
      });
    }

    return res.status(200).json({
      message: "Product Fetched Successfully",
      findProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to Find Product",
      error: error.message,
    });
  }
}

///====>>>>> UpDate Section <<<<<<=====\\\\

export async function updateProduct(req, res) {
  const { id } = req.params;
  try {
    const { name, category, price, mrp, stock, sku, description } = req.body;

    const data = await ProductModel.findOneAndUpdate(
      { _id: id },
      { name, category, price, mrp, stock, sku, description },
      { new: true }
    );
    if (!data) {
      return res.status(404).json({
        message: "Product not Updated",
        data,
      });
    }
    return res.status(200).json({
      message: "Product Successfully Update",
      data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to Find Product",
      error: error.message,
    });
  }
}

///====>>>>> Delete Section <<<<<<=====\\\\

export async function deleteProduct(req, res) {
  try {
    const { id } = req.params;

    const deleteProduct = await ProductModel.findOneAndDelete({ _id: id });

    if (!deleteProduct) {
      return res.status(404).json({
        message: "Product not Deleted",
      });
    }
    return res.status(200).json({
      message: "Product Successfully Deleted",
      deleteProduct,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Failed to Deleted Product",
      error: error.message,
    });
  }
}
