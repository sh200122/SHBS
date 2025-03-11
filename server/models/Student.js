/*
 * @Author: alan alan.shi@duomai.com
 * @Date: 2025-03-06 15:04:42
 * @LastEditors: alan alan.shi@duomai.com
 * @LastEditTime: 2025-03-06 15:13:41
 * @FilePath: \next-example\server\models\Student.js
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import mongoose from "mongoose";

const studentSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
});

// 创建模型
const Student = mongoose.model("Student", studentSchema);

export default Student;
