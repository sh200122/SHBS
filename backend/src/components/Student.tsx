import { View, Text, Form, Input, Button } from '@tarojs/components'
import Taro from '@tarojs/taro';
import { useEffect, useState } from 'react'

export default function StudentForm() {
    const [students, setStudents] = useState<{ _id: string; name: string; email: string }[]>([]);
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    useEffect(() => {
        fetchStudents();
    }, []);

    // 获取学生数据
    const fetchStudents = async () => {
        try {
            const res = await Taro.request({
                url: 'http://localhost:5000/api/students',
                method: 'GET'
            });
            setStudents(res.data);
        } catch (error) {
            console.error('Error:', error);
        }
    };

    // 提交表单
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        try {
            await Taro.request({
                url: 'http://localhost:5000/api/students',
                method: 'POST',
                data: formData
            });
            // 清空表单
            setFormData({
                name: '',
                email: '',
                password: '',
            });
            fetchStudents(); // 重新获取数据
        } catch (error) {
            console.error('Error:', error);
        }
    };

    return (
        <View className='flex flex-col items-center justify-start p-4'>
            <Text className='text-2xl font-bold mb-4'>Student Form</Text>
            <Form className='flex flex-col gap-4' onSubmit={handleSubmit}>
                {/* 姓名输入框 */}
                <View className='flex flex-col gap-2'>
                    <Text className='text-sm font-medium'>Name</Text>
                    <Input
                        type="text"
                        name="name"
                        value={formData.name}
                        onInput={(e) => setFormData({ ...formData, name: e.detail.value })}
                        className='border border-gray-300 rounded-md p-2'
                        placeholder='请输入姓名'
                    />
                </View>

                {/* 邮箱输入框 */}
                <View className='flex flex-col gap-2'>
                    <Text className='text-sm font-medium'>Email</Text>
                    <Input
                        type="text"
                        name="email"
                        value={formData.email}
                        onInput={(e) => setFormData({ ...formData, email: e.detail.value })}
                        className='border border-gray-300 rounded-md p-2'
                        placeholder='请输入邮箱'
                    />
                </View>

                {/* 密码输入框 */}
                <View className='flex flex-col gap-2'>
                    <Text className='text-sm font-medium'>Password</Text>
                    <Input
                        type="text"
                        name="password"
                        value={formData.password}
                        onInput={(e) => setFormData({ ...formData, password: e.detail.value })}
                        className='border border-gray-300 rounded-md p-2'
                        placeholder='请输入密码'
                    />
                </View>

                {/* 提交按钮 */}
                <Button formType="submit" className='bg-blue-500 text-white rounded-md p-2'>
                    Submit
                </Button>
            </Form>

            {/* 显示学生列表 */}
            <View className='mt-6 w-full max-w-md'>
                <Text className='text-lg font-bold mb-2'>Students List</Text>
                <View className='flex flex-col gap-2'>
                    {students.map((student) => (
                        <View key={student._id} className='border p-2 rounded-md '>
                            <Text className='font-medium'>{student.name}</Text>
                            <Text className='text-gray-500'>{student.email}</Text>
                        </View>
                    ))}
                </View>
            </View>
        </View>
    );
}
