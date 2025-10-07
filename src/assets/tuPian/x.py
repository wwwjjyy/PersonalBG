import os

def rename_images(custom_prefix):
    # 定义常见的图片文件扩展名
    image_extensions = ('.jpg', '.jpeg', '.png', '.gif', '.bmp', '.tiff', '.webp')
    
    # 获取当前目录下所有文件，并筛选出图片文件
    files = [f for f in os.listdir('.') if os.path.isfile(f) and f.lower().endswith(image_extensions)]
    
    if not files:
        print("当前目录下没有找到图片文件")
        return
    
    files.sort(key=lambda x: os.path.getctime(x))

    # 重命名文件
    renamed_count = 0
    for i, filename in enumerate(files, 1):
        # 获取文件扩展名
        ext = os.path.splitext(filename)[1].lower()
        
        # 构建新文件名
        new_filename = f"{custom_prefix}_{i}{ext}"
        
        # 避免重名
        counter = 1
        while os.path.exists(new_filename):
            new_filename = f"{custom_prefix}_{i}_{counter}{ext}"
            counter += 1
        
        # 执行重命名
        os.rename(filename, new_filename)
        print(f"已重命名: {filename} -> {new_filename}")
        renamed_count += 1
    
    print(f"\n重命名完成，共处理 {renamed_count} 个图片文件")

if __name__ == "__main__":
    # 获取用户自定义的名称前缀
    prefix = input("请输入自定义的名称前缀: ")
    
    # 确保前缀不为空
    if not prefix.strip():
        prefix = "image"
        print(f"未输入前缀，将使用默认前缀: {prefix}")
    
    # 执行重命名
    rename_images(prefix)
    