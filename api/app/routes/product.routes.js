const controller = require("../controllers/product.controller");
const multer = require('multer');
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'uploads/products'); 
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + '-' + file.originalname); // Tạo tên tệp duy nhất bằng cách kết hợp thời gian và tên gốc của tệp
  }
});
const upload = multer({ 
  storage: storage,
  dest: 'uploads/' ,  
  // storage: multer.memoryStorage(), // Lưu trữ dữ liệu đính kèm trong bộ nhớ
  // limits: {
  //   fileSize: 2 * 1024 * 1024 // Giới hạn kích thước tệp tin đính kèm (ví dụ: 5MB)
  // }
});
module.exports = function(app) {
  app.use(function(req, res, next) {
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, Content-Type, Accept"
    );
    next();
  });
  app.post("/api/product/post", upload.single('image'), controller.post);

  app.get("/api/product/getAll", controller.getAll);

  // app.get("/api/auth/getAll", controller.get);
};