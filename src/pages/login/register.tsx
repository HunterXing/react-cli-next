import React from 'react';
import style from './index.less';
import { Form, Input, Button, Divider } from 'antd';
import { ValidateErrorEntity } from 'rc-field-form/lib/interface';
import { useNavigate } from 'react-router-dom';
import { RuleObject } from 'antd/lib/form';
import { StoreValue } from 'antd/lib/form/interface';

const Register = () => {
  // states
  const [form] = Form.useForm();
  const navigate = useNavigate();

  // methods
  const onFinish = (values: unknown) => {
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: ValidateErrorEntity) => {
    console.log('Failed:', errorInfo);
  };

  // 校验表单的confirm 和 password 是否一致
  const checkConfirm = (
    rule: RuleObject,
    value: StoreValue
  ): Promise<void> | void => {
    if (value && value !== form.getFieldValue('password')) {
      console.log(form.getFieldValue('password'), 'password');
      return Promise.reject('两次输入的密码不一致');
    } else {
      return Promise.resolve();
    }
  };

  // 表单项
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
    // 确认密码
    {
      name: 'confirm',
      rules: [
        { required: true, message: '请输入确认密码!' },
        // 两次密码需保持一致
        {
          validator: checkConfirm,
        },
      ],
      component: (
        <Input.Password visibilityToggle placeholder="请输入确认密码" />
      ),
    },
  ];

  // 去登录
  const toLogin = () => {
    navigate('/login');
  };

  return (
    <div className={style.LoginWrap}>
      <div className={style.LoginBox}>
        <h1 className={style.Title}>注册</h1>
        <Form
          form={form}
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
              注册
            </Button>
          </Form.Item>
          <Divider />
          <Button type="link" onClick={toLogin}>
            去登录
          </Button>
        </Form>
      </div>
    </div>
  );
};

export default Register;
