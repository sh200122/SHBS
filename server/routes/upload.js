import express from 'express';
import multer from 'multer';
import path from 'path';

const router = express.Router();

// 配置multer存储
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads/') // 确保这个目录存在
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + path.extname(file.originalname))
  }
});

const upload = multer({ storage: storage });

// 处理单个文件上传
router.post('/', upload.single('file'), (req, res) => {
  try {
    if (!req.file) {
      throw new Error('没有上传文件');
    }
    // 返回文件访问路径
    res.json({
      url: `/uploads/${req.file.filename}`
    });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

export default router;