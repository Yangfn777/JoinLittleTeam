# Joinlittleteam
一体化实践2

# 数据库设计
一体化数据库设计

### 表1 t_user

|名称|name|类型|描述|
|--|--|--|--|
|id|id|number|用来唯一标识用户的字段|
|用户名|username|String|用户的昵称|
|性别|gender|String||


### 表2 t_question
|名称|name|类型|描述|
|--|--|--|--|
|id|id|number|题目的唯一标识段|
|题目|desc|String|题目的具体内容|
|类型|type|number|题目的类型 1单选题 2判断题 3多选题 4主观题（包括上传文件图片等）|
|答案|answer|String|选择题的答案（多选为字母空格字母）|
|作者|author|String|作者|
|分类|kind|String|题目类型（有math，chinese，english，coding等）|

1，按照题目类型查询题目

2，按照登陆人的名字查询所有的试卷

3，先1然后再按照题目的分类查询题目

4，修改答案

5，批量删除

6，规定生成试卷或者随机生成试卷，前者自己挑选题目并且设计试卷，后者选择类型即可
> 未解决问题


### 表3 t_paper
|名称|name|类型|描述|
|--|--|--|--|
|出卷人|id_author|number|出卷人的id|
|试卷的标识|id_paper|number|对应试卷的id|
|||||

### 表4-n t_paper
|名称|name|类型|描述|
|--|--|--|--|
|id|id|number|题号|
|问题id|question_id|number|问题描述|
|分值|score|number||~~~~