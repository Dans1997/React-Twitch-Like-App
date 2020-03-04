import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Form, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
  
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

class StreamForm extends React.Component {
    
    renderInput({input}) {
        return (
            <input { ...input } />
        )
    }

    onFinish = (formValues) => {
        this.props.onSubmit(formValues)
    }
    
    render (){
        return (
            <div>
                <Form onFinish={this.props.handleSubmit(this.onFinish)}
                {...layout}
                name="basic"
                initialValues={{ remember: true }}
                >
                    <Form.Item
                    label="Title"
                    name="title"
                    rules={[{ required: true, message: 'Please input a title!'}]}
                    >
                        <Field name="title" component={this.renderInput}/>
                    </Form.Item>

                    <Form.Item
                    label="Description"
                    name="description"
                    rules={[{ required: true, message: 'Please input a description!' }]}
                    >
                        <Field name="description" component={this.renderInput}/>
                    </Form.Item>

                    <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                    </Form.Item>
                </Form>
            </div>
        )
    }
}


export default reduxForm({
    form: 'streamForm'
})(StreamForm);