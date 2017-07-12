set -e
echo "Enter the new chapter title: "
read CHAPTER

mkdir $CHAPTER
echo -e "## 任务说明\n\n### 程序输入\n\n### 程序输出" > "$CHAPTER/README.md"
mkdir "$CHAPTER/solutions"
touch "$CHAPTER/solutions/.gitkeep"

echo "Create the new chapter successfully!"
