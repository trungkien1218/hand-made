// src/app/services/products.service.js

// Khai báo hàm lấy danh sách sản phẩm
async function getProducts() {
    // Lấy danh sách sản phẩm từ API dummyjson
    const res = await fetch('https://dummyjson.com/products')
  
    // Kiểm tra kết quả request
    if (!res.ok) {
      // Ném ra lỗi, lỗi sẽ được bắt và hiển thị bởi error.js gần nhất
      throw new Error('Failed to fetch data')
    }
  
    // Trả về kết quả
    return res.json()
  }
  

  export const getProductById = async ({
    id,
  }: Get
  
  )