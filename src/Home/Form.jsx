import { Button, Form, Input, message } from 'antd';
import SpinFC from 'antd/lib/spin';
import React, { useState } from 'react';

const MyForm = () => {
  const [form] = Form.useForm();
  const [isFetching, setIsFetching] = useState(false);
  const onFinish = (values) => {
    console.log('Received values:', values);
    setIsFetching(true);
    // Используем метод fetch с методом POST и передаем тело запроса
    fetch('https://email-sender.flareon.ru/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json', // Устанавливаем заголовок Content-Type
      },
      body: JSON.stringify({
        subject: 'заявка с auto-mersi.ru',
        text: `заявка от ${values?.fullName} на продажу машины ${values?.carModel} ${values?.carYear} года.\n Гос номер : ${values?.licensePlate}.\nпробег:${values?.mileage}.\nЖелаемая сумма: ${values?.desiredAmount}.\nКонтактные данные заказчика: ${values?.phone} `,
      }), // Преобразуем объект в JSON и передаем как тело запроса
    })
      .then((response) => response.json()) // Распарсим ответ в JSON
      .then((data) => {
        message.success('Заявка отправлена');
        setIsFetching(false);
      })
      .catch((error) => {
        message.error('Ошибка при отправке');
        setIsFetching(false);
      });
  };

  return (
    <SpinFC spinning={isFetching}>
      <Form form={form} className='form' layout='vertical' onFinish={onFinish}>
        <Form.Item
          label='Укажите Фамилию имя и отчество'
          name='fullName'
          rules={[{ required: true, message: 'Пожалуйста, введите ФИО' }]}>
          <Input placeholder='Иванов Иван Иванович' />
        </Form.Item>
        <Form.Item
          label='Ваш контактный телефон или почту'
          name='phone'
          rules={[{ required: true, message: 'Пожалуйста, введите контактные данные' }]}>
          <Input placeholder='Почта или телефон' />
        </Form.Item>
        <Form.Item
          label='Марка и модель машины'
          name='carModel'
          rules={[{ required: true, message: 'Пожалуйста, введите марку и модель' }]}>
          <Input placeholder='Audi CX4' />
        </Form.Item>

        <Form.Item label='Год машины' name='carYear'>
          <Input placeholder='2015' />
        </Form.Item>
        <Form.Item label='Гос номер' name='licensePlate'>
          <Input placeholder='123 АА 123' />
        </Form.Item>
        <Form.Item label='Пробег' name='mileage'>
          <Input placeholder='30.000 км' />
        </Form.Item>
        <Form.Item label='Желаемая сумма' name='desiredAmount'>
          <Input placeholder='в рублях' />
        </Form.Item>
        <Form.Item>
          <Button className='button' htmlType='submit'>
            Отправить заявку
          </Button>
        </Form.Item>
      </Form>
    </SpinFC>
  );
};

export default MyForm;
