import React from 'react'
import {Card,Form,Button,Input,Checkbox,Radio,Select,Switch,DatePicker,TimePicker,Upload,Icon,message, InputNumber} from 'antd'
import moment from 'moment';
const FormItem = Form.Item;
const RadioGroup = Radio.Group;
const Option = Select.Option;
const TextArea = Input.TextArea;

class FormRegister extends React.Component{
  state={}
  
  handleSubmit = ()=>{
    let userInfo = this.props.form.getFieldsValue();
    console.log(JSON.stringify(userInfo))
    message.success(`${userInfo.userName} 恭喜你，您通过本次表单组件学习，当前密码为：${userInfo.userPwd}`)
  }
  
  getBase64 = (img, callback)=>{
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(img);
  }
  
  handleChange = (info) => {
    if (info.file.status === 'uploading') {
      this.setState({ loading: true });
      return;
    }
    if (info.file.status === 'done') {
      // Get this url from response in real world.
      this.getBase64(info.file.originFileObj, imageUrl => this.setState({
        userImg:imageUrl,
        loading: false,
      }));
    }
  }
  render(){
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol:{
        xs:24,
        sm:4
      },
      wrapperCol:{
        xs:24,
        sm:12
      }
    }
    const offsetLayout = {
      wrapperCol:{
        xs:24,
        sm:{
          span:12,
          offset:4
        }
      }
    }
    const rowObject = {
      minRows: 4, maxRows: 6
    }
    return(
      <div>
        <Card title="注册表单">
          <Form layout="horizontal">
            <FormItem label="用户名" {...formItemLayout}>
              {
                getFieldDecorator('userName', {
                  initialValue: '',
                  rules: [
                    {
                      required: true,
                      message: '用户名不能为空'
                    }
                  ]
                })(
                  <Input placeholder="请输入用户名" />
                )
              }
            </FormItem>
            <FormItem label="密码" {...formItemLayout}>
              {
                getFieldDecorator('userPwd', {
                  initialValue: ''
                })(
                  <Input type="password" placeholder="请输入密码" />
                )
              }
            </FormItem>
            <FormItem label="性别" {...formItemLayout}>
              {
                getFieldDecorator('sex', {
                  initialValue: '1'
                })(
                  <RadioGroup>
                    <Radio value="1">男</Radio>
                    <Radio value="2">女</Radio>
                  </RadioGroup>
                )
              }
            </FormItem>
            <FormItem label="年龄" {...formItemLayout}>
              {
                getFieldDecorator('age', {
                  initialValue: 23
                })(
                  <InputNumber  />
                )
              }
            </FormItem>
            <FormItem label="当前状态" {...formItemLayout}>
              {
                getFieldDecorator('state', {
                  initialValue: '2'
                })(
                  <Select>
                    <Option value="1">工地搬砖</Option>
                    <Option value="2">职业写手</Option>
                    <Option value="3">技术大佬</Option>
                    <Option value="4">腾讯客服</Option>
                    <Option value="5">前端小白</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="爱好" {...formItemLayout}>
              {
                getFieldDecorator('interest', {
                  initialValue: ['2','5']
                })(
                  <Select mode="multiple">
                    <Option value="1">看动漫</Option>
                    <Option value="2">学英语</Option>
                    <Option value="3">自行车</Option>
                    <Option value="4">科幻电影</Option>
                    <Option value="5">Kindle</Option>
                    <Option value="6">杂谈群聊</Option>
                    <Option value="7">玩吃鸡</Option>
                    <Option value="8">毛笔字</Option>
                  </Select>
                )
              }
            </FormItem>
            <FormItem label="是否已婚" {...formItemLayout}>
              {
                getFieldDecorator('isMarried', {
                  valuePropName:'checked',
                  initialValue: true
                })(
                  <Switch/>
                )
              }
            </FormItem>
            <FormItem label="生日" {...formItemLayout}>
              {
                getFieldDecorator('birthday',{
                  initialValue:moment('2019-01-01')
                })(
                  <DatePicker
                    showTime
                    format="YYYY-MM-DD HH:mm:ss"
                  />
                )
              }
            </FormItem>
            <FormItem label="联系地址" {...formItemLayout}>
              {
                getFieldDecorator('address',{
                  initialValue:'成都市锦江区'
                })(
                  <TextArea
                    autosize={rowObject}
                  />
                )
              }
            </FormItem>
            <FormItem label="早起时间" {...formItemLayout}>
              {
                getFieldDecorator('time')(
                  <TimePicker/>
                )
              }
            </FormItem>
            <FormItem label="头像" {...formItemLayout}>
              {
                getFieldDecorator('userImg')(
                  <Upload
                    listType="picture-card"
                    showUploadList={false}
                    action="//jsonplaceholder.typicode.com/posts/"
                    onChange={this.handleChange}
                  >
                    {this.state.userImg?<img src={this.state.userImg}/>:<Icon type="plus"/>}
                  </Upload>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              {
                getFieldDecorator('userImg')(
                  <Checkbox>我已阅读过<a href="#">smock协议</a></Checkbox>
                )
              }
            </FormItem>
            <FormItem {...offsetLayout}>
              <Button type="primary" onClick={this.handleSubmit}>注册</Button>
            </FormItem>
          </Form>
        </Card>
      </div>
    )
  }
  
}

export default Form.create()(FormRegister);
