import {Controller, useForm} from "react-hook-form";
import {Input, Select} from "antd";

const options = [
    {
        id: '001',
        name: 'мужской',
        value: 'man',
    },
    {
        id: '002',
        name: "женский",
        value: 'woman'
    }
]

export const SignUpPage = () => {
    const {control, handleSubmit} = useForm({defaultValues: {name: 'ivan', gender: "man"}})
    const onSubmit = (data) => console.log(data)
    return (
        <div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                    render={({field: {value, onChange}}) => {
                        return <Input
                            value={value}
                            onChange={onChange}
                        />
                    }}
                    name={'name'}
                    control={control}
                />
                <Controller
                    render={({field: {value, onChange}}) => {
                        return <Select options={options}
                                       value={value}
                                       onChange={onChange}/>
                    }}
                    name={'gender'}
                    control={control}
                />
                <button>submit</button>
            </form>
        </div>
    );
};
