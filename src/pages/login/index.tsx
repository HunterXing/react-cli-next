import React from 'react';
import style from './index.less';
import { Form, Input, Button, Divider } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { useNavigate } from 'react-router-dom';
const Login = () => {
  // states
  // const [form] = Form.useForm();
  const navigate = useNavigate();
  // methods
  const onFinish = (values: never) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    console.log('Failed:', errorInfo);
  };

  // 标单项
  const formItems = [
    {
      name: 'username',
      rules: [{ required: true, message: '请输入用户名!' }],
      component: <Input placeholder="请输入用户名" />,
    },
    {
      name: 'password',
      rules: [{ required: true, message: '请输入密码!' }],
      component: <Input.Password visibilityToggle placeholder="请输入密码" />,
    },
  ];

  // 去注册
  const toRegister = () => {
    navigate('/register');
  };

  return (
    <div className={style.LoginWrap}>
      <div className={style.LoginBox}>
        <h1 className={style.Title}>请登录</h1>
        <Form
          name="basic"
          wrapperCol={{ span: 24 }}
          style={{ width: '300px' }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          {formItems.map((item) => {
            return (
              <Form.Item name={item.name} key={item.name} rules={item.rules}>
                {item.component}
              </Form.Item>
            );
          })}
          <Form.Item>
            <Button type="primary" htmlType="submit" block>
              登录
            </Button>
          </Form.Item>
          <Divider />
          <Button type="link" onClick={toRegister}>
            没有账号？注册新账号
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Login;
