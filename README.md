# Windows: Mở Command Prompt
# Mac/Linux: Mở Terminal

# Di chuyển vào folder source
cd [đường dẫn tới folder koi-task-manager-fixed]

# Khởi tạo git
git init
git add .
git commit -m "Init KOI Task Manager with custom auth"

# Add remote (thay YOUR_USERNAME + REPO_NAME)
git remote add origin https://github.com/YOUR_USERNAME/koi-task-manager.git

# Push code lên GitHub (branch main)
git branch -M main
git push -u origin main
