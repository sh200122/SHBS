import React from 'react'
import { Button, Input, Text, Label, Textarea } from '@tarojs/components'
import Taro from '@tarojs/taro'
type Props = {}

export default function add({}: Props) {
  const handleSave = () => {
    Taro.navigateTo({
      url: '/pages/products/index'
    })
  }
  const handleCancel = () => {
    Taro.navigateTo({
      url: '/pages/products/index'
    })
  }
  return (
    <view className='w-screen h-screen bg-[#e8e8e8] flex items-center justify-center'>
        <view className='w-full h-[80%] bg-white flex flex-col items-center justify-center gap-y-5 px-5'>
          <Text className='text-2xl font-bold'>添加闲置</Text>
          <Label className='w-full h-[50px]'>商品</Label>
          <Input className='w-full h-[50px] border-solid border-[1px] p-2 border-gray-300' placeholder='请输入商品'/>
          <Label className='w-full h-[50px]'>描述</Label>
          <Textarea className='w-full h-[100px] border-solid border-[1px] p-2 border-gray-300' placeholder='请输入描述...' />
          <Label className='w-full h-[50px]'>价格</Label>
          <Input className='w-full h-[50px] border-solid border-[1px] p-2 border-gray-300' placeholder='请输入价格' />
          <Button className='w-full bg-[#fbb713] text-white h-[6%]' hoverClass='bg-[#a3770c]' onClick={handleSave}>保存</Button>
          <Button className='w-full bg-red-500 text-white h-[6%] ' hoverClass='bg-red-600' onClick={handleCancel}>取消</Button>
        </view>
    </view>
  )
}